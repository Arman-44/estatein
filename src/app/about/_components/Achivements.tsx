import HeadingLayout from "@/components/ui/common/HeadingLayout";
import SectionLayout from "@/components/ui/common/SectionLayout";
import SimpleSlider from "@/components/ui/common/SimpleSlider";
import { achivementItems } from "@/config/achivements.config";
import clsx from "clsx";


export default function Achivements() {

    return (
        <SectionLayout>
            <HeadingLayout>
                <h2>Our Achievements</h2>
                <p>
                    Our story is one of continuous growth and evolution.
                    We started as a small team with big dreams, determined
                    to create a real estate platform that transcended the ordinary.
                </p>
            </HeadingLayout>
            <SimpleSlider buttons={true}>
                {achivementItems.map(e => (
                    <div key={e.title}>
                        <div
                            className={clsx(
                                "card-width h-full",
                                "flex flex-col gap-xs",
                                "p-10 border-4 border-gray-15",
                                "rounded-2xl"
                            )}>
                            <h3>{e.title}</h3>
                            <p>{e.desc}</p>
                        </div>
                    </div>
                ))}
            </SimpleSlider>
        </SectionLayout>
    )
}