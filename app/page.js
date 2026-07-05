import Link from "next/link";
import SiteShell from "./components/SiteShell";
import Icon from "./components/Icon";
import {siteConfig} from "./siteconfige";

const services = [
  {
    title: "Cloud Computing",
    description: "Scalable cloud migrations, multi-cloud architecture, and optimized resource management for continuous agility.",
    icon: "cloud",
  },
  {
    title: "Cyber Security",
    description: "Proactive threat hunting, Zero Trust network implementation, and comprehensive compliance auditing.",
    icon: "security",
  },
  {
    title: "Managed IT Support",
    description: "24/7 technical assistance, proactive system monitoring, and rapid incident resolution to minimize downtime.",
    icon: "support_agent",
  },
  {
    title: "IT Infrastructure",
    description: "Robust network design, server virtualization, and disaster recovery planning for foundational stability.",
    icon: "dns",
  },
];

const testimonials = [
  {
    quote:
      '"TechConsult completely overhauled our legacy infrastructure. Their strategic approach to our cloud migration reduced our operational overhead by 40% while significantly improving system resilience."',
    name: "Sarah Jenkins",
    title: "CTO, Global Logistics Corp",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-4D9nfSBGgcIE46Zg5tVyVLlJrEDdO5MhmadWj1U-4zlcCsy2rXfGbSfgiadmVsQnvFgkuZIxlAtSFVe9K9dfl3qtgMQsaYh77TaENuk7gmT1SEhfIzUL9AmaJuKieYH5ngUNkxLmIEXdohR32ZwzkMci2pHWQz0tPCGPgmtur0Ha6Tynyz_5qXjIdp9MwdYcoWqCd83GAt-_BlYdezFqicp4yEwPBlf7NwPZDDqL1hB2ysJJpCyaEA",
  },
  {
    quote:
      '"In an era where cybersecurity is paramount, TechConsult provides us with immense peace of mind. Their proactive threat monitoring and rapid incident response are unparalleled in the industry."',
    name: "David Chen",
    title: "Director of IT, FinServe Network",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPBTCDCs_k-d8_6IbzFU0zVNsVYSvfLFRZFOTKY8EHHjU89I01fcpvs6k2k2Nh0IJ7hJNZv0NnCr5HeFrwWjhTXQ2TgKG--VlMOqhx_rsLTPv2LbWTMbl6-P1Q9xh4Z3ZX4bEd9qb5kycy1EfvxFyM45H-nyhDas1w7XuT0LV7k424jC3lvoaR6i6wVEcBbDZRqDmPOxmcJCb0xlbYryQCTeB0-5FagQGNeynh4t5ImO_clrOZl13Ulw",
  },
];

export default function Home() {
  return (
    <SiteShell activeNav="home">
      <main className="flex-grow">
        <section className="relative overflow-hidden px-margin-mobile pb-stack-lg pt-stack-lg md:px-margin-desktop md:pb-32 md:pt-32">
          <div className="absolute right-0 top-0 -z-10 h-full w-full rounded-bl-[100px] bg-surface-container-low opacity-50 md:w-1/2" />
          <div className="mx-auto flex max-w-container-max flex-col items-center gap-gutter md:flex-row">
            <div className="z-10 w-full space-y-6 md:w-1/2">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary-fixed bg-surface-variant px-3 py-1 font-label-sm text-label-sm uppercase text-on-secondary-container">
                <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
                Enterprise IT Solutions
              </span>
              <h1 className="text-[1.75rem] leading-[1.05] tracking-[-0.025em] text-primary sm:text-[2.5rem] md:text-[3.3rem] lg:text-[3.75rem]">
                Powering Your <br className="hidden md:block" />
                <span className="text-secondary">Digital Transformation</span>
              </h1>
              <p className="max-w-2xl text-[1.05rem] leading-8 text-on-surface-variant sm:text-[1.125rem] md:text-[1.1rem]">
                We deliver specialized consultancy and robust IT services to architect secure, scalable, and high-performance digital ecosystems for modern enterprises.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/services" className="flex items-center gap-2 rounded bg-primary px-8 py-4 font-label-sm text-label-sm font-semibold uppercase text-on-primary shadow-md transition-all duration-300 hover:bg-surface-tint">
                  Get Started
                  <Icon className="h-4 w-4" name="arrow_forward" />
                </Link>
                <Link href="/contact" className="rounded border border-outline px-8 py-4 font-label-sm text-label-sm font-semibold uppercase text-primary transition-all duration-300 hover:border-secondary hover:text-secondary">
                  Talk to an Expert
                </Link>
              </div>
            </div>
            <div className="relative mt-10 w-full md:mt-0 md:w-1/2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/70 shadow-[0_24px_70px_rgba(2,24,41,0.18)] md:aspect-[3/4] lg:aspect-square">
                <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-surface-variant/70 to-transparent" />
                <img alt="Digital transformation workspace" className="h-full w-full object-cover" src="../images/hero-illustration.jpg" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-lg border border-surface-variant bg-surface-container-lowest p-6 shadow-[0_10px_24px_rgba(0,30,47,0.04)] md:block">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-surface-container-low p-3 text-secondary">
                    <Icon className="h-6 w-6" filled name="verified" />
                  </div>
                  <div>
                    <p className="font-headline-md text-headline-md leading-none text-primary">99.9%</p>
                    <p className="mt-1 font-label-sm text-label-sm text-on-surface-variant">Uptime Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-outline-variant/30 bg-surface-container-lowest px-margin-mobile py-stack-lg md:px-margin-desktop">
          <div className="mx-auto max-w-container-max">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Architectural Solutions</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">We engineer resilient infrastructure and provide strategic guidance to optimize your technology investments.</p>
            </div>
            <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div key={service.title} className="level-1-shadow-hover group flex h-full flex-col justify-between rounded-xl border border-surface-variant bg-surface-bright p-8">
                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-surface-container-low text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-on-secondary">
                      <Icon className="h-7 w-7" name={service.icon} />
                    </div>
                    <h3 className="mb-3 font-headline-md text-headline-md text-primary">{service.title}</h3>
                    <p className="mb-6 flex-grow font-body-md text-body-md text-on-surface-variant">{service.description}</p>
                  </div>
                  <Link href="/contact" className="mt-auto inline-flex items-center text-secondary font-label-sm text-label-sm font-semibold">
                    Explore Service <Icon className="ml-1 h-4 w-4" name="arrow_right_alt" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

       <section className="overflow-hidden bg-background px-margin-mobile py-stack-lg md:px-margin-desktop" id="solutions">
  <div className="mx-auto flex max-w-container-max flex-col items-center gap-12 lg:flex-row lg:gap-24">
    <div className="relative w-full lg:w-1/2">
      <div className="absolute inset-0 -z-10 scale-105 -rotate-3 rounded-2xl bg-gradient-to-tr from-surface-variant to-transparent" />
      <div className="relative aspect-video overflow-hidden rounded-2xl level-1-shadow lg:aspect-[4/3]">
        <img 
          alt="Software development and coding visualization" 
          className="h-full w-full object-cover" 
          src="../images/strategy-scene.jpg" 
        />
      </div>
    </div>
    <div className="flex w-full flex-col items-start space-y-6 lg:w-1/2">
      <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-secondary-container">
        <Icon className="h-4 w-4" name="code" /> Development & Engineering
      </div>
      <h2 className="font-headline-lg text-headline-lg text-primary">Custom Software <br />Development Solutions</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
        We build robust, scalable, and high-performance software solutions tailored to your business needs. Our expert development team leverages modern technologies and agile methodologies to deliver enterprise-grade applications that drive innovation and growth.
      </p>
      <ul className="mt-4 w-full space-y-4">
        <li className="flex items-start gap-3">
          <Icon className="mt-1 h-5 w-5 text-secondary" name="check_circle" />
          <div>
            <h1 className="m-0 font-headline-mg  text-primary">Agile Development</h1>
            <p className="font-body-md text-sm text-on-surface-variant">Iterative development with continuous delivery and rapid deployment cycles.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Icon className="mt-1 h-5 w-5 text-secondary" name="check_circle" />
          <div>
            <h4 className="m-0 font-headline-mg  text-primary">Modern Tech Stack</h4>
            <p className="font-body-md text-sm text-on-surface-variant">Building with cutting-edge frameworks, microservices, and cloud-native architectures.</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Icon className="mt-1 h-5 w-5 text-secondary" name="check_circle" />
          <div>
            <h4 className="m-0 font-headline-mg  text-primary">Full-Stack Expertise</h4>
            <p className="font-body-md text-sm text-on-surface-variant">End-to-end development from frontend UI to backend systems and database design.</p>
          </div>
        </li>
      </ul>
      <Link href="/development" className="mt-4 rounded border-2 border-secondary px-6 py-3 font-label-sm text-label-sm font-semibold uppercase text-secondary transition-all duration-300 hover:bg-secondary hover:text-on-secondary">
        Explore Development Services
      </Link>
    </div>
  </div>
</section>
        <section className="bg-primary-container py-stack-md text-on-primary-container">
          <div className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop">
            <div className="grid grid-cols-1 gap-12 divide-y md:grid-cols-3 md:divide-x md:divide-y-0 divide-outline/30">
              <div className="flex flex-col items-center px-4 pt-6 text-center md:pt-0">
                <span className="mb-2 font-display-lg text-white md:text-[4rem]">500+</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">Projects Completed</span>
                <p className="mt-3 max-w-xs font-body-md text-sm leading-6 opacity-80">Delivering complex enterprise architectures across global sectors.</p>
              </div>
              <div className="flex flex-col items-center px-4 pt-6 text-center md:pt-0">
                <span className="mb-2 font-display-lg text-white md:text-[4rem]">98%</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">Client Retention</span>
                <p className="mt-3 max-w-xs font-body-md text-sm leading-6 opacity-80">Building long-term partnerships through consistent reliability.</p>
              </div>
              <div className="flex flex-col items-center px-4 pt-6 text-center md:pt-0">
                <span className="mb-2 font-display-lg text-white md:text-[4rem]">24/7</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">Expert Support</span>
                <p className="mt-3 max-w-xs font-body-md text-sm leading-6 opacity-80">Uninterrupted technical assistance whenever you need it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest px-margin-mobile py-stack-lg md:px-margin-desktop" id="case-studies">
          <div className="mx-auto max-w-container-max">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Trusted by Industry Leaders</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Hear how we've engineered success for our partners.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {testimonials.map((item) => (
                <div key={item.name} className="relative rounded-xl border border-surface-variant bg-surface-bright p-8 level-1-shadow">
                  <Icon className="absolute right-4 top-4 h-16 w-16 text-surface-dim opacity-50" name="format_quote" />
                  <p className="relative z-10 mb-8 font-body-lg text-body-lg text-on-surface">{item.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-surface-variant">
                      <img alt={item.name} className="h-full w-full object-cover" src={item.image} />
                    </div>
                    <div>
                      <h4 className="m-0 font-headline-md text-body-md font-semibold text-primary">{item.name}</h4>
                      <p className="m-0 font-body-md text-sm text-on-surface-variant">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-outline-variant/30 bg-surface-container-low px-margin-mobile py-stack-lg md:px-margin-desktop" id="contact">
          <div className="mx-auto max-w-4xl rounded-2xl border border-surface-variant bg-white p-12 text-center level-1-shadow md:p-16">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-low text-secondary">
              <Icon className="h-8 w-8" name="rocket_launch" />
            </div>
            <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Ready to Elevate Your Business Technology?</h2>
            <p className="mx-auto mb-8 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">Schedule a comprehensive consultation with our senior architects to discuss your current challenges and explore strategic solutions tailored to your enterprise.</p>
            <form className="mx-auto flex max-w-md flex-col gap-4">
              <div className="text-left">
                <label className="mb-1 block font-label-sm text-label-sm text-on-surface-variant" htmlFor="work-email">Work Email</label>
                <input className="w-full rounded border border-outline-variant bg-surface-bright px-4 py-3 font-body-md text-body-md outline-none transition-shadow focus:border-secondary focus:ring-2 focus:ring-secondary" id="work-email" placeholder="name@company.com" required type="email" />
              </div>
              <button className="mt-2 w-full rounded bg-secondary px-8 py-4 font-label-sm text-label-sm font-semibold uppercase text-on-secondary shadow-md transition-colors duration-300 hover:bg-on-secondary-container" type="button">
                Book a Free Consultation
              </button>
              <p className="mt-2 font-body-md text-xs text-outline">No commitment required. Secure and confidential.</p>
            </form>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
