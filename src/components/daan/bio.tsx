import type { ReactNode } from "react";
import { DAAN_LEEFTIJD, MARQUEE, PILLARS } from "@/data/daan";

function Mark({ children }: { children: ReactNode }) {
  return <mark className="hl">{children}</mark>;
}

export function Bio() {
  const phrase = MARQUEE.repeat(2);
  return (
    <section id="bio">
      <div className="grid lg:grid-cols-12">
        <div className="border-b border-ink lg:col-span-4 lg:border-r lg:border-b-0">
          <img
            src="/photos/portret.jpg"
            alt="Portret van Daan Roosenbrand"
            width={400}
            height={400}
            className="crop-portret aspect-square w-full object-cover"
          />
          <div className="border-t border-ink px-5 py-5">
            <p className="age-num">{DAAN_LEEFTIJD}</p>
            <p className="meta mt-2 text-mute">Jaar · rasechte Rotterdammer</p>
          </div>
        </div>
        <div className="border-b border-ink px-5 py-7 lg:col-span-8 lg:px-10 lg:py-10">
          <p className="meta text-mute">02 / Biografie</p>
          <h2 className="section-title mt-3">
            Mondstuk
            <br />
            als kompas
          </h2>
          <div className="bio-copy mt-6 max-w-2xl">
            <p>
              Daan Roosenbrand is een rasechte <Mark>Rotterdammer</Mark>, {DAAN_LEEFTIJD} jaar oud,
              afgestudeerd aan <Mark>Codarts Rotterdam</Mark>. Hij is{" "}
              <Mark>saxofonist</Mark> én <Mark>klarinettist</Mark>, met een grote voorliefde voor{" "}
              <Mark>lichte muziek</Mark>, en hij beweegt tussen genres zonder het lied kwijt te raken.
            </p>
            <p>
              Op het podium stond hij in talloze bands, bigbands en orkesten. Hij was een gewaardeerd lid
              van de <Mark>Dave Warmerdam Band</Mark> en speelt nu in coverband <Mark>IMPAKT</Mark>{" "}
              (Roosendaal) en bij{" "}
              <Mark>
                <a
                  className="inline-link"
                  href="https://www.nightatthejukebox.nl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Night at the Jukebox
                </a>
              </Mark>
              . Met DJ’s bouwt hij een <Mark>Sax & DJ</Mark>-set die niet stilvalt.
            </p>
            <p>
              Als dirigent staat hij voor <Mark>Let's Swing Delft</Mark> en de <Mark>JD's Big Band</Mark>.
              In de lespraktijk — individueel, bij verenigingen en op <Mark>basisscholen</Mark> — blijft{" "}
              <Mark>plezier in muziek</Mark> het middelpunt.
            </p>
          </div>
          <p className="factline">IMPAKT · Night at the Jukebox · Let's Swing Delft · JD's Big Band</p>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>{phrase}</span>
          <span>{phrase}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        {PILLARS.map((pillar) =>
          pillar.solid ? (
            <article key={pillar.n} className="pillar pillar-solid">
              <div className="pillar-copy">
                <p className="pillar-watermark">{pillar.n}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
                <a href={pillar.href}>{pillar.link}</a>
              </div>
            </article>
          ) : (
            <article key={pillar.n} className="pillar">
              <img src={pillar.image} alt={pillar.alt ?? ""} className={pillar.crop} />
              <div className="scrim" />
              <div className="pillar-copy">
                <p className="meta">{pillar.n} / 04</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
                <a href={pillar.href}>{pillar.link}</a>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
