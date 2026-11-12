import { SAX_KEYS, type SaxKey } from "@/data/daan";

const AIR =
  "M90 522 C102 494 118 472 132 448 L138 198 C142 156 174 122 206 90 C220 74 210 48 188 38";

const BELL = "M36 500 L78 448 L150 460 L170 524 L124 552 L34 538 Z";
const MOUTH = "M186 44 L214 18 L228 32 L198 58 Z";

type Props = {
  variant: "mechanic" | "playable";
  activeId?: string | null;
  onPick?: (key: SaxKey) => void;
  className?: string;
};

export function Sax({ variant, activeId, onPick, className }: Props) {
  const playable = variant === "playable";
  return (
    <svg
      viewBox="0 0 280 560"
      className={`sax sax--${variant === "mechanic" ? "mech" : "play"} ${className ?? ""}`}
      aria-hidden={playable ? undefined : true}
      role={playable ? "group" : undefined}
      aria-label={playable ? "Saxofoon met carrièrekleppen" : undefined}
    >
      <path d={BELL} className="sax-edge" />
      <path d={MOUTH} className="sax-edge" />
      <path d={AIR} className="sax-line" />
      {variant === "mechanic" ? <path d={AIR} className="sax-air" data-air="" /> : null}
      <path d="M156 214 V444" className="sax-rod" />
      <path d="M138 250 H156 M138 306 H156 M138 362 H156 M138 418 H154" className="sax-rod" />
      {SAX_KEYS.map((key) =>
        playable ? (
          <g
            key={key.id}
            className={`sax-hit${activeId === key.id ? " is-on" : ""}`}
            transform={`translate(${key.cx} ${key.cy})`}
            tabIndex={0}
            role="button"
            aria-label={`${key.title}. ${key.text}`}
            onMouseEnter={() => onPick?.(key)}
            onFocus={() => onPick?.(key)}
            onClick={() => onPick?.(key)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onPick?.(key);
              }
            }}
          >
            <circle r="18" className="sax-target" />
            <circle r="8.5" className="pad" />
            <circle r="2.2" className="sax-screw" />
          </g>
        ) : (
          <g key={key.id} className="sax-pad" transform={`translate(${key.cx} ${key.cy})`}>
            <circle r="8.5" className="pad" />
            <circle r="2.2" className="sax-screw" />
          </g>
        ),
      )}
    </svg>
  );
}
