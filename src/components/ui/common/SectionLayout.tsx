import { ReactNode } from "react";
import clsx from "clsx";

interface SectionLayoutProps {
    children: ReactNode;
    variant?: 'stack' | 'split' | 'asymmetric-reverse';
}

export default function SectionLayout({
    children,
    variant = 'stack',
}: SectionLayoutProps) {



    return (
        <section className={clsx(
            "w-full py-xl gap-xl",
            variant === "stack" && [
                "flex justify-center flex-col items-start"
            ],
            variant === "split" && [
                "grid",
                "md:grid-cols-2"
            ],
            variant === "asymmetric-reverse" && [
                "grid grid-cols-1",
                "items-center",
                "xl:grid-cols-[3fr_7fr]"
            ]
        )}>
            
            {children}
        </section>
    );
}