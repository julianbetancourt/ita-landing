import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Ita Services LLC</title>
      </Head>
      <div className="pt-28 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Terms of Service
            </h1>
            <p className="text-sm text-gray-500">Last updated: February 15, 2026</p>

            <p>
              Welcome to ita-services.co. These Terms of Service (&quot;Terms&quot;) govern your use of the website operated by Ita Services LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a Wyoming limited liability company. By accessing or using our website, you agree to be bound by these Terms.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Services</h2>
            <p>
              Ita Services LLC provides IT consulting services including IT strategy and planning, cloud infrastructure, and cybersecurity and compliance support. The specific scope, deliverables, and terms of any consulting engagement will be defined in a separate service agreement.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Use of Website</h2>
            <p>
              You agree to use this website only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use the website to transmit any harmful or malicious content</li>
              <li>Interfere with or disrupt the website or its servers</li>
            </ul>

            <h2 className="text-gray-800 text-xl font-semibold">Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and images, is the property of Ita Services LLC and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our written permission.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Disclaimer of Warranties</h2>
            <p>
              This website and its content are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Ita Services LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Wyoming.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after any changes constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-gray-800 text-xl font-semibold">Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at:
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
