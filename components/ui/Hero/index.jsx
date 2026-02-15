import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    Strategic IT Consulting for Growing Businesses
                </h1>
                <p className="max-w-xl mx-auto">
                    Ita Services LLC helps businesses align technology with their goals. From IT strategy and cloud infrastructure to cybersecurity, we deliver solutions that drive growth.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/contact"
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Get a Consultation
                    </NavLink>
                    <NavLink
                        href="#services"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        Our Services
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero
