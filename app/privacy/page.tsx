// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy | THIRD LINE",
  description: "Privacy policy for THIRD LINE",
};

export default function PrivacyPage() {
  return (
    <section className="!mx-auto !max-w-4xl !px-8 !py-32 !text-left">
      <h1 className="!text-4xl !font-medium !mb-2 !uppercase">Privacy Policy</h1>

      <p className="!mb-12 !text-sm !text-neutral-500">
        Last updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' }).toUpperCase()}
      </p>

      <section className="!space-y-8 !leading-relaxed">
        <p className="!text-neutral-700">
          At THIRD LINE ("THIRD LINE," "we," "us," or "our"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at thirdline.uk (the "Site"). Please read this Privacy Policy carefully. By using the Site, you consent to the practices described in this policy.
        </p>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Information We Collect</h2>
          
          <h3 className="!font-medium !mt-6 !mb-3 !uppercase !text-sm">Personal Information</h3>
          <p className="!text-neutral-700 !mb-3">
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul className="!list-none !space-y-2 !text-neutral-700 !ml-4">
            <li className="before:!content-['—'] before:!mr-3">Contact us through forms or email</li>
            <li className="before:!content-['—'] before:!mr-3">Subscribe to our newsletter or communications</li>
            <li className="before:!content-['—'] before:!mr-3">Request information about our services</li>
            <li className="before:!content-['—'] before:!mr-3">Engage with us as a client or prospective client</li>
          </ul>
          <p className="!text-neutral-700 !mt-3">
            This information may include your name, email address, phone number, company name, and any other information you choose to provide.
          </p>

          <h3 className="!font-medium !mt-6 !mb-3 !uppercase !text-sm">Browsing Data and Analytics</h3>
          <p className="!text-neutral-700 !mb-3">
            We automatically collect certain information about your device and how you interact with our Site. This browsing data is collected to support our sales and marketing initiatives and to improve our services. The information we collect includes:
          </p>
          <ul className="!list-none !space-y-2 !text-neutral-700 !ml-4">
            <li className="before:!content-['—'] before:!mr-3">IP address</li>
            <li className="before:!content-['—'] before:!mr-3">Browser type and version</li>
            <li className="before:!content-['—'] before:!mr-3">Pages visited and time spent on pages</li>
            <li className="before:!content-['—'] before:!mr-3">Referring website addresses</li>
            <li className="before:!content-['—'] before:!mr-3">Device type and operating system</li>
            <li className="before:!content-['—'] before:!mr-3">Geographic location (general)</li>
            <li className="before:!content-['—'] before:!mr-3">Clickstream data and navigation patterns</li>
          </ul>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">How We Use Your Information</h2>
          <p className="!text-neutral-700 !mb-4">We use the information we collect for the following purposes:</p>

          <h3 className="!font-medium !mt-6 !mb-3 !uppercase !text-sm">To Provide and Improve Our Services</h3>
          <ul className="!list-none !space-y-2 !text-neutral-700 !ml-4">
            <li className="before:!content-['—'] before:!mr-3">Responding to your inquiries and communicating with you</li>
            <li className="before:!content-['—'] before:!mr-3">Providing information about our services</li>
            <li className="before:!content-['—'] before:!mr-3">Processing and managing client relationships</li>
          </ul>

          <h3 className="!font-medium !mt-6 !mb-3 !uppercase !text-sm">Sales and Marketing</h3>
          <ul className="!list-none !space-y-2 !text-neutral-700 !ml-4">
            <li className="before:!content-['—'] before:!mr-3">Understanding visitor behavior and preferences</li>
            <li className="before:!content-['—'] before:!mr-3">Analyzing website traffic and usage patterns</li>
            <li className="before:!content-['—'] before:!mr-3">Improving our marketing strategies and campaigns</li>
            <li className="before:!content-['—'] before:!mr-3">Personalizing your experience on our Site</li>
            <li className="before:!content-['—'] before:!mr-3">Identifying potential business opportunities</li>
          </ul>

          <h3 className="!font-medium !mt-6 !mb-3 !uppercase !text-sm">Legal and Security</h3>
          <ul className="!list-none !space-y-2 !text-neutral-700 !ml-4">
            <li className="before:!content-['—'] before:!mr-3">Complying with legal obligations</li>
            <li className="before:!content-['—'] before:!mr-3">Protecting against fraudulent, unauthorized, or illegal activity</li>
            <li className="before:!content-['—'] before:!mr-3">Enforcing our terms and conditions</li>
          </ul>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Cookies and Tracking Technologies</h2>
          <p className="!text-neutral-700 !mb-3">
            We use cookies and similar tracking technologies to collect browsing data and enhance your experience on our Site. Cookies are small data files stored on your device that help us:
          </p>
          <ul className="!list-none !space-y-2 !text-neutral-700 !ml-4">
            <li className="before:!content-['—'] before:!mr-3">Remember your preferences</li>
            <li className="before:!content-['—'] before:!mr-3">Understand how you use our Site</li>
            <li className="before:!content-['—'] before:!mr-3">Analyze traffic patterns</li>
            <li className="before:!content-['—'] before:!mr-3">Support our marketing efforts</li>
          </ul>
          <p className="!text-neutral-700 !mt-3">
            You can control cookies through your browser settings. Please note that disabling cookies may affect the functionality of our Site.
          </p>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Third-Party Services</h2>
          <p className="!text-neutral-700 !mb-3">
            We may use third-party service providers to support our sales, marketing, and analytics efforts. These providers may have access to your information solely to perform tasks on our behalf and are obligated to protect your information. Third-party services we may use include:
          </p>
          <ul className="!list-none !space-y-2 !text-neutral-700 !ml-4">
            <li className="before:!content-['—'] before:!mr-3">Website analytics tools</li>
            <li className="before:!content-['—'] before:!mr-3">Marketing automation platforms</li>
            <li className="before:!content-['—'] before:!mr-3">Customer relationship management systems</li>
            <li className="before:!content-['—'] before:!mr-3">Email service providers</li>
          </ul>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Data Sharing and Disclosure</h2>
          <p className="!text-neutral-700 !mb-3">
            We do not sell your personal information. We may share your information in the following circumstances:
          </p>
          <ul className="!list-none !space-y-2 !text-neutral-700 !ml-4">
            <li className="before:!content-['—'] before:!mr-3"><strong className="!font-medium">Service Providers:</strong> With trusted third-party vendors who assist us in operating our Site and conducting our business</li>
            <li className="before:!content-['—'] before:!mr-3"><strong className="!font-medium">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li className="before:!content-['—'] before:!mr-3"><strong className="!font-medium">Legal Requirements:</strong> When required by law or to protect our rights, safety, or property</li>
            <li className="before:!content-['—'] before:!mr-3"><strong className="!font-medium">With Your Consent:</strong> When you have given us permission to share your information</li>
          </ul>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Data Retention</h2>
          <p className="!text-neutral-700">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Your Rights and Choices</h2>
          <p className="!text-neutral-700 !mb-3">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="!list-none !space-y-2 !text-neutral-700 !ml-4">
            <li className="before:!content-['—'] before:!mr-3">The right to access your personal information</li>
            <li className="before:!content-['—'] before:!mr-3">The right to correct inaccurate information</li>
            <li className="before:!content-['—'] before:!mr-3">The right to request deletion of your information</li>
            <li className="before:!content-['—'] before:!mr-3">The right to opt out of marketing communications</li>
            <li className="before:!content-['—'] before:!mr-3">The right to object to certain processing activities</li>
          </ul>
          <p className="!text-neutral-700 !mt-3">
            To exercise these rights, please contact us using the information provided below.
          </p>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Security</h2>
          <p className="!text-neutral-700">
            We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Children's Privacy</h2>
          <p className="!text-neutral-700">
            Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Changes to This Privacy Policy</h2>
          <p className="!text-neutral-700">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of the Site after any changes constitutes your acceptance of the updated policy.
          </p>
        </div>

        <div className="!border-t !border-neutral-200 !pt-8">
          <h2 className="!text-xl !font-medium !mb-4 !uppercase">Contact Us</h2>
          <p className="!text-neutral-700 !mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="!text-neutral-700">
            <p className="!font-medium !uppercase">THIRD LINE</p>
            <p className="!mt-2">Email: <a href="mailto:hello@thirdline.uk" className="!underline hover:!text-black !transition-colors">hello@thirdline.uk</a></p>
            <p>Website: <a href="https://thirdline.uk" className="!underline hover:!text-black !transition-colors">https://thirdline.uk</a></p>
          </div>
        </div>
      </section>
    </section>
  );
}