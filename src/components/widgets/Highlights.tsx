import clsx from "clsx"
import { Icon, IconName } from "../ui/icons"

interface highlightItemsType {
    title: string,
    icon: IconName
}

const highlightItems: highlightItemsType[] = [
    { title: "Find Your Dream Home", icon: 'icHouse' },
    { title: "Unlock Property Value", icon: 'icCamera' },
    { title: "Effortless Property Management", icon: 'icManagement' },
    { title: "Smart Investments, Informed Decisions", icon: 'icSun' },
]


export default function Highlights() {

    return (
        <section className="border-y-6 border-gray-10 p-5">
            <div className={clsx(
                "@container",
                "w-full grid grid-cols-2 gap-sm",
                "md:grid-cols-4",
            )}>

                {highlightItems.map(e => (
                    <div key={e.title}
                        className={clsx(
                            "w-full h-full p-5",
                            "rounded-xl bg-gray-10",
                            "flex flex-col gap-xs items-center text-center"
                        )}>
                        <div className="w-full flex justify-center relative">
                            <Icon
                                className="text-purple-75"
                                name={e.icon} />
                            <Icon
                                className="absolute right-0 top-0 hidden @xs:block"
                                name="arrowTopRight" />
                        </div>
                        <h2 className="text-base">{e.title}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}