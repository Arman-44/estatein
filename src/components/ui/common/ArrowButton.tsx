"use client"
import clsx from "clsx";
import { Icon } from "../icons";


interface ArrowButtonProps {
    variant?: "left" | "right";
    className?: string;
    onClick?: () => void;
}

export default function ArrowButton({ variant, className, onClick }: ArrowButtonProps) {

    const handleClick = () => {
        if (onClick) onClick()
    }

    return (
        <button
            className={clsx(
                "flex items-center justify-center aspect-square size-12",
                "border-2 border-gray-15 rounded-full",
                className
            )}
            onClick={handleClick}>
            {variant == "left" ? <Icon name="arrowLeft" /> : <Icon name="arrowRight" />}
        </button>
    )
}