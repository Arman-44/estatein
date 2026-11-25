import TeamCard from "@/components/shared/TeamCard"
import HeadingLayout from "@/components/ui/common/HeadingLayout"
import SectionLayout from "@/components/ui/common/SectionLayout"
import {teamCardItems } from "@/config/team.config"
import clsx from "clsx"


export default function Team() {

    return (
        <SectionLayout>

            <HeadingLayout>
                <h1>Meet the Estatein Team</h1>
                <p>
                    At Estatein, our success is driven by the dedication and
                    expertise of our team. Get to know the people behind our
                    mission to make your real estate dreams a reality.
                </p>
            </HeadingLayout>

            <div className={clsx(
                "w-full h-full",
                "grid justify-items-center gap-xs",
                "md:grid-cols-2",
                "lg:grid-cols-4"
            )}>
                {teamCardItems.map(e => (
                    <TeamCard key={e.name} {...e} />
                ))}
            </div>
        </SectionLayout>
    )
}