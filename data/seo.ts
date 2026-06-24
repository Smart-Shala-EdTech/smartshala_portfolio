export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SmartShala",
  url: "https://smartshala.com",
  sameAs: [
    "https://www.linkedin.com/company/smartshala",
    "https://github.com/smartshala",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@smartshala.com",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SmartShala",
  url: "https://smartshala.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://smartshala.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
