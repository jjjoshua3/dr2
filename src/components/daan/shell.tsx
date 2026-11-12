import { useEffect, useState } from "react";
import { SECTIONS } from "@/data/daan";
import { Preloader } from "@/components/daan/preloader";
import { Hero } from "@/components/daan/hero";
import { Bio } from "@/components/daan/bio";
import { Podium } from "@/components/daan/podium";
import { Roles } from "@/components/daan/roles";
import { Rider } from "@/components/daan/rider";

const LIGHT = { paper: "#f2efe9", ink: "#111111", mute: "#4a463f" };
const DARK = { paper: "#0d0d0d", ink: "#f2efe9", mute: "#c8c1b6" };

function mix(from: string, to: string, t: number) {
  const parse = (hex: string) =>
    [1, 3, 5].map((index) => parseInt(hex.slice(index, index + 2), 16));
  const a = parse(from);
  const b = parse(to);
  const channels = a.map((value, index) => Math.round(value + (b[index] - value) * t));
  return `#${channels.map((channel) => channel.toString(16).padStart(2, "0")).join("")}`;
}

function applyTheme(amount: number) {
  const root = document.documentElement;
  root.style.setProperty("--color-paper", mix(LIGHT.paper, DARK.paper, amount));
  root.style.setProperty("--color-ink", mix(LIGHT.ink, DARK.ink, amount));
  root.style.setProperty("--color-mute", mix(LIGHT.mute, DARK.mute, amount));
}

export function Shell() {
  const [live, setLive] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    if (!live) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let revert: (() => void) | null = null;
    let tick: (() => void) | null = null;
    let dead = false;

    void (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (dead) return;
      gsap.registerPlugin(ScrollTrigger);

      if (reduce) {
        document.querySelectorAll("mark.hl").forEach((node) => node.classList.add("on"));
      }

      const ctx = gsap.context(() => {
        if (!reduce) {
          document.querySelectorAll("mark.hl").forEach((node) => {
            ScrollTrigger.create({
              trigger: node,
              start: "top 82%",
              once: true,
              onEnter: () => node.classList.add("on"),
            });
          });
        }

        ScrollTrigger.create({
          trigger: "#podium",
          start: "top 72%",
          end: "bottom 28%",
          onUpdate: (self) => {
            const p = self.progress;
            const darkness = Math.min(1, p * 3.2, (1 - p) * 3.2);
            applyTheme(darkness);
          },
        });

        const badge = document.querySelector<HTMLElement>("[data-vinyl]");
        if (badge && !reduce) {
          let rotation = 0;
          let velocity = 0;
          ScrollTrigger.create({
            trigger: document.documentElement,
            start: 0,
            end: "max",
            onUpdate: (self) => {
              velocity = self.getVelocity();
            },
          });
          tick = () => {
            rotation += 0.7 + Math.min(Math.abs(velocity) / 140, 7);
            velocity *= 0.86;
            gsap.set(badge, { rotation, transformOrigin: "50% 50%" });
          };
          gsap.ticker.add(tick);
        }
      });
      revert = () => ctx.revert();
      void document.fonts?.ready.then(() => ScrollTrigger.refresh());
    })();

    return () => {
      dead = true;
      if (tick) {
        void import("gsap").then(({ gsap }) => gsap.ticker.remove(tick!));
      }
      revert?.();
      applyTheme(0);
    };
  }, [live]);

  useEffect(() => {
    const nodes = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (node): node is HTMLElement => Boolean(node),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.45], rootMargin: "-15% 0px -40% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="shell">
      {live ? null : <Preloader onDone={() => setLive(true)} />}
      <nav className="spine" aria-label="Secties">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active === section.id ? "page" : undefined}
            aria-label={section.label}
          >
            {section.n}
          </a>
        ))}
        <span className="spine-word">Daan Roosenbrand — Rotterdam</span>
      </nav>
      <div className="shell-main">
        <Hero />
        <Bio />
        <Podium />
        <Roles />
        <Rider />
      </div>
      <nav className="dock" aria-label="Secties">
        {SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-current={active === section.id ? "page" : undefined}
          >
            {section.n}
            <small>{section.label}</small>
          </a>
        ))}
      </nav>
    </div>
  );
}
