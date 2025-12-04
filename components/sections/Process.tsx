import Subheading from "../ui/Subheading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Section from "./Section";
export default function Process() {
    return (
        <Section id="process"
        className="relative min-h-screen max-w-full px-8  flex flex-col items-center text-center z-10">
            <Subheading align="left">How We Work</Subheading>
            <Subheading align="left" size="lg">A simple process, <br /> exceptional results</Subheading>
            <div className="flex flex-wrap items-start justify-center gap-4">
            <Card className="flex-1 min-w-[260px] max-w-sm">
                <CardHeader>
                    <CardTitle >Discovery</CardTitle>
                    <CardDescription>
                    30-minute chat to understand your goals, timeline, and success criteria.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    Content inside a beautifully consistent card.
                </CardContent>
            </Card>
            <Card className="flex-1 min-w-[260px] max-w-sm">
                <CardHeader>
                    <CardTitle>Collaboration</CardTitle>
                    <CardDescription>
                    Real-time updates via dedicated Slack channel. No middlemen.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    Content inside a beautifully consistent card.
                </CardContent>
            </Card>
            <Card className="flex-1 min-w-[260px] max-w-sm">
                <CardHeader>
                    <CardTitle>Delivery</CardTitle>
                    <CardDescription>
                    Design, build, and deploy. Most projects go live in under 72 hours.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    Content inside a beautifully consistent card.
                </CardContent>
            </Card>
            </div>
            
        </Section>

    );
}