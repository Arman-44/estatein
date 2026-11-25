import ValuedClientCard from "@/components/shared/ValuedClientCard";
import HeadingLayout from "@/components/ui/common/HeadingLayout";
import SectionLayout from "@/components/ui/common/SectionLayout";
import SimpleSlider from "@/components/ui/common/SimpleSlider";
import { valuedClientItems } from "@/config/valuedClients.config";



export default function ValuedClients() {

    return (
        <SectionLayout>
            <HeadingLayout>
                <h1>Our Valued Clients</h1>
                <p>
                    At Estatein, we have had the privilege of working with a
                    diverse range of clients across various industries.
                    Here are some of the clients we've had the pleasure of serving
                </p>
            </HeadingLayout>
            <SimpleSlider maxCols={2} buttons={true} >
                    {valuedClientItems.map(e => (
                        <div key={e.id}>
                            <ValuedClientCard {...e}/>
                        </div>
                    ))}
            </SimpleSlider>

        </SectionLayout>
    )
}