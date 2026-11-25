import { ValuedClientItemsType } from "@/config/valuedClients.config";
import clsx from "clsx";
import ButtonAsLink from "../ui/common/ButtonAsLink";
import { Icon } from "../ui/icons";



export default function ValuedClientCard(
    {
        category,
        comment,
        company,
        domain,
        sience,
        vebsite,
    }: ValuedClientItemsType) {

    return (
        <article className={clsx(
            "w-full h-full p-lg",
            "flex flex-col gap-md",
            "border-4 rounded-2xl border-gray-15"
        )}>
            <div className="w-full flex justify-between gap-xs">
                <span className="flex flex-col gap-xs">
                    <span className="text-gray-60">Sience {sience}</span>
                    <h2 className="text-xl">{company}</h2>
                </span>
                <ButtonAsLink href={vebsite}>
                    Visit Website
                </ButtonAsLink>
            </div>

            <div className="w-full flex justify-between gap-xs">

                <div className="flex flex-col gap-xs">
                    <Icon name="icApps" className="text-gray-60" />
                    <span>{domain}</span>
                </div>

                <hr className="h-full border-2 border-gray-15" />

                <div className="flex flex-col gap-xs">
                    <Icon name="icLightning" className="text-gray-60"/>
                    <span>{category}</span>
                </div>
            </div>

            <div className="w-full flex flex-col gap-xs">
                <span className="text-gray-60">What They Said 🤗</span>
                <p className="text-white">{comment}</p>
            </div>
        </article>
    )
}