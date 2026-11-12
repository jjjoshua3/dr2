import { useState } from "react";
import { COORDS, DAAN_LEEFTIJD, SAX_KEYS, STATUS, type SaxKey } from "@/data/daan";
import { Sax } from "@/components/daan/sax";

const REST: Pick<SaxKey, "n" | "title" | "text"> = {
  n: "00",
  title: "Het mechaniek",
  text: "Beweeg over de kleppen — of tik ze aan. Elke klep is een flits uit het werk.",
};

export function Hero() {
  const [flash, setFlash] = useState<Pick<SaxKey, "n" | "title" | "text">>(REST);

  return (
    <section id="hero" className="grid lg:grid-cols-12" aria-labelledby="hero-title">
      <div className="status-line meta order-1 lg:col-span-12">
        <p>{STATUS}</p>
        <p>01 / 05</p>
      </div>

      <header className="title-cell order-2 lg:col-span-12">
        <h1 id="hero-title" className="hero-title">
          <span className="ln-daan">Daan</span>
          <span className="ln-name">Roosenbrand</span>
        </h1>
        <p className="instruments">
          <span>Saxofoon</span>
          <i aria-hidden="true">·</i>
          <span>Klarinet</span>
          <i aria-hidden="true">·</i>
          <span>Directie</span>
        </p>
      </header>

      <div className="photo-cell order-3 lg:order-4 lg:col-span-7">
        <img
          src="/photos/solo.jpg"
          alt="Daan Roosenbrand speelt saxofoon op een blauw verlicht podium"
          width={960}
          height={960}
          fetchPriority="high"
          decoding="async"
          className="crop-solo"
        />
        <p className="photo-cap meta">Solo / podium</p>
        <div className="badge-wrap" data-vinyl="">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <path id="badge-ring" d="M50 50 m-37 0 a37 37 0 1 1 74 0 a37 37 0 1 1 -74 0" />
            </defs>
            <circle cx="50" cy="50" r="48" fill="var(--color-paper)" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="var(--color-brass)" strokeWidth="1" />
            <text fontSize="6.2" letterSpacing="1.4">
              <textPath href="#badge-ring">DAAN ROOSENBRAND — ROTTERDAM — LIVE — SAX — KLARINET — </textPath>
            </text>
            <text x="50" y="54" textAnchor="middle" fontSize="13" fontFamily="Syne" fontWeight="800">
              010
            </text>
          </svg>
        </div>
      </div>

      <div className="meta-cell order-4 lg:order-3 lg:col-span-5">
        <p className="age-num">{DAAN_LEEFTIJD}</p>
        <p className="meta mt-2 text-mute">Jaar · Rotterdammer</p>
        <p className="mt-5 max-w-md text-lg leading-snug">
          Saxofonist Rotterdam — saxofonist boeken voor solo of een Sax & DJ-set. Klarinettist,
          bigband-dirigent en docent, afgestudeerd als Codarts-saxofonist.
        </p>
        <p className="meta pin mt-4 text-mute">{COORDS}</p>
      </div>

      <div className="sax-row order-5 lg:col-span-12">
        <div className="flash order-2 lg:order-1">
          <p className="meta text-copper">
            Klep {flash.n} / {String(SAX_KEYS.length).padStart(2, "0")}
          </p>
          <p className="flash-title">{flash.title}</p>
          <p>{flash.text}</p>
        </div>
        <div className="order-1 flex items-center justify-center lg:order-2">
          <Sax
            variant="playable"
            className="hero-sax"
            activeId={flash.n === "00" ? null : SAX_KEYS.find((key) => key.n === flash.n)?.id}
            onPick={setFlash}
          />
        </div>
      </div>
    </section>
  );
}
