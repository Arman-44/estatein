import CtaBanner from "@/components/widgets/CtaBanner";
import AboutIntro from "./_components/AboutIntro";
import Achivements from "./_components/Achivements";
import Experience from "./_components/experience/Experience";
import OurValues from "./_components/our-values/OurValues";
import Team from "./_components/Team";
import ValuedClients from "./_components/ValuedClients";





export default function Home() {


    return (
        <main className="w-full min-h-full">
            <div className="container">
                <AboutIntro />
                <OurValues />
                <Achivements/>
                <Experience/>
                <Team/>
                <ValuedClients/>
            </div>
            <CtaBanner/>
        </main>
    )
}