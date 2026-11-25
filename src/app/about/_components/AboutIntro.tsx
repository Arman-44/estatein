import HeadingLayout from "@/components/ui/common/HeadingLayout";
import CompanyStats from "@/components/widgets/CompanyStats";
import aboutIntroBg from "@/assets/images/backgrounds/about-intro-bg.png"
import Image from "next/image";
import clsx from "clsx";


export default function AboutIntro() {



    return (
        <section className={clsx(
            "w-full h-full gap-xl py-xl",
            "flex flex-col-reverse items-center",
            "md:flex-row"
        )}>
            <div className="w-full h-full flex flex-col gap-xl">
                <HeadingLayout>
                    <h1>Our Journey</h1>
                    <p>
                        Our story is one of continuous growth and evolution.
                        We started as a small team with big dreams, determined
                        to create a real estate platform that transcended the
                        ordinary. Over the years, we've expanded our reach,
                        forged valuable partnerships, and gained the trust of countless clients.
                    </p>
                </HeadingLayout>
                <CompanyStats />
            </div>
            <Image
                className="w-full h-full object-contain rounded-2xl"
                src={aboutIntroBg} alt="" loading="eager" />
        </section>
    )
}