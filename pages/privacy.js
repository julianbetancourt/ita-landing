import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Ita Services LLC</title>
      </Head>
      <div className="pt-28 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500">Last updated: February 15, 2026</p>

            <p>
              Ita Services LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website ita-services.co. This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website or use our services.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Information We Collect</h2>
            <p>
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and any other information you voluntarily provide through our contact forms.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and the date and time of your visit.</li>
              <li><strong>Cookies:</strong> We may use cookies and similar tracking technologies to enhance your experience on our website.</li>
            </ul>

            <h2 className="text-gray-800 text-xl font-semibold">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide our consulting services</li>
              <li>Improve and maintain our website</li>
              <li>Communicate with you about our services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-gray-800 text-xl font-semibold">Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting our business, provided they agree to keep your information confidential.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect some website functionality.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information that we hold. To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-1">
              <p className="font-semibold text-gray-800">Ita Services LLC</p>
              <p>30 N Gould St Ste N, Sheridan, WY 82801</p>
              <p>Email: <a href="mailto:hello@ita-services.co" className="text-indigo-600 hover:text-indigo-400 duration-150">hello@ita-services.co</a></p>
              <p>Phone: <a href="tel:+13073571071" className="text-indigo-600 hover:text-indigo-400 duration-150">(307) 357-1071</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
