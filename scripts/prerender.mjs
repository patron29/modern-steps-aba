import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { render } from '../dist-server/entry-server.js';
import { FAQS } from '../src/data/faqs.js';

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
  '/resources': {
    title: 'Parent Resources | Modern Steps ABA',
    description:
      'Plain-language guides for parents: how ABA therapy starts in Virginia, what ABA terms mean, and how to choose between in-home and center-based ABA.',
  },
  '/resources/starting-aba-therapy-virginia': {
    title: "Starting ABA Therapy in Virginia: A Parent's Guide | Modern Steps ABA",
    description:
      'How to start ABA therapy in Virginia, step by step: diagnosis, insurance verification, the initial assessment, and what the first weeks of in-home ABA look like.',
  },
  '/resources/aba-terms-glossary': {
    title: 'ABA Terms in Plain Language: A Glossary for Parents | Modern Steps ABA',
    description:
      'BCBA, RBT, FBA, NET, BIP: the ABA therapy terms parents hear at assessments and IEP meetings, explained in plain language.',
  },
  '/resources/in-home-vs-center-based-aba': {
    title: 'In-Home vs. Center-Based ABA: How to Choose | Modern Steps ABA',
    description:
      'An honest comparison of in-home and center-based ABA therapy: how each works, who each one suits, and the questions that help your family decide.',
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
      'Natural Environment Teaching (NET) builds skills through play and daily routines at home. BCBA-led, no waitlist. Call (571) 866-0640.',
  },
  '/services/caregiver-training': {
    title: 'Caregiver Training & Support | Modern Steps ABA',
    description:
      'Caregiver training and support is built into every Modern Steps ABA plan, using the Behavioral Skills Training model. No waitlist. Call (571) 866-0640.',
  },
  '/aba-therapy-woodbridge-va': {
    title: 'ABA Therapy in Woodbridge, VA | Modern Steps ABA',
    description:
      'In-home ABA therapy in Woodbridge, VA and Prince William County from Modern Steps ABA. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640.',
  },
  '/aba-therapy-richmond-va': {
    title: 'ABA Therapy in Richmond, VA | Modern Steps ABA',
    description:
      'In-home ABA therapy in Richmond, VA, including Chesterfield and Henrico Counties. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640.',
  },
  '/aba-therapy-manassas-va': {
    title: 'ABA Therapy in Manassas, VA | Modern Steps ABA',
    description:
      'In-home ABA therapy in Manassas, VA and western Prince William County. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640.',
  },
  '/aba-therapy-alexandria-va': {
    title: 'ABA Therapy in Alexandria, VA | Modern Steps ABA',
    description:
      'In-home ABA therapy in Alexandria, VA and nearby Fairfax County communities. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640.',
  },
  '/aba-therapy-fairfax-va': {
    title: 'ABA Therapy in Fairfax, VA | Modern Steps ABA',
    description:
      'In-home ABA therapy in Fairfax, VA and Fairfax County from Modern Steps ABA. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640.',
  },
  '/aba-therapy-fredericksburg-va': {
    title: 'ABA Therapy in Fredericksburg, VA | Modern Steps ABA',
    description:
      'In-home ABA therapy in Fredericksburg, VA and Spotsylvania County from Modern Steps ABA. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640.',
  },
  '/aba-therapy-stafford-va': {
    title: 'ABA Therapy in Stafford, VA | Modern Steps ABA',
    description:
      'In-home ABA therapy in Stafford, VA and Stafford County from Modern Steps ABA. BCBA-led, no waitlist, primarily ages 2-16, serving up to 21. Call (571) 866-0640.',
  },
};

const siteUrl = 'https://modernstepsaba.com';
const routes = Object.keys(head);
const template = readFileSync('dist/index.html', 'utf-8');

// Route coverage guard: the routes rendered here must be exactly the routes
// declared in src/App.jsx, so the two lists can never drift apart silently.
// The catch-all "*" route is not a real URL and is excluded.
if (!FAQS.length) {
  throw new Error('No FAQs found in src/data/faqs.js');
}

const appRoutes = new Set(
  [...readFileSync('src/App.jsx', 'utf-8').matchAll(/<Route\s+path="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((path) => path.startsWith('/'))
    .map((path) => (path.startsWith('/') ? path : `/${path}`))
);
const prerenderRoutes = new Set(routes);
const onlyInApp = [...appRoutes].filter((route) => !prerenderRoutes.has(route));
const onlyInPrerender = [...prerenderRoutes].filter(
  (route) => !appRoutes.has(route)
);
if (onlyInApp.length || onlyInPrerender.length) {
  throw new Error(
    `Route drift: in App.jsx but not prerender: ${onlyInApp.join(', ') || 'none'}; in prerender but not App.jsx: ${onlyInPrerender.join(', ') || 'none'}`
  );
}

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
  const canonical = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
  html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${description}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${description}" />`
  );

  // The FAQPage schema is generated from src/data/faqs.js and belongs to
  // the homepage only. The template no longer contains it: append it for
  // the homepage, and fail the build if it ever shows up on another route.
  let structuredDataFound = false;
  html = html.replace(
    /(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/,
    (match, open, json, close) => {
      structuredDataFound = true;
      const data = JSON.parse(json);
      if (route === '/') {
        data['@graph'].push({
          '@type': 'FAQPage',
          mainEntity: FAQS.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        });
      } else if (
        data['@graph'].some((node) => node['@type'] === 'FAQPage')
      ) {
        throw new Error(
          `FAQPage structured data found on non-homepage route ${route}`
        );
      }
      return open + JSON.stringify(data, null, 2) + close;
    }
  );
  if (!structuredDataFound) {
    throw new Error(`Prerender failed to find structured data for ${route}`);
  }

  const outPath =
    route === '/'
      ? 'dist/index.html'
      : join('dist', route.slice(1), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log('Prerendered', route);
}

// Generate the sitemap from the same routes map used for prerendering, so
// it can never drift from the pages the build actually emits.
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(
    (route) =>
      `  <url>\n    <loc>${route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`}</loc>\n  </url>`
  ),
  '</urlset>',
  '',
].join('\n');
writeFileSync('dist/sitemap.xml', sitemap);
console.log('Generated dist/sitemap.xml');
