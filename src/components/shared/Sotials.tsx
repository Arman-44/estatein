import { sotialItems } from "@/config/sotials.config";
import { Icon } from "../ui/icons";
import Link from "next/link";
import clsx from "clsx";



export default function Sotials() {


    return (
        <div className="flex gap-xs">
            {sotialItems.map(e => (
                <Link
                key={e.label} 
                className={clsx(
                    "flex items-center justify-center size-12",
                    "rounded-full aspect-square bg-gray-08"
                )}
                href={e.href}>
                    <Icon name={e.icon} />
                </Link>
            ))}
        </div>
    )
}