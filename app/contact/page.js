import SiteShell from "../components/SiteShell";
import Icon from "../components/Icon";
import { siteConfig } from "../siteconfige";

export default function ContactPage() {
  return (
    <SiteShell activeNav="contact">
      <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile py-stack-lg md:px-margin-desktop">
        <section className="mb-stack-lg text-center md:text-left">
          <h1 className="mb-stack-sm font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">
            Get in Touch
          </h1>
          <p className="max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
            Ready to accelerate your digital transformation? Our team of senior consultants is available to discuss your specific technical challenges and craft a tailored solution architecture.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="flex flex-col gap-gutter lg:col-span-5">
            <div className="flex h-full flex-col justify-center rounded-xl border border-[#F1F5F9] bg-surface-container-lowest p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="mb-stack-md">
                <h2 className="mb-2 font-headline-md text-headline-md text-primary">Headquarters</h2>
                <div className="flex items-start gap-unit text-on-surface-variant">
                  <Icon className="mt-1 h-5 w-5 text-secondary" name="location_on" />
                  <p className="font-body-md text-body-md">{siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}</p>
                </div>
              </div>
              <div className="mb-stack-md">
                <h2 className="mb-2 font-headline-md text-headline-md text-primary">Direct Inquiry</h2>
                <div className="flex items-center gap-unit text-on-surface-variant">
                  <Icon className="h-5 w-5 text-secondary" name="mail" />
                  <a className="font-body-md text-body-md transition-colors hover:text-secondary" href="mailto:contact@techconsult.inc">
                            {siteConfig.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-xl border border-[#F1F5F9] bg-surface-container-lowest shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <img alt="San Francisco tech district" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRCBNFRWv562wRWB8mAQXDSJtGQK4fQ7aMULujpE5TbMu87SwqMRVOsaAz2a7HNZnFo_Ed5W3_HVTCumdCbZPRwkOcBVJpASnVqQnuYxQTQX6MF_59qOcPXttXTXVeW0vZdGUbfpHANjHJ3s9P_M9VFjDmR2Lm_AclTzM9FVLpHeyVARahsgDKEDqOwvYkr-1mmn6lYFLL8gIMS2lQ9QLzIi4pKBppqUl0bQmFDhCmCoZIsSMh2uB6jQ" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 to-transparent p-4">
                <span className="rounded bg-secondary px-3 py-1 font-label-sm text-label-sm text-white backdrop-blur-sm">View on Map</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#F1F5F9] bg-surface-container-lowest p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] lg:col-span-7">
            <h2 className="mb-stack-md font-headline-lg text-headline-lg text-primary">Send a Message</h2>
            <form className="flex flex-col gap-stack-sm">
              <div className="grid grid-cols-1 gap-gutter md:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="firstName">First Name</label>
                  <input className="rounded border border-outline-variant bg-surface-bright px-4 py-3 font-body-md text-on-surface outline-none transition-all focus:border-2 focus:border-secondary" id="firstName" placeholder="Jane" type="text" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="lastName">Last Name</label>
                  <input className="rounded border border-outline-variant bg-surface-bright px-4 py-3 font-body-md text-on-surface outline-none transition-all focus:border-2 focus:border-secondary" id="lastName" placeholder="Doe" type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="email">Corporate Email</label>
                <input className="rounded border border-outline-variant bg-surface-bright px-4 py-3 font-body-md text-on-surface outline-none transition-all focus:border-2 focus:border-secondary" id="email" placeholder="jane.doe@company.com" type="email" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="topic">Inquiry Topic</label>
                <select className="appearance-none rounded border border-outline-variant bg-surface-bright px-4 py-3 font-body-md text-on-surface outline-none transition-all focus:border-2 focus:border-secondary" id="topic">
                  <option>Cloud Migration &amp; Architecture</option>
                  <option>Cybersecurity Audit</option>
                  <option>AI &amp; Data Analytics Solutions</option>
                  <option>General Consulting</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="message">Message</label>
                <textarea className="resize-none rounded border border-outline-variant bg-surface-bright px-4 py-3 font-body-md text-on-surface outline-none transition-all focus:border-2 focus:border-secondary" id="message" placeholder="Briefly describe your project requirements..." rows="5" />
              </div>
              <div className="mt-4 flex items-center justify-end">
                <button className="flex items-center gap-2 rounded bg-primary px-8 py-4 font-label-sm text-label-sm text-on-primary transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]" type="submit">
                  Submit Inquiry
                  <Icon className="h-4 w-4" name="arrow_forward" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
