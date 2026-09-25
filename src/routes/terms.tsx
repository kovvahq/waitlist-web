import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const title = "Kovva — Terms of Service & Privacy Policy";
const description =
  "Kovva's Terms of Service and Privacy Policy: platform rules, orders, payments, creator rewards, and how we collect, use and protect your personal data. Operated by Kovva Nexus Ltd., Lagos, Nigeria.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "https://kovva.app/terms" },
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
          "@type": "WebPage",
          name: title,
          url: "https://kovva.app/terms",
          description,
        }),
      },
    ],
  }),
  component: Terms,
});

const PDF_URL =
  "/docs/Kovva%20Terms%20of%20Service%20and%20Privacy%20Policy.pdf";

const toc: { part: string; items: { n: number; t: string }[] }[] = [
  {
    part: "I · Terms of Service",
    items: [
      { n: 1, t: "About Kovva" },
      { n: 2, t: "Eligibility" },
      { n: 3, t: "Your Kovva account" },
      { n: 4, t: "Products and product information" },
      { n: 5, t: "Prices" },
      { n: 6, t: "Orders" },
      { n: 7, t: "Payment" },
      { n: 8, t: "Delivery" },
      { n: 9, t: "Returns, refunds and cancellations" },
      { n: 10, t: "Third-party sellers and suppliers" },
      { n: 11, t: "User-generated content" },
      { n: 12, t: "Creator content and rewards" },
      { n: 13, t: "AI features" },
      { n: 14, t: "Vouchers, promotions and discounts" },
      { n: 15, t: "Wallet and platform balances" },
      { n: 16, t: "Prohibited use" },
      { n: 17, t: "Intellectual property" },
      { n: 18, t: "Third-party services" },
      { n: 19, t: "Account suspension or termination" },
      { n: 20, t: "Disclaimers" },
      { n: 21, t: "Limitation of liability" },
      { n: 22, t: "Indemnity" },
      { n: 23, t: "Changes to these terms" },
      { n: 24, t: "Complaints and customer support" },
    ],
  },
  {
    part: "II · Privacy Policy",
    items: [
      { n: 25, t: "Our commitment to privacy" },
      { n: 26, t: "Information we collect" },
      { n: 27, t: "Payment and transaction information" },
      { n: 28, t: "Information about your use of Kovva" },
      { n: 29, t: "Location information" },
      { n: 30, t: "Photos, videos and user content" },
      { n: 31, t: "AI styling and virtual try-on" },
      { n: 32, t: "How we use personal data" },
      { n: 33, t: "Lawful basis for processing" },
      { n: 34, t: "Marketing" },
      { n: 35, t: "Who we share data with" },
      { n: 36, t: "International data transfers" },
      { n: 37, t: "Data security" },
      { n: 38, t: "Data retention" },
      { n: 39, t: "Your data-protection rights" },
      { n: 40, t: "How to exercise your rights" },
      { n: 41, t: "Children's privacy" },
      { n: 42, t: "Cookies and similar technologies" },
      { n: 43, t: "Third-party links and services" },
      { n: 44, t: "Data breaches" },
      { n: 45, t: "Changes to this privacy policy" },
    ],
  },
  {
    part: "III · General legal information",
    items: [
      { n: 46, t: "Governing law" },
      { n: 47, t: "Severability" },
      { n: 48, t: "Entire agreement" },
      { n: 49, t: "Contact Kovva" },
      { n: 50, t: "Data-protection complaints" },
    ],
  },
];

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-body leading-relaxed text-foreground">{children}</p>;
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-6 text-body leading-relaxed text-foreground">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function Sub({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-body font-bold text-strong">{children}</p>;
}

function Section({
  n,
  heading,
  children,
}: {
  n: number;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={`sec-${n}`} className="scroll-mt-32 border-t border-border pt-8">
      <h3 className="text-title font-bold text-strong">
        {n}. {heading}
      </h3>
      {children}
    </section>
  );
}

function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-5 pb-24 md:px-10">
        <p className="text-caption font-medium uppercase tracking-widest text-accent">Legal</p>
        <h1 className="mt-3 text-[clamp(1.75rem,4.5vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-strong">
          Terms of Service &amp; Privacy Policy
        </h1>
        <p className="mt-3 text-body text-muted-foreground">Last updated September 2026</p>

        <div className="mt-6 rounded-lg bg-surface px-6 py-5">
          <p className="text-body font-bold text-strong">Kovva Nexus Ltd.</p>
          <p className="mt-1 text-body text-muted-foreground">Lagos, Nigeria</p>
          <p className="mt-1 text-body text-muted-foreground">
            Website:{" "}
            <a href="https://kovva.app" className="text-accent hover:underline">
              Kovva.app
            </a>
          </p>
        </div>

        <P>
          Welcome to Kovva. Kovva Nexus Ltd. (“Kovva”, “we”, “us” or “our”) operates the Kovva
          mobile application, website, products, services, features and related services
          (collectively, the “Platform”).
        </P>
        <P>
          By creating an account, accessing or using Kovva, placing an order, purchasing a product,
          uploading content, participating in the Kovva community, or otherwise using the Platform,
          you acknowledge that you have read, understood and agreed to this Agreement.
        </P>
        <P>If you do not agree with this Agreement, you should not use Kovva.</P>
        <P>
          This page is a transcription of our binding legal document. The source of truth is the{" "}
          <a href={PDF_URL} className="text-accent hover:underline">
            Terms of Service &amp; Privacy Policy (PDF)
          </a>
          .
        </P>

        <nav
          aria-label="Section index"
          className="sticky top-0 z-10 -mx-5 mt-10 border-y border-border bg-background/95 px-5 py-3 backdrop-blur md:-mx-10 md:px-10"
        >
          <div className="flex gap-4 overflow-x-auto pb-1">
            {toc.map((group) => (
              <div key={group.part} className="flex shrink-0 items-baseline gap-2">
                <span className="whitespace-nowrap text-caption font-bold uppercase tracking-widest text-accent">
                  {group.part}
                </span>
                <span className="flex flex-wrap gap-x-3 gap-y-1">
                  {group.items.map((item) => (
                    <a
                      key={item.n}
                      href={`#sec-${item.n}`}
                      title={item.t}
                      className="whitespace-nowrap text-caption text-muted-foreground transition-colors hover:text-accent"
                    >
                      §{item.n}
                    </a>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </nav>

        {/* PART I */}
        <h2 className="mt-14 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em] text-strong">
          Part I — Terms of Service
        </h2>
        <div className="mt-8 space-y-10">
          <Section n={1} heading="ABOUT KOVVA">
            <P>
              Kovva is a social-commerce and lifestyle platform that allows users to discover,
              interact with and purchase lifestyle and fashion products through the Platform.
            </P>
            <P>
              Kovva may facilitate transactions involving products supplied by Kovva-approved
              third-party vendors, suppliers or other commercial partners.
            </P>
            <P>Kovva may provide features including:</P>
            <Bullets
              items={[
                "Product discovery and shopping;",
                "Social feeds and user-generated content;",
                "Product tagging;",
                "Creator content and creator-related rewards;",
                "AI-powered styling and recommendations;",
                "Virtual or AI-assisted try-on;",
                "Promotions, vouchers and discounts;",
                "User accounts and profiles; and",
                "Other lifestyle and commerce-related features introduced from time to time.",
              ]}
            />
            <P>
              The availability of any particular feature, product, vendor or service may change from
              time to time.
            </P>
          </Section>

          <Section n={2} heading="ELIGIBILITY">
            <P>You must provide accurate information when creating or maintaining a Kovva account.</P>
            <P>By using Kovva, you confirm that:</P>
            <Bullets
              items={[
                "You are legally capable of entering into an agreement under applicable law;",
                "The information you provide is accurate and up to date;",
                "You will maintain the security of your account; and",
                "You will use the Platform only for lawful purposes.",
              ]}
            />
            <P>
              Where applicable, certain features or transactions may have additional age or
              verification requirements.
            </P>
            <P>
              If you use Kovva on behalf of a business or organisation, you confirm that you have
              authority to bind that organisation to this Agreement.
            </P>
          </Section>

          <Section n={3} heading="YOUR KOVVA ACCOUNT">
            <P>Some Kovva features require an account.</P>
            <P>You are responsible for:</P>
            <Bullets
              items={[
                "Keeping your login credentials confidential;",
                "Providing accurate account information;",
                "Updating information when it changes;",
                "Preventing unauthorised access to your account; and",
                "Activities carried out through your account, except where unauthorised use results from circumstances outside your reasonable control.",
              ]}
            />
            <P>
              You should notify Kovva promptly if you believe your account has been compromised.
            </P>
            <P>
              Kovva may suspend or restrict an account where we reasonably believe that it has been
              used fraudulently, unlawfully, abusively or in violation of this Agreement.
            </P>
          </Section>

          <Section n={4} heading="PRODUCTS AND PRODUCT INFORMATION">
            <P>Kovva aims to provide accurate information about products displayed on the Platform.</P>
            <P>Product information may include:</P>
            <Bullets
              items={[
                "Product name;",
                "Images;",
                "Description;",
                "Available sizes or variants;",
                "Price;",
                "Availability;",
                "Seller or supplier information where applicable; and",
                "Delivery information.",
              ]}
            />
            <P>Colours and appearance may vary between devices and actual products.</P>
            <P>Product availability may change at any time.</P>
            <P>
              Where a product becomes unavailable after an order has been placed, Kovva may contact
              you regarding the order and, where appropriate, provide a refund or other available
              remedy.
            </P>
          </Section>

          <Section n={5} heading="PRICES">
            <P>
              Prices displayed on Kovva are generally stated in Nigerian Naira unless otherwise
              indicated.
            </P>
            <P>Prices may change from time to time.</P>
            <P>
              A price change will not affect an order that has already been successfully accepted and
              paid for, except where an obvious pricing or technical error has occurred.
            </P>
            <P>
              Where there is an obvious pricing error, Kovva may contact you before fulfilling the
              order and provide you with the option to proceed at the correct price or cancel the
              affected order.
            </P>
            <P>
              Where applicable, delivery fees, taxes, duties or other charges will be disclosed
              before you complete payment.
            </P>
          </Section>

          <Section n={6} heading="ORDERS">
            <P>Placing an order constitutes a request to purchase the selected product.</P>
            <P>An order is not necessarily accepted merely because you have submitted it.</P>
            <P>Kovva may decline, cancel or limit an order where:</P>
            <Bullets
              items={[
                "The product is unavailable;",
                "There is an obvious pricing or listing error;",
                "Fraud or unauthorised activity is suspected;",
                "Payment has not been successfully received;",
                "The order violates applicable law or this Agreement;",
                "A vendor or supplier cannot fulfil the order; or",
                "Circumstances outside Kovva's reasonable control prevent fulfilment.",
              ]}
            />
            <P>
              Where Kovva cancels an order after payment has been received, the applicable amount
              will be refunded in accordance with the Refund &amp; Return Policy.
            </P>
          </Section>

          <Section n={7} heading="PAYMENT">
            <P>
              Payments may be processed through third-party payment providers made available by
              Kovva.
            </P>
            <P>You agree to provide accurate payment and billing information.</P>
            <P>
              Where payments are processed by an independent payment provider, Kovva may not have
              access to your complete card details.
            </P>
            <P>Your payment provider may apply additional terms, fees or security requirements.</P>
            <P>
              Kovva may require additional verification for transactions where reasonably necessary
              to prevent fraud, comply with applicable law or protect users and the Platform.
            </P>
          </Section>

          <Section n={8} heading="DELIVERY">
            <P>
              Kovva may offer different delivery arrangements depending on the product, seller,
              supplier, location and fulfilment method.
            </P>
            <P>
              Estimated delivery periods displayed on the Platform are estimates and are not
              necessarily guaranteed delivery dates.
            </P>
            <P>
              Products sourced internationally may require longer delivery periods than products
              fulfilled locally.
            </P>
            <P>Delivery may be affected by:</P>
            <Bullets
              items={[
                "Courier delays;",
                "Customs or import processes;",
                "Supplier delays;",
                "Incorrect delivery information;",
                "Weather or logistical disruptions;",
                "Public emergencies; or",
                "Other circumstances outside Kovva's reasonable control.",
              ]}
            />
            <P>
              You are responsible for providing an accurate delivery address and contact information.
            </P>
          </Section>

          <Section n={9} heading="RETURNS, REFUNDS AND CANCELLATIONS">
            <P>Returns, refunds and cancellations are governed by Kovva&apos;s Refund &amp; Return Policy.</P>
            <P>
              Nothing in this Agreement is intended to remove or restrict any consumer right that
              cannot lawfully be excluded under applicable Nigerian law.
            </P>
            <P>
              Where goods are defective, unsafe, materially different from their description, or
              otherwise fail to meet applicable legal requirements, applicable remedies will be
              determined in accordance with Nigerian law and Kovva&apos;s applicable policies.
            </P>
          </Section>

          <Section n={10} heading="THIRD-PARTY SELLERS AND SUPPLIERS">
            <P>
              Some products available through Kovva may be supplied by third-party vendors, suppliers
              or commercial partners.
            </P>
            <P>
              Where applicable, Kovva may facilitate the transaction, payment, communication,
              fulfilment or delivery process.
            </P>
            <P>
              Third-party sellers and suppliers are responsible for complying with applicable laws
              and Kovva&apos;s seller requirements, including requirements relating to product
              descriptions, authenticity, availability and fulfilment.
            </P>
            <P>
              Kovva may remove, restrict or suspend products or sellers that do not meet our
              requirements.
            </P>
            <P>Nothing in this Agreement limits applicable consumer rights.</P>
          </Section>

          <Section n={11} heading="USER-GENERATED CONTENT">
            <P>Kovva may allow users to upload or share:</P>
            <Bullets
              items={[
                "Photos;",
                "Videos;",
                "Reviews;",
                "Comments;",
                "Product-related posts;",
                "Styling content;",
                "Profile information; and",
                "Other material (“User Content”).",
              ]}
            />
            <P>You remain responsible for the User Content you submit.</P>
            <P>By uploading User Content, you confirm that:</P>
            <Bullets
              items={[
                "You have the necessary rights to submit the content;",
                "The content does not unlawfully infringe another person's rights;",
                "The content is not fraudulent or misleading;",
                "The content does not violate applicable law; and",
                "The content does not violate this Agreement or Kovva's Community Guidelines.",
              ]}
            />
            <P>
              You grant Kovva a non-exclusive, worldwide, royalty-free licence to host, store,
              reproduce, display, distribute and otherwise use your User Content as reasonably
              necessary to operate, promote and improve the Platform.
            </P>
            <P>You retain ownership of your User Content.</P>
            <P>
              Kovva may remove or restrict User Content that we reasonably believe violates this
              Agreement, applicable law or our Community Guidelines.
            </P>
          </Section>

          <Section n={12} heading="CREATOR CONTENT AND REWARDS">
            <P>
              Kovva may allow eligible users or creators to publish content containing or linking to
              products available through the Platform.
            </P>
            <P>
              Where Kovva operates a creator reward or commission programme, eligibility,
              calculation, payment and other requirements will be governed by the applicable Creator
              Terms or programme rules.
            </P>
            <P>
              Creators must not manipulate purchases, clicks, engagement, referrals or other
              activity to obtain rewards fraudulently.
            </P>
            <P>
              Kovva may withhold or reverse rewards associated with fraudulent, cancelled, refunded
              or otherwise ineligible transactions.
            </P>
          </Section>

          <Section n={13} heading="AI FEATURES">
            <P>Kovva may provide AI-powered features including:</P>
            <Bullets
              items={[
                "Personalised styling;",
                "Product recommendations;",
                "Outfit recommendations;",
                "AI-assisted fashion advice;",
                "Image-based styling; and",
                "Virtual or AI-assisted try-on.",
              ]}
            />
            <P>AI-generated recommendations may contain inaccuracies.</P>
            <P>
              AI-generated results do not guarantee that a particular product, style, colour, fit or
              appearance will be suitable for you.
            </P>
            <P>You remain responsible for reviewing product information before making a purchase.</P>
          </Section>

          <Section n={14} heading="VOUCHERS, PROMOTIONS AND DISCOUNTS">
            <P>
              Kovva may offer promotional codes, vouchers, coupons, discounts or other promotional
              benefits.
            </P>
            <P>
              Promotions may have specific eligibility requirements, expiry dates or other
              conditions.
            </P>
            <P>Unless otherwise stated:</P>
            <Bullets
              items={[
                "Promotions are not transferable;",
                "Promotions cannot be exchanged for cash;",
                "Kovva may restrict promotional use where fraud or abuse is suspected; and",
                "Kovva may withdraw a promotion where a technical or pricing error has occurred.",
              ]}
            />
            <P>
              Specific promotional terms displayed with a promotion will apply where they differ from
              these general Terms.
            </P>
          </Section>

          <Section n={15} heading="WALLET AND PLATFORM BALANCES">
            <P>
              Where Kovva provides a wallet, balance, credit, reward balance or similar feature,
              additional terms may apply.
            </P>
            <P>
              Funds or balances made available through such features may be subject to identity
              verification, transaction limits, withdrawal requirements, fraud-prevention measures
              and applicable regulatory requirements.
            </P>
            <P>
              Kovva may suspend transactions or withdrawals where reasonably necessary to investigate
              suspected fraud, comply with legal obligations or protect the Platform and its users.
            </P>
            <P>
              Promotional credits, vouchers or non-cash rewards are not withdrawable cash unless
              expressly stated otherwise.
            </P>
          </Section>

          <Section n={16} heading="PROHIBITED USE">
            <P>You must not use Kovva to:</P>
            <Bullets
              items={[
                "Commit or facilitate fraud;",
                "Impersonate another person or business;",
                "Create accounts for deceptive purposes;",
                "Upload stolen or unlawfully obtained content;",
                "Sell or promote prohibited or unlawful products;",
                "Manipulate reviews, engagement, purchases or creator rewards;",
                "Attempt to gain unauthorised access to the Platform;",
                "Introduce malicious software or harmful code;",
                "Interfere with the operation or security of Kovva;",
                "Scrape or systematically collect Platform data without permission;",
                "Circumvent Platform security or access controls;",
                "Use Kovva for unlawful purposes; or",
                "Engage in conduct that materially harms other users or Kovva.",
              ]}
            />
          </Section>

          <Section n={17} heading="INTELLECTUAL PROPERTY">
            <P>
              The Kovva name, logo, branding, software, design, interfaces, graphics, text, features
              and other Kovva-owned materials are protected by applicable intellectual-property
              laws.
            </P>
            <P>
              Except where expressly permitted, you may not copy, reproduce, modify, distribute,
              sell, license, reverse engineer or commercially exploit Kovva&apos;s proprietary
              materials without our prior written permission.
            </P>
            <P>Nothing in this Agreement transfers ownership of Kovva&apos;s intellectual property to you.</P>
          </Section>

          <Section n={18} heading="THIRD-PARTY SERVICES">
            <P>
              Kovva may integrate with or rely on third-party services including payment processors,
              delivery providers, technology providers, analytics providers and other service
              providers.
            </P>
            <P>
              Your use of those services may also be subject to the relevant third party&apos;s terms
              and policies.
            </P>
            <P>
              Kovva is not responsible for independent third-party services to the extent that the
              relevant issue is outside Kovva&apos;s reasonable control.
            </P>
          </Section>

          <Section n={19} heading="ACCOUNT SUSPENSION OR TERMINATION">
            <P>You may stop using Kovva at any time.</P>
            <P>
              Kovva may suspend, restrict or terminate your account where we reasonably believe
              that:
            </P>
            <Bullets
              items={[
                "You have violated this Agreement;",
                "You have engaged in fraud or abuse;",
                "Your activity creates a security or legal risk;",
                "Your account is being used unlawfully; or",
                "Suspension is reasonably necessary to protect Kovva, its users or third parties.",
              ]}
            />
            <P>Where reasonably practicable, Kovva may provide notice before taking action.</P>
            <P>Termination does not affect rights or obligations that arose before termination.</P>
          </Section>

          <Section n={20} heading="DISCLAIMERS">
            <P>Kovva will use reasonable efforts to keep the Platform available and functioning properly.</P>
            <P>However, we do not guarantee that:</P>
            <Bullets
              items={[
                "The Platform will always be available;",
                "The Platform will be completely error-free;",
                "Every product will always be available;",
                "Delivery estimates will always be met; or",
                "AI-generated recommendations will always be accurate.",
              ]}
            />
            <P>
              Nothing in this Agreement excludes liability or consumer rights that cannot legally be
              excluded under applicable law.
            </P>
          </Section>

          <Section n={21} heading="LIMITATION OF LIABILITY">
            <P>
              To the extent permitted by applicable law, Kovva will not be responsible for indirect,
              incidental or consequential losses arising from your use of the Platform where such
              liability cannot reasonably be attributed to Kovva.
            </P>
            <P>
              Nothing in this Agreement is intended to exclude or restrict liability where doing so
              would be unlawful.
            </P>
          </Section>

          <Section n={22} heading="INDEMNITY">
            <P>
              To the extent permitted by applicable law, you agree to be responsible for losses,
              claims, liabilities or reasonable expenses arising from your unlawful use of Kovva,
              violation of this Agreement, or infringement of another person&apos;s rights.
            </P>
            <P>
              This clause does not apply to the extent that the relevant loss was caused by
              Kovva&apos;s own unlawful conduct or liability that cannot legally be transferred to
              you.
            </P>
          </Section>

          <Section n={23} heading="CHANGES TO THESE TERMS">
            <P>Kovva may update this Agreement from time to time.</P>
            <P>
              Where material changes are made, Kovva may provide notice through the Platform or
              other reasonable means.
            </P>
            <P>The updated Agreement will become effective on the date stated in the updated Agreement.</P>
            <P>
              Your continued use of Kovva after the effective date constitutes acceptance of the
              updated Agreement to the extent permitted by applicable law.
            </P>
          </Section>

          <Section n={24} heading="COMPLAINTS AND CUSTOMER SUPPORT">
            <P>
              If you have a complaint, dispute or concern relating to Kovva, you should first contact
              Kovva through the customer-support channels provided on the Platform.
            </P>
            <P>We will make reasonable efforts to review and resolve complaints efficiently.</P>
            <P>
              Nothing in this section prevents you from exercising statutory rights or seeking
              remedies available under applicable law.
            </P>
          </Section>
        </div>

        {/* PART II */}
        <h2
          id="privacy"
          className="mt-14 scroll-mt-32 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em] text-strong"
        >
          Part II — Privacy Policy
        </h2>
        <div className="mt-8 space-y-10">
          <Section n={25} heading="OUR COMMITMENT TO PRIVACY">
            <P>Kovva respects your privacy and is committed to protecting your personal data.</P>
            <P>
              This section explains how Kovva collects, uses, stores, shares and protects personal
              data when you use the Platform.
            </P>
            <P>
              Kovva processes personal data in accordance with applicable Nigerian data-protection
              laws, including the Nigeria Data Protection Act 2023.
            </P>
          </Section>

          <Section n={26} heading="INFORMATION WE COLLECT">
            <P>Depending on how you use Kovva, we may collect the following information.</P>
            <Sub>Information You Provide</Sub>
            <P>This may include:</P>
            <Bullets
              items={[
                "Full name;",
                "Email address;",
                "Phone number;",
                "Account credentials;",
                "Age or date-of-birth information where required;",
                "Delivery address;",
                "Billing information;",
                "Clothing sizes;",
                "Shoe sizes;",
                "Profile information;",
                "Profile photograph;",
                "Preferences;",
                "Customer-support communications;",
                "Reviews;",
                "Comments;",
                "Photos;",
                "Videos;",
                "Other User Content; and",
                "Information provided when participating in promotions or creator programmes.",
              ]}
            />
          </Section>

          <Section n={27} heading="PAYMENT AND TRANSACTION INFORMATION">
            <P>When you make a purchase or transaction through Kovva, we may collect:</P>
            <Bullets
              items={[
                "Products purchased;",
                "Order amount;",
                "Transaction date;",
                "Transaction status;",
                "Payment method;",
                "Refund information;",
                "Delivery information; and",
                "Relevant transaction identifiers.",
              ]}
            />
            <P>
              Where payments are processed through third-party payment providers, those providers
              may collect and process your payment information directly.
            </P>
            <P>
              Kovva does not need to store your complete card details where those details are
              processed directly by an authorised payment provider.
            </P>
          </Section>

          <Section n={28} heading="INFORMATION ABOUT YOUR USE OF KOVVA">
            <P>We may automatically collect information about how you use the Platform, including:</P>
            <Bullets
              items={[
                "Device type;",
                "Operating system;",
                "App version;",
                "IP address;",
                "Device identifiers;",
                "Browser information;",
                "Language and device settings;",
                "Login information;",
                "Screens viewed;",
                "Products viewed;",
                "Searches;",
                "Interactions with products and content;",
                "Shopping activity;",
                "Crash reports;",
                "Performance information; and",
                "Security-related information.",
              ]}
            />
            <P>We use this information to operate, secure, analyse and improve Kovva.</P>
          </Section>

          <Section n={29} heading="LOCATION INFORMATION">
            <P>
              Kovva may collect location information where necessary for a feature you choose to use
              or where you provide location information to us.
            </P>
            <P>Location information may be used to:</P>
            <Bullets
              items={[
                "Facilitate delivery;",
                "Determine applicable delivery options;",
                "Improve location-relevant services;",
                "Prevent fraud; or",
                "Provide features requiring location information.",
              ]}
            />
            <P>
              Where operating-system permission is required, we will request the relevant
              permission.
            </P>
            <P>
              You may disable location permissions through your device settings, although doing so
              may affect features that require location information.
            </P>
          </Section>

          <Section n={30} heading="PHOTOS, VIDEOS AND USER CONTENT">
            <P>
              If you upload photos, videos or other content to Kovva, that content may contain
              personal information.
            </P>
            <P>
              You are responsible for ensuring that you have the necessary rights or permissions to
              upload content involving other people.
            </P>
            <P>
              Content published publicly on Kovva may be viewed, interacted with or shared by other
              users depending on the functionality of the Platform.
            </P>
            <P>
              You should avoid uploading sensitive personal information that you do not want to make
              publicly available.
            </P>
          </Section>

          <Section n={31} heading="AI STYLING AND VIRTUAL TRY-ON">
            <P>
              Kovva may provide AI-powered features such as styling recommendations, product
              recommendations and virtual or AI-assisted try-on.
            </P>
            <P>
              Depending on the feature, you may voluntarily provide photographs, descriptions,
              preferences, measurements or other information.
            </P>
            <P>
              Where images or other information are processed by Kovva or a third-party technology
              provider, they may be processed to provide the requested AI feature.
            </P>
            <P>
              Kovva will not use information collected for an AI feature for an unrelated purpose
              merely because it was provided for that feature.
            </P>
            <P>AI-generated results may contain inaccuracies.</P>
          </Section>

          <Section n={32} heading="HOW WE USE PERSONAL DATA">
            <P>Kovva may process personal data for purposes including:</P>
            <Sub>Account Management</Sub>
            <Bullets
              items={[
                "Creating and managing accounts;",
                "Authentication;",
                "Account security; and",
                "Customer support.",
              ]}
            />
            <Sub>Shopping and Orders</Sub>
            <Bullets
              items={[
                "Processing purchases;",
                "Confirming orders;",
                "Facilitating payments;",
                "Arranging delivery;",
                "Processing refunds and returns; and",
                "Providing order-related communications.",
              ]}
            />
            <Sub>Personalisation</Sub>
            <Bullets
              items={[
                "Personalising shopping experiences;",
                "Recommending products;",
                "Improving search and discovery; and",
                "Providing styling recommendations.",
              ]}
            />
            <Sub>Social Features</Sub>
            <Bullets
              items={[
                "Displaying profiles and content;",
                "Enabling interactions;",
                "Supporting product tagging;",
                "Operating creator programmes; and",
                "Moderating content.",
              ]}
            />
            <Sub>Security</Sub>
            <Bullets
              items={[
                "Detecting fraud;",
                "Preventing abuse;",
                "Protecting accounts;",
                "Investigating suspicious activity; and",
                "Protecting the Platform.",
              ]}
            />
            <Sub>Business Operations</Sub>
            <Bullets
              items={[
                "Analysing Platform performance;",
                "Improving products and services;",
                "Conducting analytics;",
                "Troubleshooting;",
                "Maintaining records; and",
                "Complying with legal obligations.",
              ]}
            />
          </Section>

          <Section n={33} heading="LAWFUL BASIS FOR PROCESSING">
            <P>
              Depending on the circumstances, Kovva may rely on lawful bases recognised under
              applicable Nigerian data-protection law, including:
            </P>
            <Bullets
              items={[
                "Your consent;",
                "Processing necessary to perform a contract with you;",
                "Compliance with a legal obligation;",
                "Protection of vital interests;",
                "Public-interest grounds where applicable; and",
                "Legitimate interests where permitted by applicable law and where those interests do not override your rights.",
              ]}
            />
            <P>The applicable lawful basis depends on the specific processing activity.</P>
          </Section>

          <Section n={34} heading="MARKETING">
            <P>
              Where required by law, Kovva will obtain appropriate consent before sending direct
              marketing communications.
            </P>
            <P>Marketing may include information about:</P>
            <Bullets
              items={[
                "Products;",
                "Promotions;",
                "Discounts;",
                "Vouchers;",
                "New features;",
                "Events; and",
                "Kovva services.",
              ]}
            />
            <P>You may opt out of marketing communications at any time.</P>
            <P>
              Opting out of marketing will not prevent important transactional or service-related
              communications.
            </P>
          </Section>

          <Section n={35} heading="WHO WE SHARE DATA WITH">
            <P>
              We may share personal data where necessary to provide Kovva&apos;s services or where
              legally permitted.
            </P>
            <Sub>Payment Providers</Sub>
            <P>For processing payments and refunds.</P>
            <Sub>Delivery and Logistics Providers</Sub>
            <P>For fulfilling and delivering orders.</P>
            <Sub>Vendors and Suppliers</Sub>
            <P>Where necessary to fulfil an order or provide a service.</P>
            <P>Only information reasonably necessary for the relevant purpose should be provided.</P>
            <Sub>Technology Providers</Sub>
            <P>Including providers of:</P>
            <Bullets
              items={[
                "Cloud hosting;",
                "Database services;",
                "Analytics;",
                "Security;",
                "Customer support;",
                "Authentication;",
                "Communications; and",
                "AI technology.",
              ]}
            />
            <Sub>Professional Advisers</Sub>
            <P>
              Where reasonably necessary, information may be shared with accountants, auditors,
              insurers or legal advisers.
            </P>
            <Sub>Government Authorities</Sub>
            <P>Where required or permitted by applicable law, court order or lawful government request.</P>
          </Section>

          <Section n={36} heading="INTERNATIONAL DATA TRANSFERS">
            <P>Some service providers used by Kovva may process personal data outside Nigeria.</P>
            <P>
              Where personal data is transferred internationally, Kovva will take appropriate steps
              required by applicable law to protect the information and ensure that the transfer is
              conducted on a lawful basis.
            </P>
          </Section>

          <Section n={37} heading="DATA SECURITY">
            <P>
              Kovva takes reasonable technical and organisational measures designed to protect
              personal data against:
            </P>
            <Bullets
              items={[
                "Unauthorised access;",
                "Unauthorised disclosure;",
                "Loss;",
                "Destruction;",
                "Alteration;",
                "Misuse; and",
                "Other unlawful processing.",
              ]}
            />
            <P>
              Security measures may include access controls, authentication, encryption where
              appropriate, monitoring, secure infrastructure and internal controls.
            </P>
            <P>No internet-based system can be guaranteed to be completely secure.</P>
            <P>You are also responsible for protecting your account credentials and device.</P>
          </Section>

          <Section n={38} heading="DATA RETENTION">
            <P>
              Kovva will retain personal data only for as long as reasonably necessary for the
              purposes for which it was collected, unless a longer period is required or permitted
              by applicable law.
            </P>
            <P>Retention may depend on:</P>
            <Bullets
              items={[
                "The nature of the information;",
                "The purpose for which it was collected;",
                "Whether you continue to use Kovva;",
                "Legal requirements;",
                "Accounting and financial-record requirements;",
                "Dispute resolution;",
                "Fraud prevention; and",
                "Legal claims.",
              ]}
            />
            <P>
              When personal data is no longer required, Kovva will take reasonable steps to delete,
              anonymise or securely dispose of it.
            </P>
          </Section>

          <Section n={39} heading="YOUR DATA-PROTECTION RIGHTS">
            <P>Subject to applicable law and lawful limitations, you may have rights including:</P>
            <Bullets
              items={[
                "The right to be informed about processing;",
                "The right to request access to your personal data;",
                "The right to request correction of inaccurate information;",
                "The right to request deletion or erasure in applicable circumstances;",
                "The right to object to certain processing;",
                "The right to request restriction of processing where applicable;",
                "The right to data portability where applicable;",
                "The right to withdraw consent where processing is based on consent;",
                "The right to lodge a complaint with the relevant supervisory authority; and",
                "Rights relating to automated decision-making where applicable.",
              ]}
            />
          </Section>

          <Section n={40} heading="HOW TO EXERCISE YOUR RIGHTS">
            <P>To make a privacy or data-protection request, contact:</P>
            <div className="mt-3 rounded-lg bg-surface px-6 py-5">
              <p className="text-body font-bold text-strong">Kovva Nexus Ltd.</p>
              <p className="mt-1 text-body text-foreground">
                Privacy and General Support:{" "}
                <a href="mailto:support@kovva.app" className="text-accent hover:underline">
                  support@kovva.app
                </a>
                {" · "}
                <a href="mailto:hello@kovva.app" className="text-accent hover:underline">
                  hello@kovva.app
                </a>
              </p>
              <p className="mt-1 text-body text-foreground">
                Website:{" "}
                <a href="https://kovva.app" className="text-accent hover:underline">
                  Kovva.app
                </a>
              </p>
              <p className="mt-1 text-body text-foreground">
                Registered Address: Lagos, Nigeria
              </p>
            </div>
            <P>
              Your request should provide enough information for us to identify you and understand
              your request.
            </P>
            <P>
              We may need to verify your identity before providing access to or changing personal
              information.
            </P>
            <P>We will handle valid requests within the period required by applicable law.</P>
          </Section>

          <Section n={41} heading="CHILDREN'S PRIVACY">
            <P>
              Kovva does not knowingly collect personal data from children in circumstances where
              parental or guardian consent is legally required without obtaining the appropriate
              consent.
            </P>
            <P>
              Where we become aware that personal data has been collected unlawfully or without
              required consent, we may take reasonable steps to delete the information.
            </P>
            <P>
              If you believe a child has provided personal information to Kovva in circumstances
              where this was not permitted, please contact us.
            </P>
          </Section>

          <Section n={42} heading="COOKIES AND SIMILAR TECHNOLOGIES">
            <P>
              Kovva may use cookies, software development kits, pixels, local storage and similar
              technologies to:
            </P>
            <Bullets
              items={[
                "Keep users signed in;",
                "Remember preferences;",
                "Understand Platform usage;",
                "Improve performance;",
                "Measure marketing effectiveness;",
                "Detect fraud; and",
                "Improve user experience.",
              ]}
            />
            <P>
              Where applicable, users will be provided with appropriate choices regarding cookies
              and similar technologies.
            </P>
          </Section>

          <Section n={43} heading="THIRD-PARTY LINKS AND SERVICES">
            <P>Kovva may contain links, integrations or services provided by third parties.</P>
            <P>If you access a third-party website or service, its own privacy policy may apply.</P>
            <P>Kovva is not responsible for the privacy practices of independent third parties.</P>
          </Section>

          <Section n={44} heading="DATA BREACHES">
            <P>
              Kovva maintains measures designed to identify, investigate and respond to personal-data
              security incidents.
            </P>
            <P>
              Where a personal-data breach occurs, Kovva will take appropriate steps required by
              applicable law, which may include assessing the breach, containing it, documenting it
              and notifying relevant authorities or affected individuals where legally required.
            </P>
          </Section>

          <Section n={45} heading="CHANGES TO THIS PRIVACY POLICY">
            <P>
              Kovva may update this Privacy Policy from time to time to reflect changes in:
            </P>
            <Bullets
              items={[
                "Our services;",
                "Technology;",
                "Data-processing practices;",
                "Applicable laws; or",
                "Regulatory requirements.",
              ]}
            />
            <P>
              Where material changes are made, we may provide appropriate notice through the
              Platform or other reasonable communication channels.
            </P>
            <P>
              The “Last Updated” date indicates when this Privacy Policy was most recently updated.
            </P>
          </Section>
        </div>

        {/* PART III */}
        <h2 className="mt-14 text-[clamp(1.5rem,3.5vw,2.25rem)] font-bold tracking-[-0.02em] text-strong">
          Part III — General legal information
        </h2>
        <div className="mt-8 space-y-10">
          <Section n={46} heading="GOVERNING LAW">
            <P>This Agreement is governed by the laws of the Federal Republic of Nigeria.</P>
            <P>
              Subject to mandatory consumer rights and applicable dispute-resolution mechanisms,
              disputes relating to this Agreement or your use of Kovva will be subject to the
              jurisdiction of the appropriate courts in Nigeria.
            </P>
          </Section>

          <Section n={47} heading="SEVERABILITY">
            <P>
              If any provision of this Agreement is found to be unlawful, invalid or unenforceable,
              that provision will be modified or removed to the minimum extent necessary, while the
              remaining provisions will continue to apply.
            </P>
          </Section>

          <Section n={48} heading="ENTIRE AGREEMENT">
            <P>
              This Agreement, together with Kovva&apos;s Refund &amp; Return Policy, Delivery
              Policy, Vendor Terms, Creator Terms, Community Guidelines and other policies expressly
              incorporated into it, constitutes the agreement between you and Kovva regarding your
              use of the Platform, subject to any additional terms applicable to particular
              products, services or programmes.
            </P>
          </Section>

          <Section n={49} heading="CONTACT KOVVA">
            <P>For questions, complaints, privacy requests or other enquiries:</P>
            <div className="mt-3 rounded-lg bg-surface px-6 py-5">
              <p className="text-body font-bold text-strong">Kovva Nexus Ltd.</p>
              <p className="mt-1 text-body text-foreground">
                Email:{" "}
                <a href="mailto:support@kovva.app" className="text-accent hover:underline">
                  support@kovva.app
                </a>
                {" · "}
                <a href="mailto:hello@kovva.app" className="text-accent hover:underline">
                  hello@kovva.app
                </a>
              </p>
              <p className="mt-1 text-body text-foreground">
                Website:{" "}
                <a href="https://kovva.app" className="text-accent hover:underline">
                  Kovva.app
                </a>
              </p>
              <p className="mt-1 text-body text-foreground">
                Registered Address: Lagos, Nigeria
              </p>
            </div>
          </Section>

          <Section n={50} heading="DATA-PROTECTION COMPLAINTS">
            <P>
              If you believe Kovva has not adequately addressed a privacy concern, you may have the
              right to lodge a complaint with the Nigeria Data Protection Commission (NDPC), subject
              to applicable procedures and requirements.
            </P>
            <P>The NDPC is Nigeria&apos;s statutory data-protection authority.</P>
            <P>
              By accessing or using Kovva, you acknowledge that you have read, understood and agreed
              to these Terms of Service &amp; Privacy Policy.
            </P>
          </Section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
