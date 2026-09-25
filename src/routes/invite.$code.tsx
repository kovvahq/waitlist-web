import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { KovvaLogo, KovvaMark } from "@/components/KovvaLogo";

const title = "You've been invited to Kovva";
const description =
  "Someone invited you to Kovva — the fashion feed where style pays. Open the invite in the app.";

export const Route = createFileRoute("/invite/$code")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      // Canonical web URL for this smart link (P0 domain swap: apex is canonical).
      { property: "og:url", content: "https://kovva.app/invite" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: InviteDeepLink,
});

function InviteDeepLink() {
  const { code } = Route.useParams();
  const deepLink = `fashionst://invite/${code}`;

  useEffect(() => {
    window.location.href = deepLink;
  }, [deepLink]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-10">
        <KovvaLogo />
        <a
          href="#open"
          className="rounded-pill border border-border px-4 py-2 text-caption font-medium text-strong transition-colors hover:border-accent hover:text-accent"
        >
          Get the app
        </a>
      </header>

      <main className="px-5 pb-24 pt-10 md:px-10 md:pt-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl bg-surface px-6 py-14 text-center md:px-16 md:py-20">
          <div className="glow-arc -bottom-40 left-1/2 h-[380px] w-[380px] -translate-x-1/2" />
          <div className="relative">
            <KovvaMark className="mx-auto h-8 w-auto text-accent" />
            <h1 className="mt-6 text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-strong">
              You're invited to Kovva.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-body text-muted-foreground">
              Accept the invite in the app to join the feed, share your style, and earn when
              people shop your looks.
            </p>
            <a
              id="open"
              href={deepLink}
              className="mt-8 inline-flex h-[54px] items-center justify-center rounded-lg bg-accent px-8 text-body font-bold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Open in app
            </a>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {/* PLACEHOLDER: store URLs not known yet — replace hrefs when App Store / Google Play listings go live. */}
              <a
                href="#"
                aria-label="Download Kovva on the App Store"
                className="rounded-pill border border-border px-4 py-2 text-caption font-medium text-strong transition-colors hover:border-accent hover:text-accent"
              >
                App Store
              </a>
              <a
                href="#"
                aria-label="Get Kovva on Google Play"
                className="rounded-pill border border-border px-4 py-2 text-caption font-medium text-strong transition-colors hover:border-accent hover:text-accent"
              >
                Google Play
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-5 py-8 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <p className="min-w-0 text-caption text-muted-foreground">
            © {new Date().getFullYear()} Kovva. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-caption text-muted-foreground">
            <a href="/" className="transition-colors hover:text-accent">
              Home
            </a>
            <a href="mailto:hello@kovva.app" className="transition-colors hover:text-accent">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
