import HeadingLayout from "@/components/ui/common/HeadingLayout";
import SectionLayout from "@/components/ui/common/SectionLayout";
import ExpanableWrapper from "@/components/ui/common/ExpanableWrapper";
import ExperienceCard from "./ExperienceCard";
import { experienceItems } from "@/config/experience.condig";




export default function Experience() {

    return (
        <SectionLayout>
            <HeadingLayout>
                <h2>Navigating the Estatein Experience</h2>
                <p>
                    At Estatein, our success is driven by the
                    dedication and expertise of our team.
                    Get to know the people behind our mission
                    to make your real estate dreams a reality.
                </p>
            </HeadingLayout>

            <ExpanableWrapper items={experienceItems.map(e => (
                <div key={e.step}>
                    <ExperienceCard {...e} />
                </div>
            ))} />

        </SectionLayout>
    )
}