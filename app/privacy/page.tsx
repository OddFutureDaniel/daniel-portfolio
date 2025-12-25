// app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | THIRD LINE",
  description: "Privacy policy for THIRD LINE",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-900">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

      <p className="mb-4 text-sm text-neutral-600">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="space-y-4 text-sm leading-relaxed">
        <p>
          THIRD LINE ("we", "our", "us") respects your privacy and is committed to
          protecting your personal data. This policy explains how we collect,
          use and safeguard your information when you visit our website.
        </p>

        <h2 className="text-lg font-medium mt-6">Information we collect</h2>
        <p>
          We may collect limited personal information such as your name and email
          if you choose to contact us or book a call. We also collect anonymous
          usage data through analytics tools.
        </p>

        <h2 className="text-lg font-medium mt-6">How we use your information</h2>
        <p>
          We use your information to respond to enquiries, provide our services,
          and improve the performance and experience of our website.
        </p>

        <h2 className="text-lg font-medium mt-6">Analytics</h2>
        <p>
          We use Google Analytics to understand how visitors interact with the
          site. This may involve cookies and anonymised usage data.
        </p>

        <h2 className="text-lg font-medium mt-6">Third-party services</h2>
        <p>
          We may use third-party services such as Cal.com for booking calls.
          These services may collect data in accordance with their own privacy
          policies.
        </p>

        <h2 className="text-lg font-medium mt-6">Your rights</h2>
        <p>
          You have the right to request access to, correction of, or deletion of
          your personal data. Contact us if you wish to exercise these rights.
        </p>

        <h2 className="text-lg font-medium mt-6">Contact</h2>
        <p>
          If you have any questions about this privacy policy, you can contact us
          at: <strong>danielmatt@hotmail.co.uk</strong>
        </p>
      </section>
    </main>
  );
}