import Link from "next/link"

const Footer = () => (
    <footer>
        <div className="custom-screen pt-16">
            <div className="flex flex-col gap-8 py-10 border-t">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                    <div className="space-y-2 text-gray-600">
                        <h3 className="text-gray-800 font-semibold">Ita Services LLC</h3>
                        <p>30 N Gould St Ste N</p>
                        <p>Sheridan, WY 82801</p>
                        <p>
                            Phone:{" "}
                            <a href="tel:+13073571071" className="hover:text-gray-900 duration-150">
                                (307) 357-1071
                            </a>
                        </p>
                        <p>
                            Email:{" "}
                            <a href="mailto:hello@ita-services.co" className="hover:text-gray-900 duration-150">
                                hello@ita-services.co
                            </a>
                        </p>
                    </div>
                    <div className="space-y-2 text-gray-600">
                        <h3 className="text-gray-800 font-semibold">Products</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/odontics" className="hover:text-gray-900 duration-150">
                                    Odontics
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-2 text-gray-600">
                        <h3 className="text-gray-800 font-semibold">Legal</h3>
                        <ul className="space-y-1">
                            <li>
                                <Link href="/privacy" className="hover:text-gray-900 duration-150">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-gray-900 duration-150">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-4 border-t">
                    <p className="text-gray-600 text-sm">&copy; 2026 Ita Services LLC. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
