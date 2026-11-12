import { useEffect, useRef, useState } from "react";
import { ROLES } from "@/data/daan";

export function Roles() {
  const [open, setOpen] = useState<string | null>(null);
  const fine = useRef(false);

  useEffect(() => {
    fine.current = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  }, []);

  return (
    <section id="directie" aria-labelledby="directie-title">
      <header className="border-b border-ink px-5 py-7 lg:px-10 lg:py-10">
        <p className="meta text-mute">04 / Index</p>
        <h2 id="directie-title" className="section-title mt-3">
          Directie, les & verenigingen
        </h2>
        <p className="lede">
          Bigband-dirigent in Delft, saxofoonles in Papendrecht en bij Gastels Fanfare in Oud Gastel. Ga
          over een regel — of tik hem open.
        </p>
      </header>
      <div>
        {ROLES.map((role, index) => {
          const n = String(index + 1).padStart(2, "0");
          const isOpen = open === role.id;
          return (
            <article key={role.id}>
              <button
                type="button"
                className={isOpen ? "role is-open" : "role"}
                aria-expanded={isOpen}
                aria-label={`${role.name}, ${role.role}, ${role.status}`}
                onMouseEnter={() => {
                  if (fine.current) setOpen(role.id);
                }}
                onMouseLeave={() => {
                  if (fine.current) setOpen(null);
                }}
                onFocus={() => setOpen(role.id)}
                onClick={() => {
                  if (!fine.current) setOpen((current) => (current === role.id ? null : role.id));
                }}
              >
                <span className="role-main">
                  <span className="track-n">{n}</span>
                  <h3 className="role-name">{role.name}</h3>
                  <span className="role-function">{role.role}</span>
                  <span className={role.tone === "now" ? "badge badge-now" : "badge"}>{role.status}</span>
                </span>
                <span className="role-extra">
                  <span className="role-extra-inner">
                    <p>{role.text}</p>
                  </span>
                </span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
