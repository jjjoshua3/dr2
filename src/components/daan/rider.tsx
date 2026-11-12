import { useState } from "react";
import { BOOKING_SUBJECT, COORDS, INTENTS } from "@/data/daan";
import { Credit } from "@/components/daan/credit";

type Fields = {
  intent: (typeof INTENTS)[number];
  periode: string;
  contact: string;
  bericht: string;
};

const EMPTY: Fields = {
  intent: INTENTS[0],
  periode: "",
  contact: "",
  bericht: "",
};

function fieldClass(tried: boolean, ok: boolean) {
  if (!tried) return "blank";
  return ok ? "blank is-good" : "blank is-bad";
}

export function Rider() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [tried, setTried] = useState(false);
  const [sent, setSent] = useState(false);

  const checks = {
    periode: fields.periode.trim().length > 1,
    contact: fields.contact.trim().length > 4,
  };
  const missing = [
    !checks.periode ? "datum of periode" : null,
    !checks.contact ? "e-mail of telefoon" : null,
  ].filter((item): item is string => Boolean(item));

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTried(true);
    if (!checks.periode || !checks.contact) return;

    const lines = [
      `Ik zoek: ${fields.intent}`,
      `Rond: ${fields.periode.trim()}`,
      `Bereik: ${fields.contact.trim()}`,
      "",
      fields.bericht.trim() || "Geen extra tekst.",
    ];
    const href = `mailto:?subject=${encodeURIComponent(BOOKING_SUBJECT)}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <section id="rider" aria-labelledby="rider-title">
      <header className="border-b border-ink px-5 py-7 lg:px-10 lg:py-10">
        <p className="meta text-mute">05 / Rider</p>
        <h2 id="rider-title" className="section-title mt-3">
          Schrijf de rider
        </h2>
        <p className="lede">
          Geen formulier met hokjes. Eén zin. Koper is nog leeg, messing is ingevuld. Versturen opent je mail.
        </p>
      </header>

      <div className="px-5 py-8 lg:px-10 lg:py-12">
        {sent ? (
          <div>
            <p className="meta text-mute">Ticket</p>
            <h3 className="section-title mt-3 text-[clamp(2rem,5vw,3.4rem)]">Staat in je mail.</h3>
            <dl className="ticket mt-8">
              <div>
                <dt>Aanvraag</dt>
                <dd>{fields.intent}</dd>
              </div>
              <div>
                <dt>Wanneer</dt>
                <dd>{fields.periode}</dd>
              </div>
              <div>
                <dt>Bereik</dt>
                <dd>{fields.contact}</dd>
              </div>
              {fields.bericht.trim() ? (
                <div>
                  <dt>Tekst</dt>
                  <dd>{fields.bericht.trim()}</dd>
                </div>
              ) : null}
            </dl>
            <button
              type="button"
              className="send"
              onClick={() => {
                setSent(false);
                setTried(false);
              }}
            >
              Nog een rider
            </button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="rider-sentence">
              Ik zoek{" "}
              <select
                className="blank"
                aria-label="Wat je zoekt"
                value={fields.intent}
                onChange={(event) => update("intent", event.target.value as Fields["intent"])}
              >
                {INTENTS.map((intent) => (
                  <option key={intent} value={intent}>
                    {intent}
                  </option>
                ))}
              </select>{" "}
              rond{" "}
              <input
                className={fieldClass(tried, checks.periode)}
                aria-label="Datum of periode"
                placeholder="datum of periode"
                value={fields.periode}
                aria-invalid={tried && !checks.periode}
                onChange={(event) => update("periode", event.target.value)}
              />
              . Je kunt mij bereiken op{" "}
              <input
                className={fieldClass(tried, checks.contact)}
                aria-label="E-mail of telefoon"
                placeholder="e-mail of telefoon"
                autoComplete="on"
                value={fields.contact}
                aria-invalid={tried && !checks.contact}
                onChange={(event) => update("contact", event.target.value)}
              />
              . Dit wil ik je alvast vertellen:
              <textarea
                className="blank"
                aria-label="Bericht"
                placeholder="iets over de avond, de band, de les of de school"
                value={fields.bericht}
                onChange={(event) => update("bericht", event.target.value)}
              />
            </p>
            {tried && missing.length > 0 ? (
              <p className="meta mt-4 text-copper" role="alert">
                Nog nodig: {missing.join(", ")}.
              </p>
            ) : (
              <p className="meta mt-4 text-mute">Koper is open. Messing betekent: ingevuld.</p>
            )}
            <button type="submit" className="send" aria-label="Verstuur de rider en open je mail">
              Verstuur de rider
            </button>
          </form>
        )}
      </div>

      <footer className="footer-grid border-t border-ink">
        <p className="meta text-mute">Colofon</p>
        <strong>Daan Roosenbrand</strong>
        <p>Saxofoon · klarinet · directie · docent</p>
        <p className="meta text-mute">{COORDS} · Rotterdam (010) · Codarts</p>
        <p className="meta">© {new Date().getFullYear()} Daan Roosenbrand</p>
        <Credit />
      </footer>
    </section>
  );
}
