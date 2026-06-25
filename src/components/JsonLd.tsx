export function generateJsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohammed BOULOUD",
    jobTitle: "Engineering Student & Developer",
    url: "https://johndoe.dev",
    sameAs: [
      "https://github.com/johndoe",
      "https://linkedin.com/in/johndoe",
      "https://x.com/johndoe",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mohammed BOULOUD – Portfolio",
    url: "https://johndoe.dev",
    description:
      "Engineering student at EHTP specializing in Geomatics & GIS. Passionate about low-level programming, reverse engineering, and full-stack development.",
  };

  return {
    person: JSON.stringify(personSchema),
    website: JSON.stringify(websiteSchema),
  };
}

export default function JsonLd() {
  const { person, website } = generateJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: person }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: website }}
      />
    </>
  );
}
