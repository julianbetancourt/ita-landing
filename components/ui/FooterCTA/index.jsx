import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Ready to optimize your IT infrastructure?
                </h2>
                <p className="mt-3 text-gray-600">
                    Let Ita Services LLC help you build a technology strategy that supports your business goals. Get in touch for a consultation.
                </p>
                <NavLink
                    href="/contact"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Schedule a Consultation
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA
