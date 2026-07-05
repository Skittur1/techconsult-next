import Link from "next/link";
import SiteShell from "../components/SiteShell";
import { siteConfig } from "../siteconfige";

export default function TermsOfServicePage() {
  return (
    <SiteShell activeNav="terms">
      <main className="mx-auto flex w-full max-w-container-max flex-col gap-gutter px-margin-mobile py-stack-lg md:flex-row md:px-margin-desktop">
        <aside className="hidden w-1/4 flex-shrink-0 md:block">
          <div className="sticky top-32 rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm">
            <h3 className="mb-4 font-label-sm text-label-sm uppercase text-on-surface-variant">Contents</h3>
            <nav className="flex flex-col gap-3">
              <a className="font-body-md text-body-md text-secondary transition-colors duration-200 hover:text-primary" href="#acceptance">1. Acceptance of Terms</a>
              <a className="font-body-md text-body-md text-on-surface-variant transition-colors duration-200 hover:text-secondary" href="#services">2. Description of Services</a>
              <a className="font-body-md text-body-md text-on-surface-variant transition-colors duration-200 hover:text-secondary" href="#user-obligations">3. User Obligations</a>
            </nav>
          </div>
        </aside>

        <article className="w-full max-w-3xl rounded-xl border border-outline-variant bg-surface-container-lowest p-6 shadow-sm md:w-3/4 md:p-12">
          <div className="mb-stack-md border-b border-outline-variant pb-6">
            <h1 className="mb-2 font-headline-lg text-headline-lg text-primary">Terms of Service</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Last Updated: October 24, 2024</p>
          </div>
         <div className="flex flex-col gap-6">
  <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
    Welcome to {siteConfig.company.name}. These Terms of Service govern your access to and use of {siteConfig.company.name}'s website, services, and applications. Please read these Terms carefully before using our Services.
  </p>
  
  <section className="scroll-mt-32" id="acceptance">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">1. Acceptance of Terms</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, you may not access or use the Services. These Terms apply to all visitors, users, and others who access or use the Services.
    </p>
  </section>
  
  <section className="scroll-mt-32" id="services">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">2. Description of Services</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      {siteConfig.company.name} provides professional IT consulting, digital transformation strategy, software architecture planning, cloud solutions, cybersecurity advisory, and related technical advisory services. Our Services are designed to help businesses architect secure, scalable, and high-performance digital ecosystems.
    </p>
  </section>
  
  <section className="scroll-mt-32" id="user-obligations">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">3. User Obligations</h2>
    <ul className="mb-4 list-disc space-y-2 pl-6 font-body-md text-body-md text-on-surface">
      <li>Provide accurate and complete information when engaging our consulting services.</li>
      <li>Maintain the confidentiality of any proprietary methodologies, strategies, and materials shared with you.</li>
      <li>Comply with all applicable laws, regulations, and industry standards.</li>
      <li>Use our Services only for legitimate business purposes and in accordance with these Terms.</li>
      <li>Notify us immediately of any unauthorized use of your account or any other breach of security.</li>
    </ul>
  </section>

  <section className="scroll-mt-32" id="intellectual-property">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">4. Intellectual Property Rights</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      All content, materials, methodologies, frameworks, and deliverables provided by {siteConfig.company.name} are protected by intellectual property laws. You agree not to reproduce, distribute, modify, or create derivative works of any materials provided without our prior written consent. All rights not expressly granted herein are reserved by {siteConfig.company.name}.
    </p>
  </section>

  <section className="scroll-mt-32" id="confidentiality">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">5. Confidentiality</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      Both parties agree to maintain the confidentiality of all proprietary information, trade secrets, and business strategies disclosed during the course of engagement. This obligation shall survive the termination of these Terms and continue for a period of five (5) years.
    </p>
    <ul className="mb-4 mt-2 list-disc space-y-2 pl-6 font-body-md text-body-md text-on-surface">
      <li>Confidential information shall not be disclosed to third parties without prior written consent.</li>
      <li>Confidential information shall be used solely for the purpose of performing services under these Terms.</li>
      <li>Exceptions apply for information that is publicly available or independently developed without use of confidential information.</li>
    </ul>
  </section>

  <section className="scroll-mt-32" id="payment">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">6. Fees and Payment Terms</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      Fees for our services shall be as agreed upon in the applicable Statement of Work or engagement letter. Payment terms are net 30 days from the date of invoice unless otherwise specified. Late payments may be subject to interest charges at the rate of 1.5% per month or the maximum rate permitted by applicable law.
    </p>
  </section>

  <section className="scroll-mt-32" id="limitation">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">7. Limitation of Liability</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      To the maximum extent permitted by law, {siteConfig.company.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to the use of our Services. Our total liability shall not exceed the total fees paid by you for the services giving rise to the claim.
    </p>
  </section>

  <section className="scroll-mt-32" id="warranty">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">8. Disclaimer of Warranties</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied. {siteConfig.company.name} does not warrant that the Services will be uninterrupted, error-free, or completely secure. We make no representations about the suitability, reliability, or accuracy of the information contained in our deliverables.
    </p>
  </section>

  <section className="scroll-mt-32" id="indemnification">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">9. Indemnification</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      You agree to indemnify, defend, and hold harmless {siteConfig.company.name}, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our Services, violation of these Terms, or infringement of any third-party rights.
    </p>
  </section>

  <section className="scroll-mt-32" id="termination">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">10. Termination</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      Either party may terminate these Terms with written notice. Upon termination, you must cease all use of our Services and return or destroy any confidential information provided. Termination does not relieve either party of obligations incurred prior to termination.
    </p>
  </section>

  <section className="scroll-mt-32" id="governing-law">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">11. Governing Law and Jurisdiction</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      These Terms shall be governed by and construed in accordance with the laws of {siteConfig.contact.address.country}. Any legal disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in {siteConfig.contact.address.city}, {siteConfig.contact.address.state}.
    </p>
  </section>

  <section className="scroll-mt-32" id="contact">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">12. Contact Information</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      For questions, concerns, or inquiries regarding these Terms, please contact us at:
    </p>
    <div className="mt-4 rounded-lg border border-surface-variant bg-surface-container-low p-6">
      <p className="font-body-md text-body-md leading-relaxed text-on-surface">
        <strong>{siteConfig.company.name}</strong><br />
        {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}<br />
        {siteConfig.contact.address.country}<br />
        <br />
        <strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-secondary transition-colors duration-200 hover:underline">{siteConfig.contact.email}</a><br />
        <strong>Phone:</strong> <a href={`tel:${siteConfig.contact.phone}`} className="text-secondary transition-colors duration-200 hover:underline">{siteConfig.contact.phone}</a>
      </p>
    </div>
  </section>

  <section className="scroll-mt-32" id="changes">
    <h2 className="mb-4 mt-8 font-headline-md text-headline-md text-primary">13. Changes to Terms</h2>
    <p className="font-body-md text-body-md leading-relaxed text-on-surface">
      {siteConfig.company.name} reserves the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on our website. Your continued use of our Services after such changes constitutes your acceptance of the updated Terms.
    </p>
  </section>

  <div className="mt-8 border-t border-outline-variant pt-8">
    <p className="text-sm text-on-surface-variant">
      <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
      <strong>Effective Date:</strong> January 1, {siteConfig.company.founded}
    </p>
  </div>
</div>
        </article>
      </main>
    </SiteShell>
  );
}
