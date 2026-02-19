import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import SectionWrapper from "../components/SectionWrapper";
import NavLink from "../components/ui/NavLink";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='robots' content='index' />
      </Head>
      <Hero />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <SectionWrapper>
        <div className="custom-screen">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-3 text-gray-600">
              We build technology products that solve real business problems.
            </p>
          </div>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="border rounded-lg p-6 space-y-3">
              <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <h3 className="text-lg text-gray-800 font-semibold">Odontics</h3>
              <p className="text-gray-600">
                A communication automation platform for dental clinics. Odontics helps dental practices send appointment reminders, booking confirmations, and patient communications via WhatsApp and SMS.
              </p>
              <NavLink
                href="/odontics"
                className="inline-block font-medium text-sm text-indigo-600 hover:text-indigo-700"
              >
                Learn more &rarr;
              </NavLink>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="custom-screen">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              About Ita Services LLC
            </h2>
            <p className="mt-3 text-gray-600">
              Founded in 2023 and based in Sheridan, Wyoming, Ita Services LLC provides expert IT consulting to help businesses leverage technology for sustainable growth. We bring a personalized, results-driven approach to every engagement.
            </p>
            <NavLink
              href="/about"
              className="mt-4 inline-block font-medium text-sm text-gray-700 border hover:bg-gray-50"
            >
              Learn more about us
            </NavLink>
          </div>
        </div>
      </SectionWrapper>
      <FooterCTA />
    </>
  );
}
