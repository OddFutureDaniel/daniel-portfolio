import Subheading from "../ui/Subheading";
import Section from "./Section";
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
  } from "@/components/ui/Accordion";

export default function Faqs() {
    return (
        <Section id="faqs"
            className="relative max-w-full px-8 flex flex-col items-center text-center z-10">
            <div>
                <Subheading align="left">What Clients Ask</Subheading>
            </div>
            <div>
                <Accordion multiple>
                    <AccordionItem>
                        <AccordionHeader>
                            How fast do you build Shopify sites
                        </AccordionHeader>
                        <AccordionPanel>
                            Most projects ship within 72 hours once assets and content are ready.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionHeader>
                            Can you work with my existing theme
                        </AccordionHeader>
                        <AccordionPanel>
                            Yes. I can refactor your current theme, improve UX and add custom sections.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </Section>
    );
}