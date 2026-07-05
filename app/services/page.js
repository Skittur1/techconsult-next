import Link from "next/link";
import SiteShell from "../components/SiteShell";
import Icon from "../components/Icon";

const capabilities = [
  {
    title: "Cloud Computing",
    description:
      "Seamless migration and management of multi-cloud environments with scalable architecture.",
    bullets: ["Azure & AWS Migration", "Cloud Native Architecture"],
    icon: "cloud",
    span: "md:col-span-8",
  },
  {
    title: "Cyber Security",
    description:
      "Enterprise-grade protection against evolving threats with zero-trust architecture implementation.",
    icon: "shield_locked",
    span: "md:col-span-4",
    accent: true,
  },
  {
    title: "Managed IT",
    description:
      "24/7 proactive monitoring and helpdesk support to keep your operations running smoothly.",
    icon: "support_agent",
    span: "md:col-span-4",
  },
  {
    title: "IT Infrastructure",
    description:
      "Robust network design and hardware deployment tailored for high performance and reliability.",
    icon: "dns",
    span: "md:col-span-4",
  },
  {
    title: "Email Integration",
    description:
      "Secure, automated communication workflows and marketing integration setups.",
    icon: "mail",
    span: "md:col-span-4",
    subdued: true,
  },
];

export default function ServicesPage() {
  return (
    <SiteShell activeNav="services">
      <main className="w-full">
        <section className="relative overflow-hidden px-margin-mobile pb-32 pt-24 md:px-margin-desktop">
          <div className="absolute inset-0 -z-10 rounded-br-[120px] bg-surface-container-low md:rounded-br-[240px]" />
          <div className="mx-auto grid max-w-container-max items-center gap-stack-lg md:grid-cols-2">
            <div className="max-w-2xl">
              <span className="mb-6 inline-block rounded-full bg-secondary-fixed-dim/20 px-3 py-1 font-label-sm text-label-sm text-secondary-container">
                Expert Solutions
              </span>
              <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
                Empowering Your Digital Transformation
              </h1>
              <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
                Comprehensive IT services engineered for scalability, security, and performance. We architecturalize your future.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="rounded bg-primary px-8 py-4 text-center font-label-sm text-label-sm text-on-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)]">
                  Explore Services
                </Link>
                <Link href="/contact" className="rounded border border-outline px-8 py-4 text-center font-label-sm text-label-sm text-on-surface transition-colors duration-300 hover:border-secondary hover:text-secondary">
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-[0_4px_32px_rgba(0,101,145,0.1)] md:h-[600px]">
              <img alt="Digital transformation visualization" className="h-full w-full object-cover" src="../images/services-hero.png" />
            </div>
          </div>
        </section>

        <section className="w-full bg-background px-margin-mobile py-stack-lg md:px-margin-desktop">
          <div className="mx-auto max-w-container-max">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Core Capabilities</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Strategic interventions across the technology stack to optimize your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-12 auto-rows-[minmax(320px,auto)]">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className={`${capability.span} ${capability.accent ? "relative flex flex-col justify-between overflow-hidden rounded-lg bg-primary p-8 text-on-primary shadow-[0_8px_24px_rgba(0,0,0,0.1)] md:p-12" : capability.subdued ? "flex flex-col justify-between rounded-lg border border-surface-container bg-surface-container-low p-8 shadow-[0_8px_24px_rgba(0,101,145,0.02)]" : "flex flex-col justify-between rounded-lg border border-surface-container bg-surface-container-lowest p-8 shadow-[0_8px_24px_rgba(0,101,145,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,101,145,0.08)]"}`}
                >
                  {capability.accent ? (
                    <div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 rounded-bl-full bg-secondary/20 transition-transform duration-300 group-hover:scale-110" />
                  ) : null}
                  <div className={capability.accent ? "relative z-10" : ""}>
                    <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded ${capability.accent ? "bg-secondary" : "bg-surface-container-low"}`}>
                      <Icon className={`h-7 w-7 ${capability.accent ? "text-on-secondary" : "text-secondary"}`} name={capability.icon} />
                    </div>
                    <h3 className={`mb-4 font-headline-md text-headline-md ${capability.accent ? "" : "text-primary"}`}>{capability.title}</h3>
                    <p className={`mb-6 font-body-md text-body-md ${capability.accent ? "text-inverse-primary" : "text-on-surface-variant"}`}>{capability.description}</p>
                    {capability.bullets ? (
                      <ul className="mb-8 space-y-3">
                        {capability.bullets.map((bullet) => (
                          <li key={bullet} className={`flex items-center gap-2 font-body-md text-body-md ${capability.accent ? "text-inverse-primary" : "text-on-surface"}`}>
                            <Icon className="h-4 w-4 text-secondary" name="check_circle" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                  <Link href="/contact" className={`inline-flex items-center gap-1 font-label-sm text-label-sm ${capability.accent ? "w-full justify-center rounded bg-secondary px-6 py-3 text-on-secondary transition-colors hover:bg-secondary-container hover:text-on-secondary-container" : "text-secondary hover:opacity-80"}`}>
                    {capability.accent ? "Secure Your Assets" : "Learn More"}
                    {!capability.accent ? <Icon className="h-4 w-4" name="arrow_forward" /> : null}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
