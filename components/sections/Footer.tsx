import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-200 bg-white" >
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-20" role="navigation" aria-label="Footer" >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
                    <div className="md:col-span-5">
                        <Link className="inline-block" href="/"> </Link>
                        <p className="mt-4 text-sm text-neutral-500 max-w-xs leading-relaxed">Designed with intent. Live in 72 hours.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <a href="https://www.linkedin.com/in/Daniel-rogerson" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-9 w-9 rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 transition-colors" aria-label="LinkedIn">
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-7">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                            
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Company
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                    <Link className="text-sm text-neutral-600 hover:text-black transition-colors" href="/#about">About</Link>
                                    </li>
                                    <li>
                                    <Link className="text-sm text-neutral-600 hover:text-black transition-colors" href="/#previous-work">Work</Link>

                                    </li>
                                    <li>
                                    <Link className="text-sm text-neutral-600 hover:text-black transition-colors" href="/#calendar">Contact</Link>

                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">Legal
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                    <Link className="text-sm text-neutral-600 hover:text-black transition-colors" href="/privacy">Privacy Policy</Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-400">© 2026 THIRD LINE. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="mailto:hello@thirdline.uk" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">hello@thirdline.uk
                        </a>
                        <a href="tel:07979983123" className="text-xs text-neutral-400 hover:text-neutral-600 transition-colors">+44 7979 983 123
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
