import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <p className="min-w-0 text-caption text-muted-foreground">
          © {new Date().getFullYear()} Kovva. All rights reserved.
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-caption text-muted-foreground">
          <Link to="/contact" className="transition-colors hover:text-accent">
            Contact
          </Link>
          <Link to="/terms" className="transition-colors hover:text-accent">
            Terms
          </Link>
          <a href="/terms#privacy" className="transition-colors hover:text-accent">
            Privacy
          </a>
          <Link
            to="/community-guidelines"
            className="transition-colors hover:text-accent"
          >
            Guidelines
          </Link>
          <Link
            to="/help-and-support"
            className="transition-colors hover:text-accent"
          >
            Help
          </Link>
          <a
            href="mailto:hello@kovva.app"
            className="transition-colors hover:text-accent"
          >
            hello@kovva.app
          </a>
        </nav>
      </div>
    </footer>
  );
}
