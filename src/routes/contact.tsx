import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const title = "Contact Kovva — support and general enquiries";
const description =
  "Contact Kovva: reach support@kovva.app for support, reports, privacy requests and appeals, or hello@kovva.app for general, partnership and press enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://kovva.app/contact" },
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
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="px-5 pb-24 pt-8 md:px-10 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-caption font-medium uppercase tracking-widest text-accent">
            Contact
          </p>
          <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.03em] text-strong">
            Talk to Kovva.
          </h1>
          <p className="mt-4 max-w-xl text-body text-muted-foreground">
            Two addresses, two jobs. Pick the one that matches your message and
            we will get back to you as soon as we can.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <section className="rounded-lg border border-border bg-surface px-6 py-8">
              <h2 className="text-title font-bold text-strong">
                support@kovva.app
              </h2>
              <p className="mt-2 text-body text-muted-foreground">
                For anything about your account or the app.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-foreground">
                <li>Support with orders, payments, or the app</li>
                <li>Report an issue, a post, or another account</li>
                <li>Privacy and data requests</li>
                <li>Appeals against moderation decisions</li>
              </ul>
              <a
                href="mailto:support@kovva.app"
                className="mt-6 inline-flex h-[50px] items-center justify-center rounded-lg bg-accent px-8 text-body font-bold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Email support
              </a>
            </section>

            <section className="rounded-lg border border-border bg-surface px-6 py-8">
              <h2 className="text-title font-bold text-strong">
                hello@kovva.app
              </h2>
              <p className="mt-2 text-body text-muted-foreground">
                For everything else Kovva.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-foreground">
                <li>General enquiries about Kovva</li>
                <li>Brand and creator partnerships</li>
                <li>Press and media requests</li>
              </ul>
              <a
                href="mailto:hello@kovva.app"
                className="mt-6 inline-flex h-[50px] items-center justify-center rounded-lg border border-border px-8 text-body font-bold text-strong transition-colors hover:border-accent hover:text-accent"
              >
                Say hello
              </a>
            </section>
          </div>

          <p className="mt-10 text-body text-muted-foreground">
            Kovva Nexus Ltd., Lagos, Nigeria ·{" "}
            <a
              href="https://kovva.app"
              className="text-strong underline-offset-4 hover:text-accent hover:underline"
            >
              Kovva.app
            </a>
          </p>
          <p className="mt-4 text-caption text-muted-foreground">
            Need help first? Visit{" "}
            <Link
              to="/help-and-support"
              className="text-strong underline-offset-4 hover:text-accent hover:underline"
            >
              Help &amp; Support
            </Link>
            . Rules live in our{" "}
            <Link
              to="/community-guidelines"
              className="text-strong underline-offset-4 hover:text-accent hover:underline"
            >
              Community Guidelines
            </Link>{" "}
            and{" "}
            <Link
              to="/terms"
              className="text-strong underline-offset-4 hover:text-accent hover:underline"
            >
              Terms
            </Link>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
