import { StaticImageData } from "next/image";
import maxMitchelImage from "@/assets/Team/max-mitchell.png"
import davidBrownImage from "@/assets/Team/david-brown.png"
import sarahJhonsonlImage from "@/assets/Team/sarah-johnson.png"
import michaelTurnerImage from "@/assets/Team/michael-turner.png"

export interface TeamCardType  {
    image:StaticImageData;
    name:string;
    rank:string;
}



export const teamCardItems:TeamCardType[] = [
    {
        image:maxMitchelImage,
        name:'Max Mitchell',
        rank:'Founder',
    },
    {
        image:sarahJhonsonlImage,
        name:'Sarah Johnson',
        rank:'Chief Real Estate Officer',
    },
    {
        image:davidBrownImage,
        name:'David Brown',
        rank:'Head of Property Management',
    },
    {
        image:michaelTurnerImage,
        name:'Michael Turner',
        rank:'Legal Counsel',
    },
]