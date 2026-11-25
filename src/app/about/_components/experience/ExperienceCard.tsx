import clsx from "clsx";
import { ExperienceItemsType } from "@/config/experience.condig";



export default function ExperienceCard({ step, title, desc }: ExperienceItemsType) {

    return (
        <div className={clsx(
            "card-width h-full",
            "flex flex-col",
        )}>
            <span className="w-full flex p-[14px_16px] border-l-2 border-purple-60">
                {step}
            </span>
            <div className={clsx(
                "w-full h-full p-0.5",
                "bg-gradient-purple-gray-15",
            )}>
                <div className={clsx(
                    "w-full h-full p-lg",
                    "bg-gradient-purple-gray-08",
                    "flex flex-col items-center justify-center gap-xs",
                )}>
                    <div className="flex flex-col gap-xs">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}