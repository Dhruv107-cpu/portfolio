import { siteConfig } from "@/lib/data";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: "AI Engineer",
    description: siteConfig.description,
    sameAs: [siteConfig.linkedin, siteConfig.github],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Full Stack Development",
      "Large Language Models",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
