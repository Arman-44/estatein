"use client";

import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

interface ExpanableWrapperProps {
    mobileStep?: number;
    desktopStep?: number;
    largeDesktopStep?: number;
    items: ReactNode[];
}

export default function ExpanableWrapper({
    mobileStep = 3,
    desktopStep = 4,
    largeDesktopStep = 6,
    items,
}: ExpanableWrapperProps) {
    const gridRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [baseCount, setBaseCount] = useState(Math.min(items.length, largeDesktopStep));
    const [count, setCount] = useState(Math.min(items.length, largeDesktopStep));
    const [isReady, setIsReady] = useState(false);

    const getStep = () => {
        if (!gridRef.current) return mobileStep;
        const cols = window.getComputedStyle(gridRef.current).gridTemplateColumns.split(" ").length;
        if (cols >= 3) return largeDesktopStep;
        if (cols === 2) return desktopStep;
        return mobileStep;
    };

    useEffect(() => {
        const container = gridRef.current;
        if (!container) return
        setIsReady(true);

        let prevStep = 0;
        let prevWidth = 0;

        const sync = () => {
            const step = getStep();
            if (step !== prevStep) {
                prevStep = step;
                const initial = Math.min(items.length, step);
                setBaseCount(initial);
                setCount(initial);
            }
        };

        sync();

        const observer = new ResizeObserver(([entry]) => {
            if (entry.contentRect.width === prevWidth) return;
            prevWidth = entry.contentRect.width;
            sync();
        });

        observer.observe(container);
        return () => observer.disconnect();
    }, [items.length, mobileStep, desktopStep, largeDesktopStep]);

    useEffect(() => {
        const container = gridRef.current;
        if (!container) return;

        autoAnimate(container, (el, action, oldCoords, newCoords) => {
            if (el === container && oldCoords && newCoords) {
                return new KeyframeEffect(
                    el,
                    [{ height: `${oldCoords.height}px` }, { height: `${newCoords.height}px` }],
                    { duration: 300, easing: "ease-in-out" }
                );
            }

            if (action === "remain") return new KeyframeEffect(el, [], { duration: 0 });

            const frames = [{ opacity: 0 }, { opacity: 1 }];
            return new KeyframeEffect(
                el,
                action === "remove" ? frames.reverse() : frames,
                { duration: 300 }
            );
        });
    }, []);

    if (items.length === 0) return null;

    const showMore = () => setCount((prev) => Math.min(prev + getStep(), items.length));
    const showLess = () => {
        wrapperRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => setCount(baseCount), 300);
    };

    const hasMore = count < items.length;

    return (
        <div ref={wrapperRef} className="w-full [overflow-anchor:none] scroll-mt-[50vh]">
            <div
                ref={gridRef}
                className={clsx(
                    "w-full grid content-start overflow-hidden gap-xs md:grid-cols-2 lg:grid-cols-3",
                    !isReady && [
                        "max-md:[&>*:nth-child(n+4)]:hidden",
                        "md:max-lg:[&>*:nth-child(n+5)]:hidden"
                    ],
                    "*:w-full *:h-full *:flex *:justify-center *:items-center",
                )}
            >
                {items.slice(0, count)}
            </div>

            {items.length > baseCount && (
                <div className="mt-4">
                    <button
                        type="button"
                        className="cursor-pointer p-4 border-2 border-gray-15 rounded-sm"
                        onClick={hasMore ? showMore : showLess}
                    >
                        {hasMore ? "Learn More" : "Show Less"}
                    </button>
                </div>
            )}
        </div>
    );
}