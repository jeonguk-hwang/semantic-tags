import "./styles.css";

// JSON-LD Schema for structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "My Blog",
  description: "A blog about web development and design trends.",
  url: "https://example.com",
  author: {
    "@type": "Person",
    name: "Santa",
  },
  publisher: {
    "@type": "Organization",
    name: "My Blog",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://example.com",
  },
};

// Inject JSON-LD script dynamically
const script = document.createElement("script");
script.type = "application/ld+json";
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);
