import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { NotFoundPage } from "@/components/daan/not-found";
import { siteLinks, siteMeta, siteScripts } from "@/data/seo";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: siteMeta(),
    links: siteLinks(appCss),
    scripts: siteScripts(),
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
