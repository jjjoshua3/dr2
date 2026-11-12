/**
 * Leeftijd van Daan — pas alleen deze regel aan.
 * Hero en biografie lezen dit ene veld.
 */
export const DAAN_LEEFTIJD = "XX";

export const BOOKING_SUBJECT = "Boeking — Daan Roosenbrand";

export const STATUS =
  "Locatie: Rotterdam (010) // Instrumenten: saxofoon & klarinet // Rollen: solist, bandlid, dirigent & docent // Opleiding: Codarts";

export const COORDS = "51.9244° N, 4.4777° E";

export const MARQUEE =
  "Saxofoon — Klarinet — Lichte muziek — Big bands — Dirigent — Sessiemuzikant — Docent — ";

export const INTENTS = [
  "Een live optreden (Sax/Klarinet)",
  "Een Sax & DJ set",
  "Coverband IMPAKT of Night at the Jukebox",
  "Directie & Bigband",
  "Saxofoonles of Basisschool-project",
  "Iets anders",
] as const;

export type SaxKey = {
  id: string;
  n: string;
  cx: number;
  cy: number;
  title: string;
  text: string;
};

/** Kleppen op de hero-saxofoon. cx/cy horen bij de tekening in sax.tsx. */
export const SAX_KEYS: SaxKey[] = [
  {
    id: "ahoy",
    n: "01",
    cx: 198,
    cy: 108,
    title: "Rotterdam Ahoy",
    text: "Feest- en Cantusband Bracchus, Eurekaweek 2019. Volle zaal, één solo die de hal pakte.",
  },
  {
    id: "dj",
    n: "02",
    cx: 158,
    cy: 236,
    title: "Sax & DJ",
    text: "Samen met DJ’s: een live-set die niet in de pauzestand gaat. Adem tegen de beat.",
  },
  {
    id: "impakt",
    n: "03",
    cx: 158,
    cy: 292,
    title: "IMPAKT",
    text: "Coverband uit Roosendaal. Saxofoon in de frontlinie, tussen refrein en zaal.",
  },
  {
    id: "jukebox",
    n: "04",
    cx: 156,
    cy: 348,
    title: "Night at the Jukebox",
    text: "Vaste band. Live, luid, eigen publiek. De jukebox blijft aan.",
  },
  {
    id: "directie",
    n: "05",
    cx: 154,
    cy: 404,
    title: "Dirigent",
    text: "Let's Swing Delft en JD's Big Band. De maat, de kleur, de knipoog naar de sectie.",
  },
  {
    id: "docent",
    n: "06",
    cx: 150,
    cy: 456,
    title: "Docent",
    text: "Individuele saxofoonles, verenigingen en basisscholen. Plezier in muziek staat voorop.",
  },
];

export type Track = {
  n: string;
  title: string;
  artist: string;
  context: string;
  youtubeId: string;
  alt: string;
  site?: { href: string; label: string };
};

export const TRACKS: Track[] = [
  {
    n: "01",
    title: "It's A Man's World",
    artist: "Nick Nicolai",
    context: "Ranking The Talent TV",
    youtubeId: "WjrbjayKkLQ",
    alt: "Daan Roosenbrand op saxofoon bij It's A Man's World met Nick Nicolai",
  },
  {
    n: "02",
    title: "Night at the Jukebox",
    artist: "Vaste band",
    context: "Live",
    youtubeId: "JUqgIJMsIZc",
    alt: "Daan Roosenbrand speelt saxofoon live met Night at the Jukebox",
    site: { href: "https://www.nightatthejukebox.nl/", label: "nightatthejukebox.nl" },
  },
  {
    n: "03",
    title: "Baker Street",
    artist: "Excelsior & Daan Roosenbrand",
    context: "Live solo",
    youtubeId: "kKDFos-CEd8",
    alt: "Daan Roosenbrand speelt saxofoonsolo in Baker Street live met Excelsior Papendrecht",
  },
  {
    n: "04",
    title: "Against All Odds",
    artist: "Excelsior & Daan Roosenbrand",
    context: "Live solo",
    youtubeId: "WLPDBI1BV6g",
    alt: "Daan Roosenbrand speelt de saxofoonsolo van Against All Odds live met Excelsior",
  },
  {
    n: "05",
    title: "Live in Rotterdam Ahoy",
    artist: "Feest- en Cantusband Bracchus",
    context: "Eurekaweek 2019",
    youtubeId: "Mf3JzKaa7D8",
    alt: "Daan Roosenbrand solo op saxofoon in Rotterdam Ahoy met Feest- en Cantusband Bracchus",
  },
  {
    n: "06",
    title: "Licht en Donker",
    artist: "Codarts Pop Orchestra",
    context: "Froukje",
    youtubeId: "rpkXoRAOxDU",
    alt: "Daan Roosenbrand met het Codarts Pop Orchestra in Licht en Donker van Froukje",
  },
  {
    n: "07",
    title: "Hold Back",
    artist: "Codarts Pop Orchestra",
    context: "Margi Sinniah",
    youtubeId: "gVm_NMxlTmU",
    alt: "Daan Roosenbrand op saxofoon in Hold Back met het Codarts Pop Orchestra",
  },
  {
    n: "08",
    title: "Have Yourself A Merry Little Christmas",
    artist: "Daan Roosenbrand",
    context: "Solo",
    youtubeId: "bGFwhE3EVrA",
    alt: "Daan Roosenbrand speelt solo Have Yourself A Merry Little Christmas op saxofoon",
  },
  {
    n: "09",
    title: "Crooner's Serenade",
    artist: "Excelsior Papendrecht",
    context: "Uit het Archief • 2015",
    youtubeId: "22HLcpeJl3k",
    alt: "Daan Roosenbrand in 2015 met Crooner's Serenade bij Excelsior Papendrecht",
  },
];

export type Pillar = {
  n: string;
  title: string;
  body: string;
  href: string;
  link: string;
  image?: string;
  crop?: string;
  alt?: string;
  solid?: boolean;
};

export const PILLARS: Pillar[] = [
  {
    n: "01",
    title: "Bands & Podium",
    body: "Talloze bands, bigbands en orkesten. Gewaardeerd lid van de Dave Warmerdam Band. Nu in coverband IMPAKT (Roosendaal) en Night at the Jukebox.",
    image: "/photos/duo.jpg",
    crop: "crop-duo",
    alt: "Daan Roosenbrand met saxofoon naast een zangeres op een paars verlicht podium",
    href: "#podium",
    link: "Naar de negen sporen",
  },
  {
    n: "02",
    title: "Sax & DJ",
    body: "Samenwerkingen met DJ’s voor een opwindende, dynamische live-beleving. Het mondstuk blijft een instrument, geen sample.",
    image: "/photos/fender.jpg",
    crop: "crop-fender",
    alt: "Daan Roosenbrand speelt saxofoon in clublicht, met een gitaarhals op de voorgrond",
    href: "#podium",
    link: "Hoor de zaal",
  },
  {
    n: "03",
    title: "Dirigent",
    body: "Inspirerend muzikaal leider voor Let's Swing Delft en de JD's Big Band. Timing, kleur en een band die durft te swingen.",
    image: "/photos/close.jpg",
    crop: "crop-close",
    alt: "Close-up van Daan Roosenbrand met saxofoon onder groen en rood licht",
    href: "#directie",
    link: "Naar de directie-index",
  },
  {
    n: "04",
    title: "Muziekeducatie",
    body: "Individuele saxofoonlessen, lessen bij verenigingen en muziek op basisscholen. Het beleven van plezier aan muziek staat altijd centraal.",
    solid: true,
    href: "#rider",
    link: "Vraag een les aan",
  },
];

export type Role = {
  id: string;
  name: string;
  role: string;
  status: string;
  tone: "now" | "arch";
  text: string;
};

export const ROLES: Role[] = [
  {
    id: "swing",
    name: "Let's Swing Delft",
    role: "Dirigent",
    status: "Heden",
    tone: "now",
    text: "Staat als inspirerend muzikaal leider voor de band. Directie als ambacht: timing, kleur en ruimte voor solisten.",
  },
  {
    id: "jds",
    name: "JD's Big Band",
    role: "Dirigent",
    status: "Heden",
    tone: "now",
    text: "Muzikaal leider voor de bigband. Secties scherp, arrangementen aan het licht, de zaal in de pocket.",
  },
  {
    id: "excelsior",
    name: "Muziekvereniging Excelsior Papendrecht",
    role: "Saxofoondocent & solist",
    status: "Heden",
    tone: "now",
    text: "Lesgeven én soleren. Hier groeide het podiumspel — van Crooner's Serenade tot de concerten van nu.",
  },
  {
    id: "gastel",
    name: "Gastels Fanfare",
    role: "Saxofoondocent",
    status: "Sinds 2023 — heden",
    tone: "now",
    text: "Saxofoonles binnen de fanfare sinds 2023. Techniek, adem en plezier in dezelfde repetitie.",
  },
  {
    id: "scholen",
    name: "Individuele lessen & basisscholen",
    role: "Privédocent saxofoon & muziekdocent basisonderwijs",
    status: "Plezier centraal",
    tone: "now",
    text: "Privéles saxofoon, lessen bij verenigingen en projecten op basisscholen. Plezier in muziek is het uitgangspunt, niet de bijzaak.",
  },
  {
    id: "ambacht",
    name: "De Ambachtse Muziekschool",
    role: "Voormalig saxofoondocent",
    status: "Archief",
    tone: "arch",
    text: "Eerdere lespraktijk. De lijn loopt door in de lessen en verenigingen van nu.",
  },
  {
    id: "rover",
    name: "Muziekschool de Rover",
    role: "Voormalig saxofoondocent",
    status: "Archief",
    tone: "arch",
    text: "Eerdere lespraktijk. Archief — het docentschap is daarna alleen maar breder geworden.",
  },
];

export const SECTIONS = [
  { id: "hero", n: "01", label: "Hero" },
  { id: "bio", n: "02", label: "Bio" },
  { id: "podium", n: "03", label: "Podium" },
  { id: "directie", n: "04", label: "Directie" },
  { id: "rider", n: "05", label: "Rider" },
] as const;
