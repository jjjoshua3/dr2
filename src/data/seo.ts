import { TRACKS } from "@/data/daan";

export const SITE_URL = "https://www.daanroosenbrand.nl/";
export const SITE_TITLE =
  "Daan Roosenbrand | Professioneel Saxofonist, Klarinettist, Docent & Dirigent (Rotterdam)";
export const SITE_DESCRIPTION =
  "Op zoek naar een energieke saxofonist (solo of met DJ), klarinettist, bigband-dirigent of saxofoondocent in regio Rotterdam, Papendrecht, Delft en Roosendaal? Ontdek het portfolio van Codarts-alumnus Daan Roosenbrand.";
export const OG_IMAGE = "https://img.youtube.com/vi/kKDFos-CEd8/maxresdefault.jpg";

const FAVICON =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#111111"/><path fill="#E8C547" d="M19.2 3.6h2.6l-.7 2.4h-2.5l.6-2.4z"/><path fill="#C9A227" d="M17.6 6.2c2.7.15 4.6 1.7 5 3.6h-2.7c-.25-.9-1.2-1.6-2.5-1.7l.2-1.9z"/><path fill="#C9A227" d="M15.1 10.2h4.6c.7 0 1.2.5 1.2 1.2v9.2c0 .5-.3.9-.7 1.1l3.1 5.1H12.4l2.6-4.4c-.4-.3-.6-.8-.6-1.3v-9.7c0-.7.5-1.2.7-1.2z"/><path fill="#E8C547" d="M14.2 23.6h8.4l1.6 3.2H11.8l2.4-3.2z"/><circle cx="17.4" cy="13.4" r="1.05" fill="#111111"/><circle cx="17.4" cy="16.3" r="1.05" fill="#111111"/><circle cx="17.4" cy="19.2" r="1.05" fill="#111111"/></svg>`,
  );

const AREAS = [
  "Rotterdam",
  "Papendrecht",
  "Oud Gastel",
  "Roosendaal",
  "Delft",
  "Zuid-Holland",
  "Noord-Brabant",
];

const GROUPS = [
  { name: "Muziekvereniging Excelsior Papendrecht" },
  { name: "Gastels Fanfare" },
  { name: "Let's Swing Delft" },
  { name: "JD's Big Band" },
  { name: "Coverband IMPAKT" },
  { name: "Night at the Jukebox", url: "https://www.nightatthejukebox.nl/" },
];

function videoDate(id: string) {
  if (id === "22HLcpeJl3k") return "2015-06-15";
  if (id === "Mf3JzKaa7D8") return "2019-08-20";
  return undefined;
}

export const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}#daan`,
      name: "Daan Roosenbrand",
      url: SITE_URL,
      image: OG_IMAGE,
      jobTitle: ["Saxofonist", "Klarinettist", "Muziekdocent", "Dirigent"],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Codarts Rotterdam",
        url: "https://www.codarts.nl/",
      },
      areaServed: AREAS,
      memberOf: GROUPS.map((group) => ({
        "@type": "MusicGroup",
        name: group.name,
        ...(group.url ? { url: group.url } : {}),
      })),
      worksFor: GROUPS.map((group) => ({
        "@type": "Organization",
        name: group.name,
        ...(group.url ? { url: group.url } : {}),
      })),
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}#praktijk`,
      name: "Daan Roosenbrand",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: OG_IMAGE,
      founder: { "@id": `${SITE_URL}#daan` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rotterdam",
        addressRegion: "Zuid-Holland",
        addressCountry: "NL",
      },
      areaServed: AREAS.map((name) => ({ "@type": "AdministrativeArea", name })),
      knowsAbout: [
        "Saxofonist Rotterdam",
        "Saxofonist boeken",
        "Sax & DJ",
        "Klarinettist",
        "Saxofoonles Papendrecht",
        "Saxofoonles Oud Gastel",
        "Bigband dirigent Delft",
        "Codarts saxofonist",
      ],
    },
    ...TRACKS.map((track) => {
      const date = videoDate(track.youtubeId);
      return {
        "@type": "VideoObject",
        name: `${track.title} — ${track.artist}`,
        description: `${track.artist} speelt ${track.title}. ${track.context}. Saxofoon: Daan Roosenbrand.`,
        thumbnailUrl: `https://i.ytimg.com/vi/${track.youtubeId}/hqdefault.jpg`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${track.youtubeId}`,
        contentUrl: `https://www.youtube.com/watch?v=${track.youtubeId}`,
        ...(date ? { uploadDate: date } : {}),
        publisher: { "@id": `${SITE_URL}#daan` },
      };
    }),
  ],
});

export function siteMeta() {
  return [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: SITE_TITLE },
    { name: "description", content: SITE_DESCRIPTION },
    { name: "robots", content: "index, follow, max-image-preview:large" },
    { name: "author", content: "Daan Roosenbrand" },
    { name: "geo.region", content: "NL-ZH" },
    { name: "geo.placename", content: "Rotterdam" },
    { name: "theme-color", content: "#111111" },
    { property: "og:title", content: SITE_TITLE },
    { property: "og:description", content: SITE_DESCRIPTION },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "nl_NL" },
    { property: "og:url", content: SITE_URL },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:alt", content: "Daan Roosenbrand speelt Baker Street op saxofoon" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: SITE_TITLE },
    { name: "twitter:description", content: SITE_DESCRIPTION },
    { name: "twitter:image", content: OG_IMAGE },
  ];
}

export function siteLinks(stylesheet: string) {
  return [
    { rel: "icon", type: "image/svg+xml", href: FAVICON },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "stylesheet", href: stylesheet },
    { rel: "preconnect", href: "https://img.youtube.com" },
    { rel: "preconnect", href: "https://i.ytimg.com" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
  ];
}

export function siteScripts() {
  return [{ type: "application/ld+json", children: jsonLd }];
}
