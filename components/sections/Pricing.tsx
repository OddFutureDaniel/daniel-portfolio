import Button from "../ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/Card";
import Subheading from "../ui/Subheading";
import Section from "./Section";

export default function Pricing() {
    return (
        <Section
            className="relative min-h-screen max-w-full px-8  flex flex-col items-center text-center z-10"
            id="pricing">
            {/* Linear Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.015] -z-5"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #000 2px, transparent 2.5px), linear-gradient(to bottom, #000 2.5px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <Subheading align="left" size="sm">Pricing</Subheading>
            <Subheading align="left" size="lg" className="m-2">Simple pricing,
                no surprises.</Subheading>
            <Subheading size="md">One-time payment. You own everything. No recurring fees.</Subheading>

            <div className="flex flex-wrap items-start justify-center gap-4">
                <Card className="relative rounded-2xl p-8 border border-neutral-200 h-full flex flex-col flex-1 min-w-[260px] max-w-sm">
                    <CardHeader className="mb-8">
                        <CardTitle align="left" >Starter</CardTitle>
                        <CardDescription >Perfect for MVPs and landing pages</CardDescription>
                        <Subheading size="lg">$500</Subheading>
                    </CardHeader>
                    <CardContent >
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                Single landing page
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                Mobile responsive
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2`"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                Live in 48 hours
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                SEO optimized
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                1 revision round
                            </li>
                        </ul>
                    </CardContent>
                    <Button className=" w-full" variant="primary">Get Started</Button>
                </Card>
                <Card className="relative rounded-2xl p-8 border border-neutral-200 h-full flex flex-col flex-1 min-w-[260px] max-w-sm">
                    <CardHeader className="mb-8">
                        <CardTitle align="left" >Professional</CardTitle>
                        <CardDescription >Complete website solution</CardDescription>
                        <Subheading size="lg">$1250</Subheading>
                    </CardHeader>
                    <CardContent >
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                Single landing page
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                Mobile responsive
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                Live in 48 hours
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                SEO optimized
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                1 revision round
                            </li>
                        </ul>
                    </CardContent>
                    <Button className=" w-full" variant="primary">Get Started</Button>
                </Card>

                <Card className="relative rounded-2xl p-8 border border-neutral-200 h-full flex flex-col flex-1 min-w-[260px] max-w-sm">
                    <CardHeader className="mb-8">
                        <CardTitle align="left" >Enterprise</CardTitle>
                        <CardDescription >For complex projects</CardDescription>
                        <Subheading size="lg">Custom</Subheading>
                    </CardHeader>
                    <CardContent >
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2`"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                Single landing page
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2`"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                Mobile responsive
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2`"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                Live in 48 hours
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2`"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                SEO optimized
                            </li>
                            <li className="flex items-center gap-3 text-sm text-neutral-600"><svg className="h-4 w-4 text-neutral-400" viewBox="0 0 24 24" fill="none" >
                                <g id="SVGRepo_bgCarrier" strokeWidth="2`"></g><g
                                ></g> <g > <path strokeLinecap="round" strokeLinejoin="round" d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
                                    stroke="currentColor" strokeWidth="2.5" >
                                </path> </g></svg>
                                1 revision round
                            </li>
                        </ul>
                    </CardContent>
                    <Button className=" w-full" variant="primary">Get Started</Button>
                </Card>

            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10">
                <div class="flex items-center gap-2 text-sm text-neutral-500"><svg class="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>No hidden fees</div>
                <div class="flex items-center gap-2 text-sm text-neutral-500"><svg class="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>You own the code</div>
            </div>
        </Section>
    );
}