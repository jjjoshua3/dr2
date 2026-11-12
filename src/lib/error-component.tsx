import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "Er ging iets mis. Laad de pagina opnieuw.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="miss">
      <p className="status-line meta">
        <span>Storing</span>
        <span>Daan Roosenbrand</span>
      </p>
      <div className="miss-body">
        <h1 className="section-title">De lijn viel even weg.</h1>
        <p className="lede">{errorMessage(error)}</p>
        <a className="send miss-back" href="/">
          Terug naar het podium
        </a>
      </div>
    </main>
  );
}
