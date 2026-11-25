import { IconName } from "@/components/ui/icons";

export interface valueItemsType {
    icon: IconName;
    title: string;
    desc: string;
}


export const valueItems: valueItemsType[] = [
    {
        title: "Trust",
        desc: "Trust is the conrnerstone of every successful real estate transaction",
        icon: "icStar"
    },
    {
        title: "Excellence",
        desc: "We set the bar high for ourselves. From the properties we list to the services we provide.",
        icon: "icGraduationCap"
    },
    {
        title: "Client-Centric",
        desc: "Your dreams and needs are at the center of our universe. We listen, understand.",
        icon: "icClients"
    },
    {
        title: "Our Commitment",
        desc: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
        icon: "icStar"
    },
]