import ReviewCard from "@/components/shared/ReviwCard"
import ShowCaseSection, { ShowcaseSectionType } from "@/components/ui/common/ShowCaseSection"
import { reviewItems } from "@/config/review.config"



const items: ShowcaseSectionType = {
    actionHref: "#",
    actionLabel: "View All Testimonials",
    title: "What Our Clients Say",
    desc: "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.",
}

export default function Review() {

    return (
        <ShowCaseSection {...items}>

            {reviewItems.map((e,index) => (
                <div key={index}>
                    <ReviewCard {...e}/>
                </div>
            ))}
        </ShowCaseSection>
    )
}