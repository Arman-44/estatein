'use client';

import clsx from "clsx";
import { useState, useEffect } from "react";
import { Icon } from "../ui/icons";

interface RatingProps {
    totalStars?: number;
    initialRating?: number;
    readOnly?: boolean;
    onChange?: (rating: number) => void;
}

export default function StarsRating({
    totalStars = 5,
    initialRating = 0,
    readOnly = false,
    onChange
}: RatingProps) {

    const [mouseIndex, setMouseIndex] = useState(initialRating);

    const handleLeave = () => {
        !readOnly && setMouseIndex(initialRating)
    }
    const handleEnter = (value: number) => {
        !readOnly && setMouseIndex(value)
    }
    useEffect(() => {
        setMouseIndex(initialRating);
    }, [initialRating]);

    return (
        <div className="w-full h-11 flex items-center gap-xs">
            {[...Array(totalStars)].map((_, index) => {
                const starValue = index + 1;
                const paintOver = starValue <= mouseIndex;

                return (
                    <button
                        key={index}
                        type="button"
                        className={clsx(
                            "w-full max-w-12 aspect-square p-0",
                            "flex items-center justify-center",
                            "transition-colors duration-100",
                            "rounded-full border border-gray-15 bg-gray-10",
                            paintOver ? "text-amber-300" : "text-gray-300",
                            readOnly ? "cursor-default pointer-events-none" : "cursor-pointer"
                        )}
                        onMouseEnter={() => handleEnter(starValue)}
                        onMouseLeave={() => handleLeave()}
                        onTouchEnd={() => handleLeave()}
                        onClick={() => {
                            if (!readOnly && onChange) {
                                onChange(starValue);
                            }
                        }}
                    >
                        <Icon name="icStar" />
                    </button>
                );
            })}
        </div>
    );
}