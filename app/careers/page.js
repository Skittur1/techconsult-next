import Link from "next/link";
import SiteShell from "../components/SiteShell";
import Icon from "../components/Icon";

export default function CareersPage() {
  return (
    <SiteShell activeNav="careers">
      <main className="w-full max-w-container-max mx-auto px-margin-mobile py-stack-lg md:px-margin-desktop">
        <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm md:p-12">
          <h1 className="mb-stack-sm font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">Careers</h1>
          <p className="mb-stack-md max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
            Join our team of senior consultants and architects building resilient, modern digital ecosystems for ambitious organizations.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded bg-secondary px-6 py-3 font-label-sm text-label-sm font-semibold uppercase text-on-secondary transition-colors hover:bg-on-secondary-container">
            Explore Opportunities
            <Icon className="h-4 w-4" name="arrow_forward" />
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
