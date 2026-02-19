import Head from "next/head";
import NavLink from "../components/ui/NavLink";

export default function Odontics() {
  return (
    <>
      <Head>
        <title>Odontics - Communication Platform for Dental Clinics | Ita Services LLC</title>
        <meta
          name="description"
          content="Odontics by Ita Services LLC is a communication automation platform for dental clinics. Send appointment reminders, booking confirmations, and patient communications via WhatsApp and SMS."
        />
      </Head>
      <div className="pt-28 pb-12">
        <div className="custom-screen text-gray-600">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Odontics by Ita Services LLC
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              A communication automation platform built for dental clinics.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h2 className="text-gray-800 text-2xl font-semibold">What is Odontics?</h2>
                <p className="mt-3">
                  Odontics is a communication automation platform developed by Ita Services LLC specifically for dental clinics and dental practices. It enables clinics to streamline their patient communications through automated messaging via WhatsApp and SMS.
                </p>
              </div>

              <div>
                <h2 className="text-gray-800 text-2xl font-semibold">Key Features</h2>
                <ul className="mt-3 space-y-4">
                  <li className="flex gap-3">
                    <div className="w-10 h-10 flex-shrink-0 border text-indigo-600 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold">Appointment Reminders</h3>
                      <p>Automatically send appointment reminders to patients via WhatsApp and SMS, reducing no-shows and improving clinic efficiency.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-10 h-10 flex-shrink-0 border text-indigo-600 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold">Booking Confirmations</h3>
                      <p>Send instant booking confirmations when patients schedule appointments, keeping them informed and reducing administrative workload.</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-10 h-10 flex-shrink-0 border text-indigo-600 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-gray-800 font-semibold">Patient Communications</h3>
                      <p>Facilitate ongoing communication between dental clinics and their patients through WhatsApp and SMS for follow-ups, care instructions, and general inquiries.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-gray-800 text-2xl font-semibold">How It Works</h2>
                <p className="mt-3">
                  Dental clinics integrate Odontics into their workflow to automate routine patient communications. When a patient books an appointment or needs a reminder, the platform sends messages through WhatsApp and SMS on behalf of the clinic. All communications are sent from the clinic to their own patients who have opted in to receive messages.
                </p>
              </div>

              <div>
                <h2 className="text-gray-800 text-2xl font-semibold">Patient Consent & Privacy</h2>
                <p className="mt-3">
                  Patient privacy is a core priority. Patients explicitly opt in to receive messages from their dental clinic through Odontics. Clinics are responsible for obtaining proper consent from their patients before sending communications. Odontics provides the tools for clinics to manage consent preferences and allows patients to opt out at any time.
                </p>
              </div>

              <div>
                <h2 className="text-gray-800 text-2xl font-semibold">Built by Ita Services LLC</h2>
                <p className="mt-3">
                  Odontics is developed and operated by Ita Services LLC, an IT consulting firm based in Sheridan, Wyoming. As part of our commitment to building technology solutions that solve real business problems, Odontics was created to address the communication challenges faced by dental practices. For questions about Odontics or Ita Services LLC, please contact us.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-gray-800 text-2xl font-semibold">Contact</h2>
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
