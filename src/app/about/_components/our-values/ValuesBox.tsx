import { valueItems } from "@/config/values.config";
import clsx from "clsx";
import ValuesCard from "./ValuesCard";

export default function ValuesBox() {

    return (
        <div className={clsx(
            "@container",
            "w-full h-full grid grid-cols-1 p-7.5",
            "border-4 rounded-2xl border-gray-15",
            "md:grid-cols-2",
        )}>
            {valueItems.map((e) => {

                return (
                    <div key={e.title} className={clsx(
                        "w-full h-full py-6 border-b-gray-15",
                        "flex flex-col md:flex-row",
                        "not-last:border-b-2",
                        "md:nth-[n+3]:border-b-0",
                        "md:odd:after:block md:odd:after:w-0.5 md:odd:after:bg-gray-15"
                    )}>
                        <ValuesCard {...e} />
                    </div>
                )
            })}
        </div>
    )
}