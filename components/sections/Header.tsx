import { useScrollHide } from "@/components/ui/UseScrollDirection";
export default function Header() {
    const hidden = useScrollHide(80);
    return (
        <header
            id="site-header"
            className={` fixed inset-x-0 top-0 z-50 mt-8 transition-transform duration-300 ease-out
                ${hidden ? "-translate-y-[150%]" : "translate-y-0"}
                `}
        >
            <div className="mx-auto flex max-w-[92%] md:max-w-4xl items-center justify-between px-5 py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-300 bg-white/60 backdrop-blur-md border border-neutral-200/40">
                <a className="inline-flex items-center gap-2" href="/">
                </a>
                <nav className="hidden md:flex items-center gap-1">
                    <a className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-black transition-colors rounded-full hover:bg-neutral-100/80" href="/#previous-work">Work</a>
                    <a className="px-4 py-2 text-sm font-medium text-neutral-600 hover:text-black transition-colors rounded-full hover:bg-neutral-100/80" href="/#pricing">Pricing</a>
                    <a className="ml-2 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:shadow-lg" href="/#book-a-call">
                        <span>Book a Call</span>
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3">
                            </path>
                        </svg>
                    </a>
                </nav>
                <button className="md:hidden flex items-center justify-center p-2 text-neutral-600 hover:text-black transition-colors" aria-label="Toggle menu" aria-expanded="false">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>
            </div>
            <div className="absolute top-full right-4 left-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-neutral-200/60 shadow-2xl md:hidden transition-all duration-300 ease-out opacity-0 -translate-y-3 scale-[0.98] pointer-events-none">
                <nav className="p-3 space-y-1"><a className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-100/80 transition-colors" href="/#previous-work">Work</a>
                    <a className="block px-4 py-3 rounded-xl text-sm font-medium text-neutral-600 hover:text-black hover:bg-neutral-100/80 transition-colors" href="/#pricing">Pricing</a>
                    <div className="pt-2 border-t border-neutral-100">
                        <a className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black text-sm font-medium text-white transition-all hover:bg-neutral-800" href="/#book-a-call">
                            <span>Book a Call</span>
                            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3">
                                </path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}