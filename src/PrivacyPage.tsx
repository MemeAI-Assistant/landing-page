import React from "react";

const PrivacyPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-3 text-4xl font-bold tracking-tight">
          Meme-Finder Privacy Policy (KVKK)
        </h1>
        <p className="text-sm text-zinc-600">App name: MemeFinder</p>
        <p className="text-sm text-zinc-600">Effective date: 21 March 2026</p>
        <p className="mb-8 text-sm text-zinc-600">Last updated: 21 March 2026</p>

        <div className="space-y-8 text-base leading-7 text-zinc-700">
          <p>
            This Privacy Policy explains how MemeFinder ("we", "us", "our")
            collects, uses, stores, and shares personal data when you use the
            MemeFinder mobile application and its optional MemeFinder Keyboard
            service (together, the "Service").
          </p>
          <p>
            This notice is prepared in line with Turkey&apos;s Law No. 6698 on the
            Protection of Personal Data ("KVKK").
          </p>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              1) Data Controller (Veri Sorumlusu)
            </h2>
            <p>Data Controller: MemeFinder (startup)</p>
            <p>Email: memefinderapp@gmail.com</p>
            <p>
              Address: We currently do not have a fixed office address. We will
              update this policy when an address is established.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              2) Personal Data We Collect
            </h2>

            <h3 className="mt-4 mb-2 text-lg font-semibold text-zinc-900">
              A) Account and Profile Information
            </h3>
            <p>When you create and manage an account, we may collect:</p>
            <ul className="list-disc pl-6">
              <li>
                Required: username and/or email address, password (stored
                securely, not in plain text), account ID
              </li>
              <li>
                Optional (if you provide it): display name, profile
                picture/avatar, other profile fields available in "Edit
                Profile"
              </li>
            </ul>
            <p className="mt-2">
              We process this data for account creation, login, account
              security, and profile management (including "Change Password" and
              "Edit Profile").
            </p>

            <h3 className="mt-4 mb-2 text-lg font-semibold text-zinc-900">
              B) User-Imported Content (Images and ZIP Files)
            </h3>
            <p>If you choose to import content into MemeFinder, we process:</p>
            <ul className="list-disc pl-6">
              <li>Images you select (memes/pictures)</li>
              <li>ZIP files you select (e.g., meme packs)</li>
            </ul>
            <p className="mt-2 font-medium text-zinc-900">
              How imported files are handled
            </p>
            <ul className="list-disc pl-6">
              <li>
                Imported files are processed and stored locally on your device
                to let you organize and use them in the app and keyboard.
              </li>
              <li>
                We do not upload imported images or ZIP files to our servers
                (no sync, backup, or server-side storage of your imported
                content).
              </li>
            </ul>
            <p className="mt-2">
              We do not access your files unless you actively select them for
              import and grant the required permission.
            </p>

            <h3 className="mt-4 mb-2 text-lg font-semibold text-zinc-900">
              C) MemeFinder Keyboard (Highly Sensitive)
            </h3>
            <p>
              If you enable the MemeFinder Keyboard on Android, the keyboard
              service can technically receive what you type while it is active
              (this is how Android keyboards work).
            </p>
            <p className="mt-2 font-medium text-zinc-900">Our commitment</p>
            <ul className="list-disc pl-6">
              <li>
                We do not continuously log, store, or transmit everything you
                type while the MemeFinder Keyboard is active.
              </li>
              <li>
                The keyboard is designed only to help you search for and insert
                memes/stickers.
              </li>
            </ul>
            <p className="mt-2 font-medium text-zinc-900">
              What the keyboard may access and transmit (only when you trigger
              it)
            </p>
            <ul className="list-disc pl-6">
              <li>
                When you tap the MemeFinder icon to open search, MemeFinder may
                read the text currently in the input field and use it as a
                search query to show relevant meme results.
              </li>
              <li>
                If you use Global Search, this query text is sent to our server
                to return search results.
              </li>
              <li>
                If you use Local Search, the query is processed on your device.
              </li>
            </ul>
            <p className="mt-2 font-medium text-zinc-900">What we do not do</p>
            <ul className="list-disc pl-6">
              <li>
                We do not collect or transmit your typing in the background.
              </li>
              <li>
                We do not store your messages as "message content" in
                MemeFinder.
              </li>
            </ul>

            <h3 className="mt-4 mb-2 text-lg font-semibold text-zinc-900">
              D) Network Communication and Server Data
            </h3>
            <p>
              MemeFinder connects to servers for functions such as
              authentication and basic service operations (e.g., server status
              checks and online search).
            </p>
            <p className="mt-2">When you use these features, we may process:</p>
            <ul className="list-disc pl-6">
              <li>Account identifiers (user ID, session token)</li>
              <li>
                Requests you make (e.g., login requests, server status requests)
              </li>
              <li>
                Search queries you submit, including text used for Global Search
                (from within the app or triggered via the keyboard)
              </li>
              <li>
                Basic technical logs (timestamps, request status codes, error
                codes)
              </li>
              <li>IP address (as part of normal internet communication)</li>
            </ul>

            <h3 className="mt-4 mb-2 text-lg font-semibold text-zinc-900">
              E) Analytics / Crash Reporting
            </h3>
            <p>
              We use Firebase Analytics and Firebase Crashlytics to understand
              feature usage, measure app stability, and investigate
              crashes/non-fatal errors. This data may include device/app
              metadata, screen interactions, feature events, and crash
              diagnostics.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              3) Why We Process Your Data (Purposes)
            </h2>
            <p>We process personal data to:</p>
            <ul className="list-disc pl-6">
              <li>Create and manage accounts and authentication</li>
              <li>
                Provide core app features (import, organize, search, and use
                memes)
              </li>
              <li>Provide keyboard functionality (search and insert memes)</li>
              <li>
                Operate server features (login, status checks, online search)
              </li>
              <li>
                Maintain security, prevent abuse, and troubleshoot issues
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              4) Legal Grounds Under KVKK
            </h2>
            <p>
              We process personal data based on one or more KVKK legal grounds,
              including:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Necessity for the establishment or performance of a contract
                (KVKK Art. 5/2(c)) - to provide the Service you request.
              </li>
              <li>
                Legitimate interests (KVKK Art. 5/2(f)) - security, service
                reliability, and troubleshooting (without harming your
                fundamental rights).
              </li>
              <li>
                Compliance with legal obligations (KVKK Art. 5/2(ç)) - where
                applicable.
              </li>
              <li>
                Explicit consent (KVKK Art. 5/1 and Art. 9) - where required,
                especially for transfers abroad.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              5) Data Retention (How Long We Keep Data)
            </h2>
            <p>
              We retain personal data according to the following approach (a
              commonly used, KVKK-defensible structure for mobile/social
              applications):
            </p>
            <ul className="list-disc pl-6">
              <li>
                Account and profile data: kept while your account is active, and
                for up to 1 year after you delete your account, unless a longer
                period is required by law or necessary to resolve disputes,
                enforce agreements, or meet security requirements.
              </li>
              <li>
                Server logs (including security and access logs): kept for up to
                1 year for security, fraud prevention, and troubleshooting, then
                deleted or anonymized.
              </li>
              <li>
                Imported images/ZIP files: stored only on your device. They are
                deleted when you delete them from your device or uninstall the
                app (subject to your device and backup settings).
              </li>
            </ul>
            <p className="mt-2">
              At the end of the retention period, data is deleted, destroyed, or
              anonymized in accordance with KVKK.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              6) Third Parties, Service Providers, and Data Sharing
            </h2>
            <p>We do not sell your personal data.</p>
            <p className="mt-2">
              We may use the following service providers to operate the Service:
            </p>
            <h3 className="mt-4 mb-2 text-lg font-semibold text-zinc-900">
              A) Amazon Web Services (AWS) - EU Region
            </h3>
            <p>
              Used for server infrastructure and hosting. Data processed can
              include account-related identifiers, search queries used for
              Global Search, and technical logs needed to provide the Service.
            </p>
            <h3 className="mt-4 mb-2 text-lg font-semibold text-zinc-900">
              B) Google Firebase
            </h3>
            <p>
              Used for app infrastructure functions such as authentication,
              database services, analytics, and crash reporting, depending on
              what is enabled.
            </p>
            <p className="mt-2">
              We share only the minimum data necessary for these providers to
              deliver their services.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              7) International Data Transfers (Outside Turkiye)
            </h2>
            <p>
              Our server region is the EU. This means your personal data may be
              transferred and processed outside Turkiye.
            </p>
            <p className="mt-2">
              Where required under KVKK, such transfers are carried out:
            </p>
            <ul className="list-disc pl-6">
              <li>with your explicit consent, or</li>
              <li>
                using other lawful mechanisms permitted by KVKK and applicable
                guidance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              8) Security Measures
            </h2>
            <p>
              We apply reasonable technical and organizational safeguards, such
              as:
            </p>
            <ul className="list-disc pl-6">
              <li>Encryption in transit (HTTPS) for server communication</li>
              <li>
                Secure handling of authentication data (passwords are not stored
                in plain text)
              </li>
              <li>Access controls and least-privilege principles</li>
            </ul>
            <p className="mt-2">
              No method of storage or transmission is completely secure, but we
              work to protect your data.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              9) Your Rights Under KVKK (Article 11)
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Learn whether your personal data is processed</li>
              <li>Request information about processing</li>
              <li>
                Learn the purpose of processing and whether it is used
                accordingly
              </li>
              <li>
                Know third parties to whom data is transferred
                (domestic/abroad)
              </li>
              <li>Request correction of incomplete/incorrect data</li>
              <li>Request deletion or destruction under KVKK conditions</li>
              <li>
                Request notification of correction/deletion to third parties
                (where applicable)
              </li>
              <li>
                Object to results against you arising from automated processing
              </li>
              <li>
                Claim compensation if you suffer damages due to unlawful
                processing
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              10) How to Exercise Your Rights
            </h2>
            <p>
              To submit a KVKK request, email us at memefinderapp@gmail.com.
            </p>
            <p className="mt-2">
              Recommended subject line: "KVKK Request - MemeFinder"
            </p>
            <p className="mt-2">
              We may ask for reasonable verification to protect your data and
              account.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              11) Children&apos;s Privacy
            </h2>
            <p>
              MemeFinder is not intended for children under 13. If you believe
              a child provided personal data, contact us and we will take steps
              to remove it.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              12) Permissions (Android)
            </h2>
            <p>Depending on your usage, the app may request:</p>
            <ul className="list-disc pl-6">
              <li>
                Photos/Media/Files access - to import images/ZIP files you
                select
              </li>
              <li>
                Network access - to connect to servers for account features and
                online functions
              </li>
              <li>
                Keyboard enablement - only if you choose to enable the
                MemeFinder Keyboard
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              13) Changes to This Policy
            </h2>
            <p>
              We may update this policy from time to time. We will post updates
              in the app and change the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-zinc-900">
              14) Contact
            </h2>
            <p>For privacy questions or KVKK requests:</p>
            <p>Email: memefinderapp@gmail.com</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPage;
