import { TeamCardType } from "@/config/team.config";
import clsx from "clsx";
import Image from "next/image"
import { Icon } from "../ui/icons";



export default function TeamCard({ image, name, rank }: TeamCardType) {


    return (
        <article className={clsx(
            "card-width h-full p-7.5",
            "flex flex-col gap-xs",
            "border-2 rounded-sm",
            "border-gray-15 bg-gray-10"
        )}>
            <Image src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <span>{rank}</span>
            </div>
            <div className={clsx(
                "w-full py-3.5 px-6 relative",
                "flex items-center justify-between",
                "border-2 rounded-full",
                "bg-gray-10 border-gray-15",
            )}>
                Say Hello 👋
                <button className={clsx(
                    "flex items-center justify-center size-12",
                    "cursor-pointer rounded-full bg-purple-60")} >
                    <Icon name="icSend" />
                </button>
            </div>
        </article>
    )
}