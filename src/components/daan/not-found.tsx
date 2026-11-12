import { Credit } from "@/components/daan/credit";

export function NotFoundPage() {
  return (
    <main className="miss">
      <p className="status-line meta">
        <span>404 — buiten de setlist</span>
        <span>Daan Roosenbrand</span>
      </p>
      <div className="miss-body">
        <p className="miss-code" aria-hidden="true">
          404
        </p>
        <h1 className="section-title">Deze pagina staat niet op het podium.</h1>
        <p className="lede">
          Het adres klopt niet, of dit nummer is al van het repertoire. De rest van de avond staat wel klaar.
        </p>
        <a className="send miss-back" href="/">
          Terug naar het podium
        </a>
      </div>
      <footer className="footer-grid border-t border-ink">
        <p className="meta text-mute">Colofon</p>
        <strong>Daan Roosenbrand</strong>
        <p>Saxofoon · klarinet · directie · docent</p>
        <p className="meta">© {new Date().getFullYear()} Daan Roosenbrand</p>
        <Credit />
      </footer>
    </main>
  );
}
