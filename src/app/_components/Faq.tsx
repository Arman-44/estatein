import FaqCard from "@/components/shared/FaqCard";
import ShowCaseSection, { ShowcaseSectionType } from "@/components/ui/common/ShowCaseSection";
import { faqItems } from "@/config/faq.config";

const items: ShowcaseSectionType = {
    actionHref: "#",
    actionLabel: "View All FAQ’s",
    title: "Frequently Asked Questions",
    desc: "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
}

export default function Faq() {

    return (
        <ShowCaseSection {...items}>

            {faqItems.map((e,index) => (
                <div key={index}>
                    <FaqCard {...e}/>
                </div>
            ))}
        </ShowCaseSection>
    )
}