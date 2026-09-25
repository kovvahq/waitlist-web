import { Link } from "@tanstack/react-router";
import { KovvaLogo } from "@/components/KovvaLogo";

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-10">
      <Link to="/" aria-label="Kovva home">
        <KovvaLogo />
      </Link>
      <a
        href="/#waitlist"
        className="rounded-pill border border-border px-4 py-2 text-caption font-medium text-strong transition-colors hover:border-accent hover:text-accent"
      >
        Join waitlist
      </a>
    </header>
  );
}
