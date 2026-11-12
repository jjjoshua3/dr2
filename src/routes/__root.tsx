import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/daan/not-found";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Daan Roosenbrand — Saxofoon, klarinet, directie" },
      {
        name: "description",
        content:
          "Daan Roosenbrand, saxofonist, klarinettist, dirigent en docent uit Rotterdam. Codarts. IMPAKT, Night at the Jukebox, Let's Swing Delft en JD's Big Band.",
      },
      { name: "theme-color", content: "#111111" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
    ],
  }),
  notFoundComponent: NotFoundPage,
  component: () => (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body className="bg-paper text-ink font-sans antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
});
