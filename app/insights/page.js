import Link from "next/link";
import SiteShell from "../components/SiteShell";
import Icon from "../components/Icon";

export default function InsightsPage() {
  return (
    <SiteShell activeNav="insights">
      <main className="w-full max-w-container-max mx-auto px-margin-mobile py-stack-lg md:px-margin-desktop">
        <section className="rounded-xl border border-outline-variant bg-surface-container-lowest p-8 shadow-sm md:p-12">
          <h1 className="mb-stack-sm font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">Insights</h1>
          <p className="mb-stack-md max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
            Read the latest thinking from TechConsult on architecture, cloud modernization, cybersecurity, and digital transformation strategy.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-label-sm text-label-sm font-semibold uppercase text-on-primary transition-colors hover:bg-surface-tint">
            Contact Our Team
            <Icon className="h-4 w-4" name="arrow_forward" />
          </Link>
        </section>
      </main>
    </SiteShell>
  );
}
