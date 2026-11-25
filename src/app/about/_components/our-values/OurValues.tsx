import ValuesCard from "@/app/about/_components/our-values/ValuesCard";
import HeadingLayout from "@/components/ui/common/HeadingLayout";
import SectionLayout from "@/components/ui/common/SectionLayout";
import ValuesBox from "./ValuesBox";



export default function OurValues() {


    return (
        <SectionLayout variant="asymmetric-reverse">
            <HeadingLayout>
                <h2>Our Values</h2>
                <p>
                    Our story is one of continuous growth and evolution.
                    We started as a small team with big dreams, determined
                    to create a real estate platform that transcended the ordinary.
                </p>
            </HeadingLayout>
            <ValuesBox/>
        </SectionLayout>
    )
}