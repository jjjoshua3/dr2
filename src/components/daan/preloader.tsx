import { useEffect, useRef } from "react";
import { Sax } from "@/components/daan/sax";

function Plate() {
  return (
    <div className="half-shift">
      <p className="plate-kicker meta">010 — Rotterdam — kleppen & adem</p>
      <Sax variant="mechanic" className="plate-sax" />
      <p className="plate-num">
        <span data-count="">00</span>
      </p>
    </div>
  );
}

export function Preloader({ onDone }: { onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      doneRef.current();
      return;
    }

    let dead = false;
    let revert: (() => void) | null = null;

    void (async () => {
      const { gsap } = await import("gsap");
      if (dead || !rootRef.current) return;
      const scope = rootRef.current;
      const paths = scope.querySelectorAll<SVGPathElement>("[data-air]");
      paths.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      });
      const counter = { n: 0 };
      const ctx = gsap.context(() => {
        gsap.to(".sax-pad .pad", {
          attr: { r: 12 },
          yoyo: true,
          repeat: 10,
          stagger: 0.08,
          duration: 0.14,
          ease: "power1.inOut",
        });
        const tl = gsap.timeline({
          onComplete: () => {
            if (!dead) doneRef.current();
          },
        });
        tl.to(paths, { strokeDashoffset: 0, duration: 2.15, ease: "power1.inOut" }, 0);
        tl.to(
          counter,
          {
            n: 100,
            duration: 2.15,
            ease: "power1.inOut",
            onUpdate: () => {
              const label = String(Math.round(counter.n)).padStart(2, "0");
              scope.querySelectorAll("[data-count]").forEach((node) => {
                node.textContent = label;
              });
            },
          },
          0,
        );
        tl.to(".half-top", { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, 2.25);
        tl.to(".half-bot", { yPercent: 100, duration: 0.9, ease: "power4.inOut" }, 2.25);
      }, scope);
      revert = () => ctx.revert();
    })();

    return () => {
      dead = true;
      revert?.();
    };
  }, []);

  return (
    <div className="preloader" ref={rootRef} role="dialog" aria-label="De saxofoon laadt" aria-modal="false">
      <div className="half half-top">
        <Plate />
      </div>
      <div className="half half-bot" aria-hidden="true">
        <div className="half-shift-bot">
          <Plate />
        </div>
      </div>
      <button type="button" className="skip" onClick={() => doneRef.current()}>
        Sla intro over
      </button>
    </div>
  );
}
