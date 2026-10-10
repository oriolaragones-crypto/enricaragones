import { languages, sections } from '../i18n/ui';

const site = 'https://www.enricaragones.com';
const langs = Object.keys(languages);
const paths = ['', ...sections.map((s) => `${s}/`)];

export const GET = () => {
  const urls = paths
    .flatMap((p) =>
      langs.map((l) => {
        const alts = langs
          .map((a) => `    <xhtml:link rel="alternate" hreflang="${a}" href="${site}/${a}/${p}" />`)
          .join('\n');
        return `  <url>\n    <loc>${site}/${l}/${p}</loc>\n${alts}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${site}/ca/${p}" />\n  </url>`;
      }),
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
