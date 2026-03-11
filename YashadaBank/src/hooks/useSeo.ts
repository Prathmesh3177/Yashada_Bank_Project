import { useEffect } from 'react';

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

const SITE_NAME = 'Yashada Multistate Cooperative Credit Society';
const SITE_URL = 'https://yashadabank.in';

const upsertMeta = (selector: string, attrs: Record<string, string>, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement('meta');
    Object.entries(attrs).forEach(([key, value]) => meta?.setAttribute(key, value));
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
};

export const useSeo = ({ title, description, path, image = '/og-default.jpg' }: SeoConfig) => {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description' }, description);
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title);
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description);
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, `${SITE_URL}${path}`);
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, `${SITE_URL}${image}`);
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, `${SITE_URL}${image}`);
  }, [description, image, path, title]);
};

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: SITE_NAME,
  areaServed: 'Maharashtra',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-192.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Yashada Heights, Naikwadi Nagar',
    addressLocality: 'Dharashiv',
    addressRegion: 'Maharashtra',
    postalCode: '413501',
    addressCountry: 'IN'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-12345-67890',
    contactType: 'customer support',
    areaServed: 'IN'
  }
});
