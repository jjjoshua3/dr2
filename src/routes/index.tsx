import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/daan/shell";
import { SITE_URL } from "@/data/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "preload", as: "image", href: "/photos/solo.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return <Shell />;
}
