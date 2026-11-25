"use client"

import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react"
import { ReactNode, useCallback, useEffect, useState } from "react"
import { Icon } from "../icons";


interface SliderProps {
    children: ReactNode;
    autoSize?: boolean;
    buttons?: boolean;
    maxCols?:1 | 2 | 3;
}

export default function SimpleSlider({
    children,
    autoSize,
    buttons,
    maxCols = 3
}: SliderProps) {


    const [slideIndex, setSlideIndex] = useState(0)
    const [totalSlides, setTotalSlides] = useState(0)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: false,
            align: 'start',
            duration: 20,
            slidesToScroll: 'auto',
            containScroll: 'trimSnaps',
            watchDrag: (api) => api.scrollSnapList().length > 1,
        }
    )

    const goToPrev = () => emblaApi?.scrollPrev()
    const goToNext = () => emblaApi?.scrollNext()


    const getIndex = useCallback(() => {
        if (!emblaApi) return;

        setSlideIndex(emblaApi.selectedScrollSnap() + 1)
        setTotalSlides(emblaApi.scrollSnapList().length)
    }, [emblaApi])




    useEffect(() => {
        if (!emblaApi) return;
        getIndex()

        emblaApi.on('select', getIndex)
        emblaApi.on('reInit', getIndex)

        return () => {
            emblaApi.off('select', getIndex)
            emblaApi.off('reInit', getIndex)
        }
    }, [emblaApi, getIndex])

    return (
        <div className="w-full h-full flex flex-col gap-xs">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className={clsx(
                    "-ml-10",
                    "flex -ml-10",
                    "*:min-w-0 *:shrink-0 *:grow-0 *:basis-full",
                    "*:md:basis-1/2",
                    maxCols == 2 && "*:xl:basis-1/2",
                    maxCols == 1 && "*:md:basis-full *:xl:basis-full",
                    maxCols == 3 && "*:xl:basis-1/3",
                    !autoSize && "*:flex *:items-center *:justify-center *:pl-10",
                )}>
                    {children}
                </div>
            </div>
            {totalSlides > 1 && buttons && (
                <div className={clsx(
                    "w-full flex",
                    "items-center justify-between gap-4",
                )}>
                    <div>
                        {slideIndex} of {totalSlides}
                    </div>
                    <div className="flex gap-4 text-l">
                        <button className="arrow-frame" onClick={goToPrev}>
                            <Icon name="arrowLeft" />
                        </button>
                        <button className="arrow-frame" onClick={goToNext}>
                            <Icon name="arrowRight" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}