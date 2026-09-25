import { createFileRoute } from "@tanstack/react-router";
import { KovvaLogo } from "@/components/KovvaLogo";

const title = "Kovva Community Guidelines";
const description =
  "The standards for everyone who uses Kovva: respect, safety, honest commerce and creator content. Covers prohibited conduct, enforcement, reporting and appeals.";
const url = "https://kovva.app/community-guidelines";

export const Route = createFileRoute("/community-guidelines")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
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
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: title,
          url,
          description,
          isPartOf: { "@type": "WebSite", name: "Kovva", url: "https://kovva.app" },
        }),
      },
    ],
  }),
  component: CommunityGuidelines,
});

const sections = [
  { n: 1, heading: "Our community standard" },
  { n: 2, heading: "Respect other people" },
  { n: 3, heading: "Hateful or discriminatory content" },
  { n: 4, heading: "Sexual content and exploitation" },
  { n: 5, heading: "Child safety" },
  { n: 6, heading: "Violence, threats and dangerous conduct" },
  { n: 7, heading: "Illegal activities" },
  { n: 8, heading: "Fraud, scams and deceptive behaviour" },
  { n: 9, heading: "Authentic product and commerce content" },
  { n: 10, heading: "Creator content and rewards" },
  { n: 11, heading: "Spam and unwanted promotion" },
  { n: 12, heading: "Privacy and personal information" },
  { n: 13, heading: "Impersonation" },
  { n: 14, heading: "Intellectual property" },
  { n: 15, heading: "AI-generated and edited content" },
  { n: 16, heading: "Reviews and feedback" },
  { n: 17, heading: "Content that may be removed" },
  { n: 18, heading: "Account enforcement" },
  { n: 19, heading: "Reporting content or users" },
  { n: 20, heading: "Appeals and review" },
  { n: 21, heading: "Emergency and legal matters" },
  { n: 22, heading: "Our approach to moderation" },
  { n: 23, heading: "Changes to these Guidelines" },
  { n: 24, heading: "Contact Kovva" },
  { n: 25, heading: "Final note" },
];

function SectionHeading({ n, heading }: { n: number; heading: string }) {
  return (
    <h2 className="text-title font-bold text-strong">
      <a href={`#sec-${n}`} className="transition-colors hover:text-accent">
        §{n}. {heading}
      </a>
    </h2>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-6 text-body text-foreground">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function CommunityGuidelines() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-10">
        <a href="/" aria-label="Kovva home">
          <KovvaLogo />
        </a>
        <a
          href="/#waitlist"
          className="rounded-pill border border-border px-4 py-2 text-caption font-medium text-strong transition-colors hover:border-accent hover:text-accent"
        >
          Join waitlist
        </a>
      </header>

      <main className="px-5 pb-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-caption font-medium uppercase tracking-widest text-accent">
            Kovva Nexus Ltd.
          </p>
          <h1 className="mt-3 text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-strong">
            Kovva Community Guidelines
          </h1>
          <p className="mt-4 text-body text-muted-foreground">Last updated September 2026</p>

          <div className="mt-8 space-y-4 text-body text-foreground">
            <p>
              Kovva is a social-commerce and lifestyle platform where people can discover
              products, share content, express their style and interact with other members of
              the community.
            </p>
            <p>
              These Community Guidelines explain the standards we expect from everyone who
              uses Kovva. They apply to posts, comments, reviews, profiles, messages,
              product-related content, creator content and other interactions on the Platform.
            </p>
            <p>
              By using Kovva&apos;s community features, you agree to follow these Guidelines
              as well as the Kovva Terms of Service &amp; Privacy Policy.
            </p>
          </div>

          <nav
            aria-label="Sections"
            className="mt-10 rounded-lg border border-border bg-surface px-6 py-6"
          >
            <p className="text-caption font-bold uppercase tracking-widest text-muted-foreground">
              In this document
            </p>
            <ol className="mt-4 grid gap-x-8 gap-y-2 text-body md:grid-cols-2">
              {sections.map((s) => (
                <li key={s.n}>
                  <a
                    href={`#sec-${s.n}`}
                    className="text-foreground transition-colors hover:text-accent"
                  >
                    §{s.n}. {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <section id="sec-1" className="scroll-mt-24">
              <SectionHeading n={1} heading="Our community standard" />
              <p className="mt-3 text-body text-foreground">
                Kovva is intended to be a place for creativity, style, discovery and genuine
                interaction. We encourage:
              </p>
              <List
                items={[
                  "Authentic self-expression;",
                  "Respectful discussion;",
                  "Useful product and styling content;",
                  "Honest reviews and recommendations;",
                  "Original creative work;",
                  "Positive participation; and",
                  "Responsible buying and selling behaviour.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                You do not need to agree with everyone. You do need to interact with other
                people responsibly and respectfully.
              </p>
            </section>

            <section id="sec-2" className="scroll-mt-24">
              <SectionHeading n={2} heading="Respect other people" />
              <p className="mt-3 text-body text-foreground">
                Do not use Kovva to harass, threaten, intimidate, stalk or repeatedly target
                another person. Prohibited behaviour includes:
              </p>
              <List
                items={[
                  "Threats of violence;",
                  "Repeated unwanted harassment;",
                  "Targeted bullying;",
                  "Encouraging others to harass someone;",
                  "Publishing another person's private information without permission;",
                  "Impersonating another person to deceive others; and",
                  "Coordinated abuse directed at an individual or group.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Disagreements are allowed. Personal attacks, threats and sustained harassment
                are not.
              </p>
            </section>

            <section id="sec-3" className="scroll-mt-24">
              <SectionHeading n={3} heading="Hateful or discriminatory content" />
              <p className="mt-3 text-body text-foreground">
                Do not attack, threaten, dehumanise or promote discrimination against people
                because of protected or personal characteristics.
              </p>
              <p className="mt-3 text-body text-foreground">
                This includes content that promotes hatred or exclusion based on
                characteristics such as:
              </p>
              <List
                items={[
                  "Race or ethnicity;",
                  "Nationality;",
                  "Religion;",
                  "Disability;",
                  "Sex or gender;",
                  "Sexual orientation; or",
                  "Other characteristics protected by applicable law.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Discussion of identity, culture, religion, social issues or discrimination is
                allowed when it does not cross into prohibited abuse, threats or targeted
                hateful conduct.
              </p>
            </section>

            <section id="sec-4" className="scroll-mt-24">
              <SectionHeading n={4} heading="Sexual content and exploitation" />
              <p className="mt-3 text-body text-foreground">
                Do not use Kovva to publish or distribute sexually explicit content.
                Prohibited content includes:
              </p>
              <List
                items={[
                  "Explicit sexual imagery or videos;",
                  "Sexual exploitation;",
                  "Sexual solicitation;",
                  "Sexual content involving minors;",
                  "Sexualisation of minors;",
                  "Non-consensual intimate imagery; and",
                  "Content that facilitates sexual exploitation or abuse.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Any sexual content involving a minor is strictly prohibited.
              </p>
            </section>

            <section id="sec-5" className="scroll-mt-24">
              <SectionHeading n={5} heading="Child safety" />
              <p className="mt-3 text-body text-foreground">
                Kovva does not permit content that exploits, endangers or sexually targets
                children. Do not:
              </p>
              <List
                items={[
                  "Sexualise minors;",
                  "Solicit sexual or intimate material from minors;",
                  "Encourage minors to meet strangers in unsafe circumstances;",
                  "Facilitate exploitation or abuse of children; or",
                  "Share content that places a child at serious risk.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                We may take immediate action where child safety is at risk.
              </p>
            </section>

            <section id="sec-6" className="scroll-mt-24">
              <SectionHeading n={6} heading="Violence, threats and dangerous conduct" />
              <p className="mt-3 text-body text-foreground">
                Do not use Kovva to threaten, glorify or encourage serious violence.
                Prohibited conduct includes:
              </p>
              <List
                items={[
                  "Credible threats of violence;",
                  "Encouraging someone to harm another person;",
                  "Content that meaningfully facilitates violent wrongdoing;",
                  "Celebrating serious real-world violence in a way that encourages further harm; and",
                  "Dangerous challenges or instructions that could reasonably cause serious injury.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Documentary, educational, newsworthy or artistic discussion of violence may be
                allowed where it does not promote or facilitate harm.
              </p>
            </section>

            <section id="sec-7" className="scroll-mt-24">
              <SectionHeading n={7} heading="Illegal activities" />
              <p className="mt-3 text-body text-foreground">
                Do not use Kovva to facilitate or promote illegal activity. This includes:
              </p>
              <List
                items={[
                  "Fraud or scams;",
                  "Theft;",
                  "Financial deception;",
                  "Sale of stolen goods;",
                  "Identity theft;",
                  "Money laundering;",
                  "Unlawful access to accounts or systems;",
                  "Trafficking or exploitation;",
                  "Sale of prohibited goods or services; and",
                  "Other unlawful activity.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Kovva may remove content, restrict accounts or cooperate with lawful requests
                from relevant authorities where required.
              </p>
            </section>

            <section id="sec-8" className="scroll-mt-24">
              <SectionHeading n={8} heading="Fraud, scams and deceptive behaviour" />
              <p className="mt-3 text-body text-foreground">
                Users must not deceive other members or manipulate Kovva&apos;s systems for
                personal gain. Examples include:
              </p>
              <List
                items={[
                  "Fake giveaways;",
                  "Fake promotions;",
                  "Phishing links;",
                  "Fraudulent payment requests;",
                  "Fake customer-support accounts;",
                  "Fake product claims;",
                  "Misrepresenting an affiliation with Kovva;",
                  "Manipulating reviews or ratings;",
                  "Creating fake engagement;",
                  "Using multiple accounts to evade restrictions; and",
                  "Manipulating creator rewards, referrals or commissions.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Do not ask another user for their password, authentication code, payment PIN
                or other sensitive security credentials.
              </p>
            </section>

            <section id="sec-9" className="scroll-mt-24">
              <SectionHeading n={9} heading="Authentic product and commerce content" />
              <p className="mt-3 text-body text-foreground">
                Product-related content must not intentionally mislead users. Do not:
              </p>
              <List
                items={[
                  "Promote counterfeit goods as genuine;",
                  "Deliberately misrepresent a product's condition;",
                  "Use materially false product information;",
                  "Manipulate product images in a way that materially misleads buyers;",
                  "Claim that a product has properties it does not have; or",
                  "Misrepresent availability, pricing or delivery.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Reviews should reflect genuine experiences. Do not publish reviews in exchange
                for undisclosed payment, products or other benefits where doing so would make
                the review misleading.
              </p>
            </section>

            <section id="sec-10" className="scroll-mt-24">
              <SectionHeading n={10} heading="Creator content and rewards" />
              <p className="mt-3 text-body text-foreground">
                Creators are expected to participate honestly. Creators must not:
              </p>
              <List
                items={[
                  "Artificially inflate views, likes, comments or purchases;",
                  "Use bots or fake accounts;",
                  "Manipulate referral or creator-reward systems;",
                  "Encourage users to make fake purchases;",
                  "Conceal material commercial relationships where disclosure is required;",
                  "Misrepresent their relationship with Kovva; or",
                  "Publish copied content as their own.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Kovva may withhold, reverse or cancel rewards associated with fraudulent or
                ineligible activity.
              </p>
            </section>

            <section id="sec-11" className="scroll-mt-24">
              <SectionHeading n={11} heading="Spam and unwanted promotion" />
              <p className="mt-3 text-body text-foreground">
                Do not use Kovva to send repetitive, misleading or unwanted promotional
                content. This includes:
              </p>
              <List
                items={[
                  "Repetitive comments;",
                  "Mass unsolicited messages;",
                  "Automated engagement;",
                  "Repeated posting of substantially identical content;",
                  "Misleading clickbait;",
                  "Engagement bait intended to manipulate platform systems; and",
                  "Unauthorised advertising or solicitation.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Commercial or promotional content must comply with applicable Kovva rules.
              </p>
            </section>

            <section id="sec-12" className="scroll-mt-24">
              <SectionHeading n={12} heading="Privacy and personal information" />
              <p className="mt-3 text-body text-foreground">
                Respect other people&apos;s privacy. Do not publish or distribute another
                person&apos;s:
              </p>
              <List
                items={[
                  "Phone number;",
                  "Home address;",
                  "Email address;",
                  "Financial information;",
                  "Login credentials;",
                  "Private messages;",
                  "Identification documents;",
                  "Private photographs or videos; or",
                  "Other sensitive personal information",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                without appropriate permission or another lawful basis. Do not use Kovva to
                obtain personal information through deception.
              </p>
            </section>

            <section id="sec-13" className="scroll-mt-24">
              <SectionHeading n={13} heading="Impersonation" />
              <p className="mt-3 text-body text-foreground">
                Do not pretend to be another person, business, creator or Kovva
                representative in a way that could deceive users.
              </p>
              <p className="mt-3 text-body text-foreground">
                Parody, commentary or fan accounts may be permitted where they are clearly
                presented as such and are not used to deceive, defraud or cause harm.
              </p>
            </section>

            <section id="sec-14" className="scroll-mt-24">
              <SectionHeading n={14} heading="Intellectual property" />
              <p className="mt-3 text-body text-foreground">
                Only upload content that you have the right to use. Do not upload or
                distribute content that infringes another person&apos;s copyright, trademark
                or other intellectual-property rights.
              </p>
              <p className="mt-3 text-body text-foreground">
                If you believe content on Kovva infringes your rights, you can report it to
                Kovva through our available support channels.
              </p>
              <p className="mt-3 text-body text-foreground">
                Repeated or serious intellectual-property violations may result in account
                restrictions or termination.
              </p>
            </section>

            <section id="sec-15" className="scroll-mt-24">
              <SectionHeading n={15} heading="AI-generated and edited content" />
              <p className="mt-3 text-body text-foreground">
                Kovva may support AI-assisted styling, virtual try-on and other creative
                features. Users must not use AI or editing tools to:
              </p>
              <List
                items={[
                  "Impersonate people deceptively;",
                  "Create non-consensual intimate imagery;",
                  "Sexualise minors;",
                  "Defraud other users;",
                  "Create misleading product evidence;",
                  "Evade moderation or safety systems; or",
                  "Facilitate illegal activity.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                AI-generated or heavily edited content should not be presented as authentic
                evidence where doing so would materially mislead other users.
              </p>
            </section>

            <section id="sec-16" className="scroll-mt-24">
              <SectionHeading n={16} heading="Reviews and feedback" />
              <p className="mt-3 text-body text-foreground">
                Kovva encourages honest and useful feedback. Reviews and comments should:
              </p>
              <List
                items={[
                  "Reflect your genuine experience;",
                  "Relate to the relevant product or service;",
                  "Avoid personal attacks;",
                  "Avoid false accusations presented as fact; and",
                  "Not be manipulated for commercial or competitive purposes.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Kovva may remove reviews that are fraudulent, abusive, irrelevant, defamatory
                where removal is legally appropriate, or otherwise violate these Guidelines.
              </p>
            </section>

            <section id="sec-17" className="scroll-mt-24">
              <SectionHeading n={17} heading="Content that may be removed" />
              <p className="mt-3 text-body text-foreground">
                Kovva may remove, restrict, demote or otherwise limit content where we
                reasonably believe it:
              </p>
              <List
                items={[
                  "Violates these Guidelines;",
                  "Violates the Terms of Service;",
                  "Breaks applicable law;",
                  "Creates a significant safety or security risk;",
                  "Is fraudulent or deceptive;",
                  "Infringes another person's rights; or",
                  "Undermines the integrity of the Platform.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                We may also take action where context indicates that content presents a
                meaningful risk even if the content does not fit neatly into one category.
              </p>
            </section>

            <section id="sec-18" className="scroll-mt-24">
              <SectionHeading n={18} heading="Account enforcement" />
              <p className="mt-3 text-body text-foreground">
                Depending on the seriousness and circumstances of a violation, Kovva may:
              </p>
              <List
                items={[
                  "Remove content;",
                  "Add restrictions to an account;",
                  "Limit posting, messaging or other community features;",
                  "Remove creator or promotional benefits;",
                  "Suspend an account temporarily;",
                  "Permanently terminate an account; or",
                  "Take other reasonable protective measures.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Enforcement may depend on factors including the severity of the conduct,
                previous violations, potential harm, evidence available and applicable law.
              </p>
              <p className="mt-3 text-body text-foreground">
                Kovva may take immediate action where necessary to address serious safety,
                fraud or security risks.
              </p>
            </section>

            <section id="sec-19" className="scroll-mt-24">
              <SectionHeading n={19} heading="Reporting content or users" />
              <p className="mt-3 text-body text-foreground">
                If you believe content or behaviour violates these Guidelines, please report
                it through the reporting or support functionality available on Kovva.
              </p>
              <p className="mt-3 text-body text-foreground">
                When making a report, provide enough information for Kovva to understand:
              </p>
              <List
                items={[
                  "What happened;",
                  "Where it happened on the Platform;",
                  "The account or content involved; and",
                  "Why you believe it violates these Guidelines.",
                ]}
              />
              <p className="mt-3 text-body text-foreground">
                Do not knowingly submit false or malicious reports.
              </p>
            </section>

            <section id="sec-20" className="scroll-mt-24">
              <SectionHeading n={20} heading="Appeals and review" />
              <p className="mt-3 text-body text-foreground">
                Where Kovva takes enforcement action against your account or content, you may
                contact Kovva through the available support channels if you believe the
                action was made in error.
              </p>
              <p className="mt-3 text-body text-foreground">
                We may review the relevant content, account activity and available
                information before deciding whether to maintain, modify or reverse the
                action.
              </p>
              <p className="mt-3 text-body text-foreground">
                Certain actions may remain in place while a review is conducted, particularly
                where necessary to protect users, prevent fraud or comply with legal
                obligations.
              </p>
            </section>

            <section id="sec-21" className="scroll-mt-24">
              <SectionHeading n={21} heading="Emergency and legal matters" />
              <p className="mt-3 text-body text-foreground">
                Kovva may take appropriate action when content or activity presents a serious
                and immediate risk to a person, the Platform or the public.
              </p>
              <p className="mt-3 text-body text-foreground">
                Where required by law, Kovva may preserve information and cooperate with
                lawful requests from competent authorities.
              </p>
              <p className="mt-3 text-body text-foreground">
                Nothing in these Guidelines prevents users from contacting emergency services
                or relevant authorities where an immediate danger exists.
              </p>
            </section>

            <section id="sec-22" className="scroll-mt-24">
              <SectionHeading n={22} heading="Our approach to moderation" />
              <p className="mt-3 text-body text-foreground">
                Kovva may use a combination of automated systems, human review and user
                reports to identify content or behaviour that may violate these Guidelines.
              </p>
              <p className="mt-3 text-body text-foreground">
                Automated systems may make mistakes. Where appropriate, Kovva may review
                relevant context before taking enforcement action. Not every violation will
                necessarily be detected or acted upon immediately.
              </p>
            </section>

            <section id="sec-23" className="scroll-mt-24">
              <SectionHeading n={23} heading="Changes to these Guidelines" />
              <p className="mt-3 text-body text-foreground">
                Kovva may update these Community Guidelines from time to time as the
                Platform, community and applicable requirements develop.
              </p>
              <p className="mt-3 text-body text-foreground">
                Material changes may be communicated through the Platform or other reasonable
                channels. The “Last Updated” date at the beginning of these Guidelines
                indicates when they were most recently updated.
              </p>
            </section>

            <section id="sec-24" className="scroll-mt-24">
              <SectionHeading n={24} heading="Contact Kovva" />
              <p className="mt-3 text-body text-foreground">
                For questions, complaints, community reports or concerns relating to these
                Guidelines:
              </p>
              <div className="mt-4 rounded-lg border border-border bg-surface px-6 py-6 text-body">
                <p className="font-bold text-strong">Kovva Nexus Ltd.</p>
                <p className="mt-2">
                  Email:{" "}
                  <a
                    href="mailto:support@kovva.app"
                    className="text-accent transition-opacity hover:opacity-90"
                  >
                    support@kovva.app
                  </a>
                </p>
                <p className="mt-1">
                  Email:{" "}
                  <a
                    href="mailto:hello@kovva.app"
                    className="text-accent transition-opacity hover:opacity-90"
                  >
                    hello@kovva.app
                  </a>
                </p>
                <p className="mt-1">
                  Website:{" "}
                  <a
                    href="https://kovva.app"
                    className="text-accent transition-opacity hover:opacity-90"
                  >
                    Kovva.app
                  </a>
                </p>
                <p className="mt-1 text-muted-foreground">Registered Address: Lagos, Nigeria</p>
              </div>
            </section>

            <section id="sec-25" className="scroll-mt-24">
              <SectionHeading n={25} heading="Final note" />
              <p className="mt-3 text-body text-foreground">
                Kovva is built for people to discover products, express themselves, share
                ideas and participate in a lifestyle community.
              </p>
              <p className="mt-3 text-body text-foreground">
                Use the Platform honestly. Respect other people. Protect your privacy and the
                privacy of others. Do not use Kovva to cause harm, deceive people or
                undermine the community.
              </p>
              <p className="mt-3 text-body text-foreground">
                By using Kovva&apos;s community features, you agree to follow these Community
                Guidelines and the other applicable Kovva policies.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-5 py-8 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <p className="min-w-0 text-caption text-muted-foreground">
            © {new Date().getFullYear()} Kovva. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-caption text-muted-foreground">
            <a href="/#waitlist" className="transition-colors hover:text-accent">
              Waitlist
            </a>
            <a href="/terms" className="transition-colors hover:text-accent">
              Terms
            </a>
            <a href="/community-guidelines" className="transition-colors hover:text-accent">
              Guidelines
            </a>
            <a href="/contact" className="transition-colors hover:text-accent">
              Contact
            </a>
            <a
              href="mailto:hello@kovva.app"
              className="transition-colors hover:text-accent"
            >
              hello@kovva.app
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
