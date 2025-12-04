import Subheading from "../ui/Subheading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import Section from "./Section";
export default function Process() {
    return (
        <Section id="process">
            <Subheading align="left">How We Work</Subheading>
            <Subheading align="left" size="lg">A simple process, <br /> exceptional results</Subheading>
            <Card>
                <CardHeader>
                    <CardTitle>Fast Shopify Builds</CardTitle>
                    <CardDescription>
                        Your store, live in 72 hours. Zero hassle.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    Content inside a beautifully consistent card.
                </CardContent>
            </Card>
        </Section>

    );
}