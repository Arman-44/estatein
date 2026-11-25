import { footerList } from "@/config/footer.config";
import clsx from "clsx";
import Link from "next/link";


export default function FooterList() {

    return (
        <div className={clsx(
            "w-full h-full",
            "grid grid-cols-2 gap-y-xs",
            "md:flex md:justify-between",
        )}>
            {footerList.map(e => (
                <div
                    key={e.title}
                    className={clsx(
                        "flex flex-col gap-xs px-md",
                        "even:border-l-2 even:border-gray-15",
                        "nth-last-of-type-[2]:row-span-2",
                        "md:border-none"
                    )}>
                    <h2 className="text-base text-gray-60">{e.title}</h2>
                    <ul className="flex flex-col gap-xs">
                        {e.links.map(e => (
                            <li key={e.label}>
                                <Link href={e.href}>
                                    {e.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <hr className="w-full border-t-2 border-gray-15 md:border-none" />
                </div>
            ))}
        </div>
    )
}