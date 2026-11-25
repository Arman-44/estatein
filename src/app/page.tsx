import CtaBanner from "@/components/widgets/CtaBanner";
import Faq from "./_components/Faq";
import Feature from "./_components/Feature";
import Hero from "./_components/hero/Hero";
import Review from "./_components/Review";
import Highlights from "@/components/widgets/Highlights";

export default function Home() {
  return (
    <main className="min-h-full w-full">
      <Hero />
      <Highlights/>
      <div className="container">
        <Feature />
        <Review />
        <Faq />
      </div>
      <CtaBanner/>
    </main>
  );
}
