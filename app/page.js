import Link from "next/link";
import SiteShell from "./components/SiteShell";
import Icon from "./components/Icon";
import ScrollableServices from "./components/ScrollableServices";
import {siteConfig} from "./siteconfige";

const services = [
  {
    title: "Web Development",
    description: "Modern, fast, and scalable web applications using Angular, React, and Next.js with responsive UI, SEO optimization, and enterprise-grade performance.",
    icon: "/servicesicon/web.svg",
  },
  {
    title: "Mobile App Development",
    description: "Native Android & iOS applications with intuitive UI/UX, high performance, secure APIs, push notifications, and seamless cross-platform experiences.",
    icon: "/servicesicon/android.svg",
  },
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
  // {
  //   title: "Data Analytics & BI",
  //   description: "Transform raw data into actionable insights with advanced analytics, real-time dashboards, and AI-powered business intelligence solutions.",
  //   icon: "analytics",
  // },
  // {
  //   title: "DevOps & Automation",
  //   description: "Streamline your development pipeline with CI/CD automation, container orchestration, and infrastructure as code for faster, reliable deployments.",
  //   icon: "settings_applications",
  // },
  // {
  //   title: "AI & Machine Learning",
  //   description: "Leverage cutting-edge AI and ML models to automate processes, enhance decision-making, and unlock new revenue streams for your business.",
  //   icon: "psychology",
  // },
  // {
  //   title: "Network Security",
  //   description: "Comprehensive network protection including firewalls, intrusion detection, VPNs, and advanced threat prevention to safeguard your digital assets.",
  //   icon: "wifi_protected_setup",
  // },
  // {
  //   title: "Digital Transformation",
  //   description: "Strategic guidance to modernize legacy systems, adopt emerging technologies, and drive innovation across your entire organization.",
  //   icon: "transform",
  // },
  // {
  //   title: "IT Strategy Consulting",
  //   description: "Expert advisory services aligning technology investments with business goals, including roadmap planning, vendor selection, and ROI optimization.",
  //   icon: "insights",
  // },
  // {
  //   title: "Cloud Native Development",
  //   description: "Build and deploy microservices-based applications designed specifically for cloud environments with maximum scalability and resilience.",
  //   icon: "cloud_queue",
  // },
  // {
  //   title: "Compliance & Governance",
  //   description: "Ensure regulatory compliance with GDPR, HIPAA, SOC2, and industry standards through comprehensive security frameworks and auditing processes.",
  //   icon: "gavel",
  // },
];

const processIcons = {
  search: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  ),
  implementation: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <polyline points="8 9 5 12 8 15" />
      <line x1="12" y1="15" x2="16" y2="9" />
    </svg>
  ),
  optimization: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 17 9 11 13 15 21 7" />
      <polyline points="14 7 21 7 21 14" />
    </svg>
  ),
  qa: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2-3 4" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
};

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    duration: "1-2 WEEKS",
    description: "We analyze your existing ecosystem and business goals to identify critical performance gaps.",
    icon: "search",
  },
  {
    step: "02",
    title: "Strategy",
    duration: "2-3 WEEKS",
    description: "Architecting a bespoke technical roadmap centered on scalability, security, and efficiency.",
    icon: "strategy",
  },
  {
    step: "03",
    title: "Implementation",
    duration: "4-8 WEEKS",
    description: "Rigorous deployment of infrastructure with zero-downtime migration protocols.",
    icon: "implementation",
  },
  {
    step: "04",
    title: "Optimization",
    duration: "ONGOING",
    description: "Continuous monitoring and proactive refinement to ensure long-term architectural integrity.",
    icon: "optimization",
  },
  {
    step: "05",
    title: "Quality Assurance",
    duration: "2 WEEKS",
    description: "Ensuring every solution meets the highest standards of performance and security through rigorous testing.",
    icon: "qa",
  },
  {
    step: "06",
    title: "Post-Launch Support",
    duration: "24/7 SUPPORT",
    description: "Dedicated ongoing maintenance and proactive updates to ensure your technology evolves with your business.",
    icon: "support",
  },
];

const clientRatings = [
  {
    name: "Sarah Jenkins",
    title: "CTO, Global Logistics Corp",
    service: "Software Development",
    stars: 5,
    comment: "The team rebuilt our core platform from the ground up. Delivery was on time and the code quality has made our roadmap so much easier to execute.",
  },
  {
    name: "Marcus Reid",
    title: "Product Lead, Fintra App",
    service: "App Development",
    stars: 5,
    comment: "Our mobile app launch went flawlessly. They caught edge cases we hadn't even thought of and the UX just feels effortless.",
  },
  {
    name: "David Chen",
    title: "Director of IT, FinServe Network",
    service: "Cyber Security",
    stars: 5,
    comment: "Their threat monitoring gives us real peace of mind. Response times during our last incident were faster than any vendor we've used before.",
  },
  {
    name: "Priya Nair",
    title: "Marketing Manager, Bloomline Retail",
    service: "Email Marketing",
    stars: 4,
    comment: "Open rates on our campaigns nearly doubled after they restructured our lifecycle emails. Genuinely practical, data-backed recommendations.",
  },
  {
    name: "Tom Whitfield",
    title: "Head of Ops, Northbridge Freight",
    service: "Cloud Computing",
    stars: 5,
    comment: "The migration to the cloud was smoother than we expected with zero downtime. Costs dropped and performance improved immediately.",
  },
  {
    name: "Elena Vasquez",
    title: "IT Manager, Coastal Health Group",
    service: "IT Infrastructure",
    stars: 4,
    comment: "Reliable, well documented, and always available when something needs attention. Our network hasn't had a single outage since onboarding.",
  },
  {
    name: "James Okafor",
    title: "Operations Director, Rivermill Manufacturing",
    service: "Managed IT Support",
    stars: 5,
    comment: "Having 24/7 support that actually picks up and solves problems fast has been a game changer for our production floor.",
  },
  {
    name: "Hannah Brooks",
    title: "Founder, Studio Loop",
    service: "UI/UX Design",
    stars: 5,
    comment: "They took a vague idea and turned it into a product our users genuinely enjoy using. Every design decision was backed by real reasoning.",
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
            
            {/* Horizontal scrollable services */}
            <ScrollableServices services={services} />
          </div>
        </section>

        <section className="bg-background px-margin-mobile py-stack-lg md:px-margin-desktop" id="process">
          <div className="mx-auto max-w-container-max">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Our Process: How We Do It</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We follow a rigorous, data-driven methodology to ensure technical excellence and strategic alignment in every project.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-gutter gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-lowest text-secondary shadow-[0_4px_16px_rgba(2,24,41,0.08)]">
                    <span className="flex h-7 w-7">{processIcons[step.icon]}</span>
                  </div>
                  <h3 className="mb-1 font-headline-md text-headline-md text-primary">
                    {step.step}. {step.title}
                  </h3>
                  <span className="mb-3 font-label-sm text-label-sm font-semibold uppercase tracking-wide text-secondary">
                    {step.duration}
                  </span>
                  <p className="max-w-xs font-body-md text-body-md text-on-surface-variant">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-14 flex justify-center">
              <Link href="/contact" className="flex items-center gap-2 rounded bg-primary px-8 py-4 font-label-sm text-label-sm font-semibold uppercase text-on-primary shadow-md transition-all duration-300 hover:bg-surface-tint">
                Get Started
                <Icon className="h-4 w-4" name="arrow_forward" />
              </Link>
            </div>
          </div>
        </section>

      

       <section className="overflow-hidden bg-background px-margin-mobile py-stack-lg md:px-margin-desktop" id="solutions">
          <div className="mx-auto flex max-w-container-max flex-col items-center gap-12 lg:flex-row lg:gap-24">
            <div 
              className="relative w-full lg:w-1/2 transition-all duration-700"
              style={{
                animation: 'fadeInLeft 0.8s ease-out forwards',
                opacity: 0,
                transform: 'translateX(-50px)'
              }}
            >
              <div className="absolute inset-0 -z-10 scale-105 -rotate-3 rounded-2xl bg-gradient-to-tr from-surface-variant to-transparent" />
              <div className="relative aspect-video overflow-hidden rounded-2xl level-1-shadow lg:aspect-[4/3]">
                <img 
                  alt="Software development and coding visualization" 
                  className="h-full w-full object-cover" 
                  src="../images/strategy-scene.jpg" 
                />
              </div>
            </div>
            <div 
              className="flex w-full flex-col items-start space-y-6 lg:w-1/2 transition-all duration-700"
              style={{
                animation: 'fadeInRight 0.8s ease-out forwards',
                opacity: 0,
                transform: 'translateX(50px)'
              }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 font-label-sm text-label-sm text-on-secondary-container">
                <Icon className="h-4 w-4" name="code" /> Development & Engineering
              </div>
              <h2 className="font-headline-lg text-headline-lg text-primary">Custom Software <br />Development Solutions</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                We build robust, scalable, and high-performance software solutions tailored to your business needs. Our expert development team leverages modern technologies and agile methodologies to deliver enterprise-grade applications that drive innovation and growth.
              </p>
              <ul className="mt-4 w-full space-y-4">
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <Icon className="mt-1 h-5 w-5 text-secondary" name="check_circle" />
                  <div>
                    <h1 className="m-0 font-headline-mg  text-primary">Agile Development</h1>
                    <p className="font-body-md text-sm text-on-surface-variant">Iterative development with continuous delivery and rapid deployment cycles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <Icon className="mt-1 h-5 w-5 text-secondary" name="check_circle" />
                  <div>
                    <h4 className="m-0 font-headline-mg  text-primary">Modern Tech Stack</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">Building with cutting-edge frameworks, microservices, and cloud-native architectures.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-300">
                  <Icon className="mt-1 h-5 w-5 text-secondary" name="check_circle" />
                  <div>
                    <h4 className="m-0 font-headline-mg  text-primary">Full-Stack Expertise</h4>
                    <p className="font-body-md text-sm text-on-surface-variant">End-to-end development from frontend UI to backend systems and database design.</p>
                  </div>
                </li>
              </ul>
              <Link href="/development" className="mt-4 rounded border-2 border-secondary px-6 py-3 font-label-sm text-label-sm font-semibold uppercase text-secondary transition-all duration-300 hover:bg-secondary hover:text-on-secondary transform hover:scale-105">
                Explore Development Services
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-primary-container py-stack-md text-on-primary-container">
          <div className="mx-auto max-w-container-max px-margin-mobile py-12 md:px-margin-desktop">
            <div className="grid grid-cols-1 gap-12 divide-y md:grid-cols-3 md:divide-x md:divide-y-0 divide-outline/30">
              <div className="flex flex-col items-center px-4 pt-6 text-center md:pt-0 transform transition-transform duration-500 hover:scale-105">
                <span className="mb-2 font-display-lg text-white md:text-[4rem]">500+</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">Projects Completed</span>
                <p className="mt-3 max-w-xs font-body-md text-sm leading-6 opacity-80">Delivering complex enterprise architectures across global sectors.</p>
              </div>
              <div className="flex flex-col items-center px-4 pt-6 text-center md:pt-0 transform transition-transform duration-500 hover:scale-105">
                <span className="mb-2 font-display-lg text-white md:text-[4rem]">98%</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">Client Retention</span>
                <p className="mt-3 max-w-xs font-body-md text-sm leading-6 opacity-80">Building long-term partnerships through consistent reliability.</p>
              </div>
              <div className="flex flex-col items-center px-4 pt-6 text-center md:pt-0 transform transition-transform duration-500 hover:scale-105">
                <span className="mb-2 font-display-lg text-white md:text-[4rem]">24/7</span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">Expert Support</span>
                <p className="mt-3 max-w-xs font-body-md text-sm leading-6 opacity-80">Uninterrupted technical assistance whenever you need it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest px-margin-mobile py-stack-lg md:px-margin-desktop" id="client-ratings">
          <div className="mx-auto max-w-container-max">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Client Ratings</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">See how our clients rate us across every service we deliver.</p>
            </div>
            <div
              className="-mx-margin-mobile flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden px-margin-mobile pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:-mx-margin-desktop md:px-margin-desktop"
            >
              {clientRatings.map((item) => (
                <div
                  key={item.name}
                  className="group flex w-72 shrink-0 snap-start flex-col rounded-xl border border-surface-variant bg-surface-bright p-6 transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-[0_16px_32px_rgba(2,24,41,0.12)]"
                >
                  <div className="mb-3 flex items-center gap-1">
                    {Array.from({length: 5}).map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        className={`h-5 w-5 ${i < item.stars ? "fill-secondary text-secondary" : "fill-surface-container-low text-surface-container-low"}`}
                      >
                        <path d="M12 2.5 15 9l7 1-5.2 4.9L18.2 22 12 18.3 5.8 22l1.4-7.1L2 10l7-1Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 flex-grow font-body-md text-body-md text-on-surface">
                    "{item.comment}"
                  </p>
                  <div className="border-t border-surface-variant pt-4">
                    <h4 className="m-0 font-headline-md text-body-md font-semibold text-primary">{item.name}</h4>
                    <p className="m-0 font-body-md text-sm text-on-surface-variant">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-outline-variant/30 bg-surface-container-low px-margin-mobile py-stack-lg md:px-margin-desktop" id="contact">
          <div className="mx-auto max-w-4xl rounded-2xl border border-surface-variant bg-white p-12 text-center level-1-shadow md:p-16 transition-all duration-500 hover:shadow-2xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-low text-secondary animate-bounce">
              <Icon className="h-8 w-8" name="rocket_launch" />
            </div>
            <h2 className="mb-4 font-headline-lg text-headline-lg text-primary">Ready to Elevate Your Business Technology?</h2>
            <p className="mx-auto mb-8 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">Schedule a comprehensive consultation with our senior architects to discuss your current challenges and explore strategic solutions tailored to your enterprise.</p>
            <form className="mx-auto flex max-w-md flex-col gap-4">
              <div className="text-left">
                <label className="mb-1 block font-label-sm text-label-sm text-on-surface-variant" htmlFor="work-email">Work Email</label>
                <input className="w-full rounded border border-outline-variant bg-surface-bright px-4 py-3 font-body-md text-body-md outline-none transition-shadow focus:border-secondary focus:ring-2 focus:ring-secondary" id="work-email" placeholder="name@company.com" required type="email" />
              </div>
              <button className="mt-2 w-full rounded bg-secondary px-8 py-4 font-label-sm text-label-sm font-semibold uppercase text-on-secondary shadow-md transition-all duration-300 hover:bg-on-secondary-container transform hover:scale-105" type="button">
                Book a Free Consultation
              </button>
              <p className="mt-2 font-body-md text-xs text-outline">No commitment required. Secure and confidential.</p>
            </form>
          </div>
        </section>
      </main>

      {/* Global styles for animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `
      }} />
    </SiteShell>
  );
}