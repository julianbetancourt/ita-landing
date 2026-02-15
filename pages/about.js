import Head from "next/head";
import NavLink from "../components/ui/NavLink";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Ita Services LLC</title>
      </Head>
      <div className="pt-28 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              About Ita Services LLC
            </h1>
            <div className="mt-6 space-y-6">
              <p>
                Ita Services LLC is an IT consulting firm founded in 2023 and headquartered in Sheridan, Wyoming. We specialize in helping businesses align their technology with their strategic goals, delivering practical solutions that drive measurable results.
              </p>
              <h2 className="text-gray-800 text-2xl font-semibold">Our Mission</h2>
              <p>
                Our mission is to empower businesses with the technology strategies and infrastructure they need to thrive. We believe that every organization deserves access to expert IT guidance, regardless of size. By combining deep technical expertise with a clear understanding of business objectives, we help our clients make confident technology decisions.
              </p>
              <h2 className="text-gray-800 text-2xl font-semibold">What We Do</h2>
              <p>
                We provide comprehensive IT consulting services including technology strategy and planning, cloud infrastructure and migration, and cybersecurity and compliance support. Our approach is collaborative — we work closely with your team to understand your challenges, develop tailored solutions, and support implementation.
              </p>
              <h2 className="text-gray-800 text-2xl font-semibold">Contact Us</h2>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">Ita Services LLC</p>
                <p>30 N Gould St Ste N</p>
                <p>Sheridan, WY 82801</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+13073571071" className="text-indigo-600 hover:text-indigo-400 duration-150">
                    (307) 357-1071
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:hello@ita-services.co" className="text-indigo-600 hover:text-indigo-400 duration-150">
                    hello@ita-services.co
                  </a>
                </p>
              </div>
              <NavLink
                href="/contact"
                className="inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
              >
                Get in Touch
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
