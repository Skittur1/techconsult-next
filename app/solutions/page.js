import Link from "next/link";
import SiteShell from "../components/SiteShell";
import Icon from "../components/Icon";

const solutionCards = [
  {
    title: "Financial Services",
    description:
      "Modernizing core banking and enabling high-frequency trading platforms with zero-trust security architectures.",
    tags: ["Regulatory Compliance", "Fraud Detection AI", "Low-Latency Systems"],
    icon: "account_balance",
    span: "md:col-span-8",
    background: "bg-surface-container-lowest",
  },
  {
    title: "Healthcare",
    description:
      "Interoperable patient data systems compliant with HIPAA, ensuring seamless care continuity.",
    icon: "health_and_safety",
    span: "md:col-span-4",
    accent: true,
  },
  {
    title: "Retail & E-commerce",
    description:
      "Omnichannel inventory synchronization and headless commerce architectures built for peak scale.",
    tags: ["Headless CMS", "CDP Integration"],
    icon: "storefront",
    span: "md:col-span-5",
    background: "bg-surface-container-lowest",
  },
  {
    title: "Manufacturing",
    description:
      "Industrial IoT implementation and predictive maintenance analytics to optimize production line uptime.",
    icon: "factory",
    span: "md:col-span-7",
    background: "bg-surface-container-lowest",
    image: true,
  },
];

export default function SolutionsPage() {
  return (
    <SiteShell activeNav="solutions">
      <main className="mx-auto w-full max-w-container-max px-margin-mobile py-stack-lg md:px-margin-desktop">
        <section className="grid grid-cols-1 items-center gap-gutter py-stack-lg md:py-[120px] lg:grid-cols-12">
          <div className="col-span-1 space-y-stack-sm lg:col-span-6">
            <div className="mb-4 inline-block rounded-full bg-surface-container-high px-4 py-1 font-label-sm text-label-sm text-on-secondary-container">
              Industry Specific Architecture
            </div>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
              Precision Solutions for Complex Markets.
            </h1>
            <p className="max-w-xl font-body-lg text-body-lg text-on-surface-variant">
              We engineer resilient, scalable digital ecosystems tailored to the unique regulatory, operational, and competitive landscapes of your industry.
            </p>
          </div>
          <div className="col-span-1 relative h-[400px] overflow-hidden rounded-xl ambient-shadow-lvl1 lg:col-span-6 lg:h-[500px]">
            <img alt="Digital architecture visualization" className="absolute inset-0 h-full w-full object-cover" src="../images/solutions-hero.png" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
          </div>
        </section>

        <section className="space-y-stack-md py-stack-lg">
          <div className="mx-auto mb-stack-md max-w-2xl text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary">Architected for Your Domain</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Navigating strict compliance, high-velocity transactions, and intricate supply chains with purpose-built technology.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-unit auto-rows-[280px] md:grid-cols-12">
            <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-lowest p-8 ambient-shadow-lvl1 transition-transform duration-300 hover:-translate-y-1 md:col-span-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-secondary/5 blur-3xl" />
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <Icon className="h-6 w-6 text-secondary" filled name="account_balance" />
                    <h3 className="font-headline-md text-headline-md text-primary">Financial Services</h3>
                  </div>
                  <p className="max-w-md font-body-md text-body-md text-on-surface-variant">
                    Modernizing core banking and enabling high-frequency trading platforms with zero-trust security architectures.
                  </p>
                </div>
              </div>
              <div className="relative z-10 mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-secondary-container">Regulatory Compliance</span>
                <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-secondary-container">Fraud Detection AI</span>
                <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-secondary-container">Low-Latency Systems</span>
              </div>
            </div>

            <div className="relative flex flex-col justify-between overflow-hidden rounded-xl bg-secondary p-8 text-on-secondary transition-transform duration-300 hover:-translate-y-1 md:col-span-4">
              <div className="absolute bottom-0 right-0 opacity-10">
                <Icon className="h-40 w-40" filled name="monitor_heart" />
              </div>
              <div className="relative z-10">
                <div className="mb-2 flex items-center gap-3">
                  <Icon className="h-6 w-6" filled name="health_and_safety" />
                  <h3 className="font-headline-md text-headline-md">Healthcare</h3>
                </div>
                <p className="font-body-md text-body-md opacity-90">
                  Interoperable patient data systems compliant with HIPAA, ensuring seamless care continuity.
                </p>
              </div>
              <Link href="/case-studies" className="relative z-10 mt-4 w-fit rounded bg-on-secondary px-4 py-2 text-center font-label-sm text-label-sm text-secondary transition-colors hover:bg-surface-container">
                View Case Study
              </Link>
            </div>

            <div className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8 ambient-shadow-lvl1 md:col-span-5">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-secondary" filled name="storefront" />
                  <h3 className="font-headline-md text-headline-md text-primary">Retail &amp; E-commerce</h3>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Omnichannel inventory synchronization and headless commerce architectures built for peak scale.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-secondary-container">Headless CMS</span>
                <span className="rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-secondary-container">CDP Integration</span>
              </div>
            </div>

            <div className="relative flex overflow-hidden rounded-xl bg-surface-container-lowest p-0 ambient-shadow-lvl1 md:col-span-7">
              <div className="z-10 flex w-full flex-col justify-center bg-surface-container-lowest/90 p-8 backdrop-blur-sm md:w-1/2">
                <div className="mb-2 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-secondary" filled name="factory" />
                  <h3 className="font-headline-md text-headline-md text-primary">Manufacturing</h3>
                </div>
                <p className="mb-4 font-body-md text-body-md text-on-surface-variant">
                  Industrial IoT implementation and predictive maintenance analytics to optimize production line uptime.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary transition-colors hover:text-primary">
                  Explore IoT Capabilities <Icon className="h-4 w-4" name="arrow_forward" />
                </Link>
              </div>
              <div className="absolute inset-0 h-full w-full">
                <img alt="Manufacturing environment" className="h-full w-full object-cover object-right" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOf3NdFUKib0eGCPqVIwl8q5qVqtoaFJAFMm30SYTGHlolL1fw15m6251Qlvh2MLXKEBlq0NfayLWDq2XSEnIsrjbfhb4mYz1xvvBiD87F2bgeoCSgwoJaIVCRx7Na_voLequKRV1EM9fIS-NllkEeB6Zl66s6IxXb0v3uISbgKFSV80c-Q_oN6F6U_BsfDc5RjNp4vBFKcDshRhBOBSGT2yOD17oB7bL8P4KjMcEWZkMWg3NKVZ5AhQ" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
