"use client"
import clsx from "clsx";
import { Icon } from "../../../../components/ui/icons";
import { useState } from "react";
import { valueItemsType } from "@/config/values.config";



export default function ValuesCard({ icon, title, desc }: valueItemsType) {

    return (
        <div className="w-full h-full p-6 text-gray-60">
            <div className="w-full flex items-center gap-xs">
                <div
                    className={clsx(
                        "flex items-center justify-center aspect-square",
                        "@3xs:size-12 @3xs:border-2 @3xs:rounded-full",
                        "@3xs:border-purple-75 @3xs:text-purple-75",
                    )}
                >
                    <Icon className="text-3xl" name={icon} />
                </div>
                <h3 className="text-nowrap @3xs:text-white">{title}</h3>
            </div>
            <p className="mt-xs">{desc}</p>
        </div>
    )
}