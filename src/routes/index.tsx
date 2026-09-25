import { createFileRoute } from "@tanstack/react-router";
import { KovvaLogo, KovvaMark } from "@/components/KovvaLogo";
import { WaitlistForm } from "@/components/WaitlistForm";
import heroPhone from "@/assets/hero-phone.png";
import lookStreetwear from "@/assets/look-streetwear.jpg";
import lookCasual from "@/assets/look-casual.jpg";
import lookAfrocentric from "@/assets/look-afrocentric.jpg";
import lookMinimal from "@/assets/look-minimal.jpg";
import lookBold from "@/assets/look-bold.jpg";
import lookTailored from "@/assets/look-tailored.jpg";

const title = "Kovva — The fashion feed where style pays";
const description =
  "Kovva is the app for fashion lovers: discover and share outfits, style yourself with AI, and earn commission when people shop your look. Join the early-access waitlist.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://kovva.app" },
      {
        property: "og:image",
        content: "https://kovva.app/og-image.jpg",
      },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      {
        name: "twitter:image",
        content: "https://kovva.app/og-image.jpg",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Kovva",
          url: "https://kovva.app",
          logo: "https://kovva.app/favicon.ico",
          description,
        }),
      },
    ],
  }),
  component: Index,
});

const looks = [
  {
    src: lookStreetwear,
    alt: "Streetwear look in an oversized jacket and cargo trousers",
    label: "Streetwear",
  },
  {
    src: lookAfrocentric,
    alt: "Afrocentric look in printed fabric with a sculptural headwrap",
    label: "Afrocentric",
  },
  { src: lookBold, alt: "Bold colour-blocked cobalt and tangerine outfit", label: "Bold colour" },
  { src: lookCasual, alt: "Casual look in denim and a knit sweater", label: "Everyday" },
  { src: lookMinimal, alt: "Minimal monochrome tailored coat look", label: "Minimal" },
  { src: lookTailored, alt: "Sharply tailored dark suit with an open collar", label: "Tailored" },
];

function IconFeed() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M3 10h18M9 10v11" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M18.5 16.5l.75 2 2 .75-2 .75-.75 2-.75-2-2-.75 2-.75.75-2Z" />
    </svg>
  );
}

function IconTag() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.5 12.3 12.3 20.5a2 2 0 0 1-2.8 0L3 14V3h11l6.5 6.5a2 2 0 0 1 0 2.8Z" />
      <circle cx="8.5" cy="8.5" r="1.5" />
    </svg>
  );
}

const features = [
  {
    icon: <IconFeed />,
    title: "A feed that's only fashion",
    copy: "No noise. Outfit posts, tagged pieces and the people whose style you actually follow.",
  },
  {
    icon: <IconSparkle />,
    title: "Style yourself with AI",
    copy: "Try a look on before you commit. Kovva restyles the outfit around you in seconds.",
  },
  {
    icon: <IconTag />,
    title: "Earn on every sale",
    copy: "Tag the pieces you wear. When someone buys your look, the commission is yours.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-10">
        <KovvaLogo />
        <a
          href="#waitlist"
          className="rounded-pill border border-border px-4 py-2 text-caption font-medium text-strong transition-colors hover:border-accent hover:text-accent"
        >
          Join waitlist
        </a>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-20 pt-8 md:px-10 md:pb-28 md:pt-14">
          <div className="glow-arc -left-32 top-10 h-[420px] w-[420px] md:left-auto md:right-[8%] md:top-0 md:h-[620px] md:w-[620px]" />
          <div className="dot-grid pointer-events-none absolute right-6 top-6 hidden h-16 w-16 opacity-40 md:block" />

          <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
            <div className="rise-in min-w-0">
              <span className="inline-flex items-center rounded-pill bg-accent px-4 py-1.5 text-caption font-bold uppercase tracking-widest text-accent-foreground">
                Early access
              </span>

              <h1 className="mt-6 text-[clamp(2rem,7vw,4.25rem)] font-bold leading-[1.05] tracking-[-0.035em] text-strong">
                [The fashion feed]
                <br />
                <span className="text-accent">where style pays.</span>
              </h1>

              <p className="mt-6 max-w-xl text-body text-foreground">
                Kovva is where fashion lovers discover, share and shop personal style. Post your
                outfits, tag the pieces, style yourself with AI — and earn commission every time
                someone buys the look off your post.
              </p>

              <div id="waitlist" className="mt-10 scroll-mt-24">
                <WaitlistForm />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <img
                src={heroPhone}
                alt="The Kovva app showing an outfit post in the fashion feed with a Buy look button"
                width={1088}
                height={1440}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Mood board */}
        <section className="border-t border-border px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
              <div className="min-w-0">
                <p className="text-caption font-medium uppercase tracking-widest text-accent">
                  On the feed
                </p>
                <h2 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.03em] text-strong">
                  Every kind of fashion, in one place.
                </h2>
              </div>
              <p className="max-w-xs text-caption text-muted-foreground">
                Streetwear to tailoring, Afrocentric to minimal — Kovva is built for the full
                breadth of how people actually dress.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {looks.map((look, i) => (
                <figure
                  key={look.label}
                  className={`group relative overflow-hidden rounded-lg bg-surface ${
                    i === 0 || i === 4 ? "md:row-span-2" : ""
                  }`}
                >
                  <img
                    src={look.src}
                    alt={look.alt}
                    loading="lazy"
                    width={800}
                    height={1008}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <figcaption className="absolute bottom-3 left-3 rounded-pill bg-background/80 px-3 py-1 text-caption font-medium text-strong backdrop-blur">
                    {look.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3 md:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex min-w-0 gap-4">
                <span className="shrink-0 text-accent">{feature.icon}</span>
                <div className="min-w-0">
                  <h3 className="text-title font-bold text-strong">{feature.title}</h3>
                  <p className="mt-2 text-body text-muted-foreground">{feature.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-5 pb-24 md:px-10">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl bg-surface px-6 py-14 text-center md:px-16 md:py-20">
            <div className="glow-arc -bottom-40 left-1/2 h-[380px] w-[380px] -translate-x-1/2" />
            <div className="relative">
              <KovvaMark className="mx-auto h-8 w-auto text-accent" />
              <h2 className="mt-6 text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-strong">
                Be first on the feed.
              </h2>
              <p className="mx-auto mt-4 max-w-md text-body text-muted-foreground">
                Early members get first access, first commissions, and a verified creator badge.
              </p>
              <a
                href="#waitlist"
                className="mt-8 inline-flex h-[54px] items-center justify-center rounded-lg bg-accent px-8 text-body font-bold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Join the waitlist
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-5 py-8 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <p className="min-w-0 text-caption text-muted-foreground">
            © {new Date().getFullYear()} Kovva. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-caption text-muted-foreground">
            <a href="#waitlist" className="transition-colors hover:text-accent">
              Waitlist
            </a>
            <a href="/terms#privacy" className="transition-colors hover:text-accent">
              Privacy
            </a>
            <a href="/terms" className="transition-colors hover:text-accent">
              Terms
            </a>
            <a href="mailto:hello@kovva.app" className="transition-colors hover:text-accent">
              Contact
            </a>
            <a href="/contact" className="transition-colors hover:text-accent">
              Contact page
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Instagram
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
