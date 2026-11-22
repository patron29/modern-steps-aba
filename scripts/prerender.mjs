import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { render } from '../dist-server/entry-server.js';

const head = {
  '/': {
    title: 'Modern Steps ABA | In-Home ABA Therapy Services in Virginia',
    description:
      'Modern Steps ABA provides in-home ABA therapy across Virginia. Now enrolling with no waitlist. Primarily ages 2-16, serving up to 21. We accept most Medicaid and commercial insurances. Call (571) 866-0640.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Modern Steps ABA',
    description: 'Privacy Policy for Modern Steps ABA - how we collect, use, and protect your information.',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Modern Steps ABA',
    description: 'Terms of Service for Modern Steps ABA in-home ABA therapy services in Virginia.',
  },
  '/services/in-home-aba-therapy': {
    title: 'In-Home ABA Therapy in Virginia | Modern Steps ABA',
    description:
      'In-home ABA therapy across Virginia from Modern Steps ABA. BCBA-led, evidence-based care at home, primarily ages 2-16, serving up to 21. No waitlist. Call (571) 866-0640.',
  },
  '/services/early-intervention-aba': {
    title: 'Early Intervention ABA Therapy | Modern Steps ABA',
    description:
      'Early intervention ABA therapy at home from Modern Steps ABA, primarily starting at age 2. Play-based, BCBA-led, no waitlist. Call (571) 866-0640.',
  },
  '/services/functional-behavior-assessment': {
    title: 'Functional Behavior Assessment (FBA) | Modern Steps ABA',
    description:
      'A Functional Behavior Assessment (FBA) from a Modern Steps ABA BCBA identifies why challenging behavior happens and builds the plan to change it. Call (571) 866-0640.',
  },
  '/services/natural-environment-teaching': {
    title: 'Natural Environment Teaching (NET) | Modern Steps ABA',
    description:
      'Natural Environment Teaching (NET) builds skills through play and daily routines at home. BCBA-led ABA from Modern Steps ABA across Virginia. Call (571) 866-0640.',
  },
  '/services/caregiver-training': {
    title: 'Caregiver Training & Support | Modern Steps ABA',
    description:
      'Caregiver training and support is built into every Modern Steps ABA plan, using the Behavioral Skills Training model. No waitlist. Call (571) 866-0640.',
  },
};

const routes = Object.keys(head);
const template = readFileSync('dist/index.html', 'utf-8');

for (const route of routes) {
  const appHtml = render(route);
  let html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  if (html === template) {
    throw new Error(`Prerender failed to inject content for ${route}`);
  }
  const { title, description } = head[route];
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`
  );
  const outPath =
    route === '/'
      ? 'dist/index.html'
      : join('dist', route.slice(1), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log('Prerendered', route);
}
