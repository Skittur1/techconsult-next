import Link from "next/link";
import SiteShell from "../components/SiteShell";
import Icon from "../components/Icon";
import { siteConfig } from "../siteconfige";

export default function PrivacyPolicyPage() {
  return (
    <SiteShell activeNav="privacy">
      <main className="w-full max-w-container-max mx-auto px-margin-mobile py-stack-lg md:px-margin-desktop">
        <header className="mb-stack-lg border-b border-outline-variant pb-stack-sm">
          <div className="mb-unit">
            <Link className="inline-flex items-center text-secondary transition-colors duration-200 hover:text-primary" href="/">
              <Icon className="mr-2 h-4 w-4" name="arrow_back" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Back to Home</span>
            </Link>
          </div>
          <h1 className="mb-unit font-display-lg-mobile text-display-lg-mobile text-primary md:font-display-lg md:text-display-lg">Privacy Policy</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Last Updated: October 24, 2024</p>
        </header>
       <article className="mx-auto max-w-3xl">
  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">1. Introduction</h2>
    <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
      Welcome to {siteConfig.company.name}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
    </p>
    <p className="mt-4 font-body-lg text-body-lg leading-relaxed text-on-surface">
      This privacy policy applies to all personal information collected through our website, services, and any related applications. By using our Services, you agree to the collection and use of information in accordance with this policy.
    </p>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">2. The Data We Collect About You</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      Personal data means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
    </p>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
    </p>
    <ul className="mb-unit list-disc space-y-2 pl-gutter font-body-lg text-body-lg text-on-surface">
      <li><strong>Identity Data</strong> includes first name, last name, username, job title, company name, and similar identifiers.</li>
      <li><strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone numbers.</li>
      <li><strong>Technical Data</strong> includes IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.</li>
      <li><strong>Profile Data</strong> includes your username and password, your interests, preferences, feedback, and survey responses.</li>
      <li><strong>Usage Data</strong> includes information about how you use our website, products, and services.</li>
      <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
    </ul>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">3. How We Collect Your Data</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      We use different methods to collect data from and about you including through:
    </p>
    <ul className="mb-unit list-disc space-y-2 pl-gutter font-body-lg text-body-lg text-on-surface">
      <li><strong>Direct interactions.</strong> You may give us your Identity, Contact, and Profile Data by filling in forms or by corresponding with us by post, phone, email, or otherwise.</li>
      <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we may automatically collect Technical Data about your equipment, browsing actions, and patterns.</li>
      <li><strong>Third parties or publicly available sources.</strong> We may receive personal data about you from various third parties and public sources.</li>
      <li><strong>Cookies and similar technologies.</strong> We use cookies to collect information about your browsing activities and to personalize your experience.</li>
    </ul>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">4. How We Use Your Data</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
    </p>
    <ul className="mb-unit list-disc space-y-2 pl-gutter font-body-lg text-body-lg text-on-surface">
      <li>To register you as a new customer or client.</li>
      <li>To process and deliver our services to you.</li>
      <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
      <li>To administer and protect our business and our website.</li>
      <li>To deliver relevant website content and advertisements to you.</li>
      <li>To use data analytics to improve our website, products/services, marketing, and customer relationships.</li>
      <li>To make suggestions and recommendations to you about goods or services that may be of interest to you.</li>
    </ul>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">5. Data Security</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
    </p>
    <ul className="mb-unit list-disc space-y-2 pl-gutter font-body-lg text-body-lg text-on-surface">
      <li>All data is encrypted during transmission using SSL/TLS protocols.</li>
      <li>Access to personal data is restricted on a need-to-know basis.</li>
      <li>Regular security audits and vulnerability assessments are conducted.</li>
      <li>We have procedures in place to deal with any suspected personal data breach.</li>
    </ul>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">6. Data Retention</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.
    </p>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">7. Your Legal Rights</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      Under certain circumstances, you have rights under data protection laws in relation to your personal data:
    </p>
    <ul className="mb-unit list-disc space-y-2 pl-gutter font-body-lg text-body-lg text-on-surface">
      <li><strong>Right to access</strong> - You have the right to request copies of your personal data.</li>
      <li><strong>Right to rectification</strong> - You have the right to request that we correct any information you believe is inaccurate.</li>
      <li><strong>Right to erasure</strong> - You have the right to request that we erase your personal data, under certain conditions.</li>
      <li><strong>Right to restrict processing</strong> - You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
      <li><strong>Right to object to processing</strong> - You have the right to object to our processing of your personal data, under certain conditions.</li>
      <li><strong>Right to data portability</strong> - You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
      <li><strong>Right to withdraw consent</strong> - You have the right to withdraw your consent at any time where we rely on consent to process your personal data.</li>
    </ul>
    <p className="mt-4 font-body-lg text-body-lg leading-relaxed text-on-surface">
      If you wish to exercise any of these rights, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-secondary transition-colors duration-200 hover:underline">{siteConfig.contact.email}</a>.
    </p>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">8. Cookies</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
    </p>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
    </p>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      We use the following types of cookies:
    </p>
    <ul className="mb-unit list-disc space-y-2 pl-gutter font-body-lg text-body-lg text-on-surface">
      <li><strong>Essential cookies</strong> - These are required for the operation of our website.</li>
      <li><strong>Analytical cookies</strong> - These allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
      <li><strong>Functionality cookies</strong> - These are used to recognize you when you return to our website.</li>
      <li><strong>Targeting cookies</strong> - These record your visit to our website, the pages you have visited, and the links you have followed.</li>
    </ul>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">9. Third-Party Links</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
    </p>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">10. Children's Privacy</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
    </p>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">11. International Data Transfers</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      The data that we collect from you may be transferred to, and stored at, a destination outside your country of residence. It may also be processed by staff operating outside your country who work for us or for one of our suppliers. By submitting your personal data, you agree to this transfer, storing, or processing.
    </p>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.
    </p>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">12. Changes to This Privacy Policy</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the bottom of this policy.
    </p>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
    </p>
  </section>

  <section className="mb-stack-md">
    <h2 className="mb-stack-sm font-headline-md text-headline-md text-primary">13. Contact Us</h2>
    <p className="mb-unit font-body-lg text-body-lg leading-relaxed text-on-surface">
      If you have any questions about this privacy policy, our practices, or your dealings with our website, please contact us:
    </p>
    <div className="mt-4 rounded-lg border border-surface-variant bg-surface-container-low p-6">
      <p className="font-body-lg text-body-lg leading-relaxed text-on-surface">
        <strong>{siteConfig.company.name}</strong><br />
        {siteConfig.contact.address.full}<br />
        <br />
        <strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`} className="text-secondary transition-colors duration-200 hover:underline">{siteConfig.contact.email}</a><br />
        <strong>Phone:</strong> <a href={`tel:${siteConfig.contact.phoneFormatted}`} className="text-secondary transition-colors duration-200 hover:underline">{siteConfig.contact.phone}</a>
      </p>
    </div>
  </section>

  <div className="mt-8 border-t border-outline-variant pt-8">
    <p className="text-sm text-on-surface-variant">
      <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}<br />
      <strong>Effective Date:</strong> January 1, {siteConfig.company.founded}
    </p>
  </div>
</article>
      </main>
    </SiteShell>
  );
}
