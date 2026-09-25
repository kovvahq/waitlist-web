import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const title = "Help & Support — Kovva";
const description =
  "Help and support for Kovva: orders and delivery, payments and wallet, KAI styling, creators and rewards, account and safety.";

export const Route = createFileRoute("/help-and-support")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://kovva.app/help-and-support" },
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
  component: HelpAndSupport,
});

const cardClass = "rounded-lg border border-border bg-surface px-6 py-8";
const linkClass =
  "text-strong underline-offset-4 hover:text-accent hover:underline";

function HelpAndSupport() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="px-5 pb-24 pt-8 md:px-10 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-caption font-medium uppercase tracking-widest text-accent">
            Help &amp; Support
          </p>
          <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-[-0.03em] text-strong">
            How can we help?
          </h1>
          <p className="mt-4 max-w-xl text-body text-muted-foreground">
            Short guides to the parts of Kovva people ask about most. If your
            issue is not covered here,{" "}
            <Link to="/contact" className={linkClass}>
              contact us
            </Link>{" "}
            and we will sort it out.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <section className={cardClass}>
              <h2 className="text-title font-bold text-strong">
                Orders &amp; delivery
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-foreground">
                <li>
                  Track your order from the order details screen, where the
                  latest courier status is shown.
                </li>
                <li>
                  Delivery times depend on the seller and the courier — check
                  the estimate shown at checkout.
                </li>
                <li>
                  If an order arrives damaged or wrong, keep the packaging and
                  photos of the item.
                </li>
                <li>
                  To report a problem with an order, email{" "}
                  <a href="mailto:support@kovva.app" className={linkClass}>
                    support@kovva.app
                  </a>{" "}
                  with your order number.
                </li>
              </ul>
            </section>

            <section className={cardClass}>
              <h2 className="text-title font-bold text-strong">
                Payments &amp; wallet
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-foreground">
                <li>
                  Kovva supports card payments and wallet top-ups; receipts are
                  emailed after every successful charge.
                </li>
                <li>
                  If a payment fails, check your card limit and try again —
                  pending holds usually clear within a few days.
                </li>
                <li>
                  Refunds go back to the original payment method once the
                  seller confirms the return.
                </li>
                <li>
                  For billing disputes, see our{" "}
                  <Link to="/terms" className={linkClass}>
                    Terms
                  </Link>{" "}
                  or email{" "}
                  <a href="mailto:support@kovva.app" className={linkClass}>
                    support@kovva.app
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section className={cardClass}>
              <h2 className="text-title font-bold text-strong">KAI styling</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-foreground">
                <li>
                  KAI restyles an outfit photo around you so you can preview a
                  look before you commit.
                </li>
                <li>
                  Use clear, well-lit photos — one person per photo gives the
                  best results.
                </li>
                <li>
                  AI previews are inspiration, not a perfect fit: fabric,
                  sizing, and tailoring still vary.
                </li>
                <li>
                  Report misleading AI content via{" "}
                  <Link to="/contact" className={linkClass}>
                    Contact
                  </Link>{" "}
                  and review what is allowed in our{" "}
                  <Link to="/community-guidelines" className={linkClass}>
                    Community Guidelines
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section className={cardClass}>
              <h2 className="text-title font-bold text-strong">
                Creators &amp; rewards
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-foreground">
                <li>
                  Tag the pieces you wear so followers can shop the look
                  straight from your post.
                </li>
                <li>
                  When someone buys through your tags, you earn the commission
                  shown on the product.
                </li>
                <li>
                  Payouts follow the schedule in your creator dashboard — keep
                  your payout details up to date.
                </li>
                <li>
                  The full rules on tagging and commissions are in our{" "}
                  <Link to="/terms" className={linkClass}>
                    Terms
                  </Link>
                  .
                </li>
              </ul>
            </section>

            <section className={`${cardClass} md:col-span-2`}>
              <h2 className="text-title font-bold text-strong">
                Account &amp; safety
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-body text-foreground">
                <li>
                  Keep your account safe: use a strong, unique password and
                  never share verification codes.
                </li>
                <li>
                  To report a post, account, or message that breaks the rules,
                  email{" "}
                  <a href="mailto:support@kovva.app" className={linkClass}>
                    support@kovva.app
                  </a>{" "}
                  with links or screenshots.
                </li>
                <li>
                  Privacy and data requests (access, correction, deletion) also
                  go to{" "}
                  <a href="mailto:support@kovva.app" className={linkClass}>
                    support@kovva.app
                  </a>
                  .
                </li>
                <li>
                  To appeal a moderation decision, include your username and
                  what happened — appeals are reviewed against our{" "}
                  <Link to="/community-guidelines" className={linkClass}>
                    Community Guidelines
                  </Link>{" "}
                  and{" "}
                  <Link to="/terms" className={linkClass}>
                    Terms
                  </Link>
                  .
                </li>
              </ul>
            </section>
          </div>

          <p className="mt-10 text-body text-muted-foreground">
            Still stuck? Email{" "}
            <a href="mailto:support@kovva.app" className={linkClass}>
              support@kovva.app
            </a>{" "}
            and include your username, device, and screenshots if you have
            them.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
