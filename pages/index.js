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
