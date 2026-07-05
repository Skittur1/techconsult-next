import Link from "next/link";
import SiteShell from "../components/SiteShell";
import Icon from "../components/Icon";

const studies = [
  {
    title: "AI-Driven Supply Chain Optimization",
    company: "Global Logistics Corp",
    description:
      "Implemented a comprehensive machine learning model to predict supply chain disruptions, resulting in significant cost savings and improved delivery reliability across 40+ international distribution centers.",
    stats: ["40% Reduction in Overhead", "99.9% Uptime Achieved"],
    span: "md:col-span-8",
    variant: "featured",
  },
  {
    title: "Legacy Core System Migration",
    company: "FinTrust Bank",
    description:
      "Seamlessly migrated decades of financial data to a secure cloud infrastructure with zero downtime.",
    stats: ["0 Seconds of Downtime"],
    span: "md:col-span-4",
    variant: "accent",
  },
  {
    title: "Unified Patient Data Portal",
    company: "MediCare Plus",
    description:
      "Developed a secure, HIPAA-compliant platform centralizing patient records across 15 regional hospitals.",
    stats: ["2.5M+ Records Processed"],
    span: "md:col-span-4",
    variant: "standard",
  },
  {
    title: "Enterprise Cybersecurity Overhaul",
    company: "RetailEdge Inc",
    description:
      "Deployed a zero-trust architecture across a global retail network, securing point-of-sale systems and corporate networks against emerging ransomware threats.",
    stats: ["100% Threat Mitigation"],
    span: "md:col-span-8",
    variant: "image",
  },
];

const filters = ["All Industries", "Finance", "Healthcare", "Logistics"];

export default function CaseStudiesPage() {
  return (
    <SiteShell activeNav="casestudies">
      <main className="w-full">
        <section className="mx-auto max-w-container-max px-margin-mobile py-stack-lg md:px-margin-desktop">
          <div className="max-w-3xl">
            <h1 className="mb-stack-sm font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
              Client Success Stories
            </h1>
            <p className="mb-stack-md font-body-lg text-body-lg text-on-surface-variant">
              Explore how we partner with leading organizations to drive digital transformation, optimize operations, and achieve measurable business outcomes through advanced technology solutions.
            </p>
            <div className="flex flex-wrap gap-unit">
              {filters.map((filter, index) => (
                <span
                  key={filter}
                  className={`rounded-full border px-4 py-2 font-label-sm text-label-sm transition-colors ${index === 0 ? "border-outline-variant bg-surface-container text-on-secondary-container" : "border-outline-variant bg-transparent text-on-surface-variant hover:bg-surface-container"}`}
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-margin-mobile pb-stack-lg md:px-margin-desktop">
          <div className="grid grid-cols-1 gap-gutter auto-rows-min md:grid-cols-12">
            {studies.map((study) => (
              <article
                key={study.title}
                className={`${study.span} ${study.variant === "accent" ? "flex min-h-[400px] flex-col justify-between rounded-xl bg-primary p-8 text-on-primary shadow-[0_4px_24px_rgba(0,0,0,0.1)]" : study.variant === "image" ? "flex min-h-[400px] flex-col items-center gap-8 rounded-xl border border-surface-container-highest bg-surface-container-lowest p-8 shadow-[0_4px_24px_rgba(0,101,145,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,101,145,0.08)] md:flex-row md:p-12" : "flex min-h-[400px] flex-col justify-between rounded-xl border border-surface-container-highest bg-surface-container-lowest p-8 shadow-[0_4px_24px_rgba(0,101,145,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,101,145,0.08)]"}`}
              >
                {study.variant === "image" ? (
                  <div className="h-64 w-full overflow-hidden rounded-lg bg-surface md:h-full md:w-1/2">
                    <img alt="Enterprise security operations center" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpbFZ2wdvYkP352TwPOKQjTQImtshpJ3I7nn-OYdfFphf7wwWcJksuxgYxphIFSXVxbr90g6tTgknNmHvT1IyVImL3dKsNQViKpPBzRQolONcX6SHz2ChZHpYnVjYkNZWKDqYA8tTm8Mtxy-l15DVHZ-bAMkzCS-ENJCL5Gs5cxWqxMle4Ah9DU1XylVXxCvSmPl_ZA_Csxs7fSkEPVSzQLy4HmZz8RYk588ahLPW08NLaB5hyj6N7dQ" />
                  </div>
                ) : null}

                <div className={`flex w-full flex-col justify-between ${study.variant === "image" ? "md:w-1/2" : ""}`}>
                  <div>
                    <div className="mb-6 flex items-center gap-unit">
                      <span className={`font-label-sm text-label-sm uppercase tracking-wider ${study.variant === "accent" ? "text-secondary-container" : "text-secondary"}`}>
                        {study.company}
                      </span>
                    </div>
                    <h2 className={`mb-4 ${study.variant === "accent" ? "font-headline-md text-headline-md" : study.variant === "featured" ? "font-headline-lg text-headline-lg text-primary" : "font-headline-md text-headline-md text-primary"}`}>
                      {study.title}
                    </h2>
                    <p className={`mb-8 ${study.variant === "accent" ? "text-inverse-primary opacity-90" : "text-on-surface-variant"}`}>
                      {study.description}
                    </p>
                  </div>

                  <div className={`mt-auto ${study.variant === "featured" ? "flex flex-col gap-6 border-t border-surface-container pt-6 md:flex-row md:gap-12" : study.variant === "image" ? "flex items-end justify-between" : "border-t border-surface-container pt-6"}`}>
                    {study.variant === "featured" ? (
                      study.stats.map((stat) => (
                        <div key={stat}>
                          <p className="mb-1 font-display-lg-mobile text-display-lg-mobile text-secondary md:text-display-lg">
                            {stat.includes("%") ? stat.split(" ")[0] : stat.includes("0") ? "0" : stat}
                          </p>
                          <p className="font-label-sm text-label-sm text-on-surface-variant">{stat}</p>
                        </div>
                      ))
                    ) : study.variant === "image" ? (
                      <>
                        <div>
                          <p className="mb-1 font-headline-lg text-headline-lg text-primary">100%</p>
                          <p className="font-label-sm text-label-sm text-on-surface-variant">Threat Mitigation</p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary transition-colors hover:text-secondary">
                          Read Full Study <Icon className="h-4 w-4" name="arrow_forward" />
                        </Link>
                      </>
                    ) : (
                      <>
                        {study.stats.map((stat) => (
                          <div key={stat} className="mb-4">
                            <p className={`mb-1 font-headline-md text-headline-md ${study.variant === "accent" ? "text-secondary-container" : "text-primary"}`}>
                              {stat.includes("%") ? stat.split(" ")[0] : stat.includes("0") ? "0" : stat}
                            </p>
                            <p className={`font-label-sm text-label-sm ${study.variant === "accent" ? "text-inverse-primary opacity-80" : "text-on-surface-variant"}`}>
                              {stat}
                            </p>
                          </div>
                        ))}
                        <Link href="/contact" className={`inline-flex items-center gap-2 font-label-sm text-label-sm ${study.variant === "accent" ? "text-on-primary hover:text-secondary-container" : "text-primary hover:text-secondary"}`}>
                          Read Full Study <Icon className="h-4 w-4" name="arrow_forward" />
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-outline-variant bg-surface-container px-margin-mobile py-stack-lg md:px-margin-desktop">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Ready to write your success story?</h2>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              Schedule a consultation with our enterprise architects to discuss your specific technological challenges.
            </p>
            <Link href="/contact" className="inline-block rounded bg-primary px-8 py-4 text-center font-label-sm text-label-sm font-semibold uppercase text-on-primary transition-all duration-300 hover:bg-secondary hover:shadow-lg">
              Discuss Your Project
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
