import { writeFileSync } from 'node:fs';

const baseUrl = 'https://yashadabank.in';
const routes = [
  '/',
  '/about-us',
  '/chairman-message',
  '/board-of-directors',
  '/deposit-schemes',
  '/loan-services',
  '/member-services',
  '/downloads',
  '/news-notices',
  '/branch-locator',
  '/contact-us',
  '/complaint-form'
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
  .map((route) => `  <url><loc>${baseUrl}${route}</loc></url>`)
  .join('\n')}\n</urlset>\n`;

writeFileSync('public/sitemap.xml', xml, 'utf-8');
