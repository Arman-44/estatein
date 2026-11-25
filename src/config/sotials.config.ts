import { IconName } from "@/components/ui/icons";


interface SotialItemsType {
    label:string;
    href:string;
    icon:IconName;
}

export const sotialItems:SotialItemsType[] = [
    {label:"Facebook",href:"#",icon:"icFacebook"},
    {label:"LinkedIn",href:"#",icon:"icLinkedIn"},
    {label:"Twitter",href:"#",icon:"icTwitter"},
    {label:"YouTube",href:"#",icon:"icYouTube"},
]