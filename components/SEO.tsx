import { useEffect } from 'react';
import { portfolioData } from '../lib/portfolioData';
export function SEO() {
  useEffect(() => {
    // Set document title
    document.title = `${portfolioData.personal.name} | ${portfolioData.personal.role}`;
    // Update meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    updateMeta('description', portfolioData.personal.summary);
    updateMeta(
      'og:title',
      `${portfolioData.personal.name} | ${portfolioData.personal.role}`,
      true
    );
    updateMeta('og:description', portfolioData.personal.summary, true);
    updateMeta('og:type', 'website', true);
    // Inject JSON-LD
    let script = document.querySelector('#json-ld-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: portfolioData.personal.name,
      jobTitle: portfolioData.personal.role,
      url: window.location.href,
      sameAs: [portfolioData.personal.github, portfolioData.personal.linkedin],
      description: portfolioData.personal.summary
    };
    script.textContent = JSON.stringify(schema);
  }, []);
  return null;
}