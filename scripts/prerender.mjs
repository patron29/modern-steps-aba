import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { render } from '../dist-server/entry-server.js';

const routes = ['/', '/privacy-policy', '/terms-of-service'];
const template = readFileSync('dist/index.html', 'utf-8');

for (const route of routes) {
  const appHtml = render(route);
  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );
  if (html === template) {
    throw new Error(`Prerender failed to inject content for ${route}`);
  }
  const outPath =
    route === '/'
      ? 'dist/index.html'
      : join('dist', route.slice(1), 'index.html');
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  console.log('Prerendered', route);
}
