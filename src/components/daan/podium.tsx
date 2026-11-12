import { useState } from "react";
import { TRACKS } from "@/data/daan";

function thumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export function Podium() {
  const [active, setActive] = useState<number | null>(null);
  const shown = TRACKS[active ?? 0];
  const playing = active !== null;

  return (
    <section id="podium">
      <header className="border-b border-ink px-5 py-7 lg:px-10 lg:py-10">
        <p className="meta text-mute">03 / Podium · 01 — 09</p>
        <h2 className="section-title mt-3">Discografie & beeld</h2>
        <p className="lede">
          Een krat, geen muur van spelers. Kies een spoor — de plaat schuift uit en het beeld speelt, met
          geluid.
        </p>
      </header>

      <div className="grid lg:grid-cols-12">
        <div className="order-2 border-ink lg:order-1 lg:col-span-5 lg:border-r">
          {TRACKS.map((track, index) => (
            <button
              key={track.youtubeId}
              type="button"
              className="track"
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span className="track-n">{track.n}</span>
              <span>
                <span className="track-title">{track.title}</span>
                <span className="track-sub">
                  {track.artist} · {track.context}
                  {track.site ? ` · ${track.site.label}` : ""}
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="screen-wrap order-1 lg:order-2 lg:col-span-7">
          <div className={`vinyl-disc${playing ? " is-out" : ""}`} aria-hidden="true">
            <div className={`groove${playing ? " is-spin" : ""}`}>
              <span className="vinyl-core">DR</span>
            </div>
          </div>
          <div className="screen-frame">
            {playing ? (
              <iframe
                key={shown.youtubeId}
                src={`https://www.youtube-nocookie.com/embed/${shown.youtubeId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`}
                title={`${shown.artist}: ${shown.title}`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button type="button" className="poster-btn" onClick={() => setActive(0)}>
                <img src={thumb(shown.youtubeId)} alt="" />
                <span className="play-mark" />
                <span className="poster-label meta">Zet de naald — geluid aan</span>
              </button>
            )}
          </div>
          <p className="screen-caption meta">
            {shown.n} — {shown.artist}: {shown.title}
          </p>
          <a className="site-cta" href="https://www.nightatthejukebox.nl/" target="_blank" rel="noreferrer">
            Night at the Jukebox
          </a>
        </div>

        <div className="thumbs order-3 lg:col-span-12">
          {TRACKS.map((track, index) => (
            <button
              key={`thumb-${track.youtubeId}`}
              type="button"
              className="thumb"
              aria-pressed={active === index}
              aria-label={`${track.n} ${track.title}`}
              onClick={() => setActive(index)}
            >
              <img src={thumb(track.youtubeId)} alt="" loading="lazy" />
              <span>{track.n}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
