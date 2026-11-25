import { SVGProps } from 'react';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import ArrowTopRight from './ArrowTopRight';
import IcApps from './IcApps';
import IcBathroom from './IcBathroom';
import IcBedroom from './IcBedroom';
import IcCamera from './IcCamera';
import IcClients from './IcClients';
import IcFacebook from './IcFacebook';
import IcGraduationCap from './IcGraduationCap';
import IcHouse from './IcHouse';
import IcLightning from './IcLightning';
import IcLinkedIn from './IcLinkedIn';
import IcManagement from './IcManagement';
import IcSend from './IcSend';
import IcStar from './IcStar';
import IcSun from './IcSun';
import IcTwitter from './IcTwitter';
import IcVilla from './IcVilla';
import IcYouTube from './IcYouTube';
import XMark from './XMark';

export const iconMap = {
    'arrowLeft': ArrowLeft,
    'arrowRight': ArrowRight,
    'arrowTopRight': ArrowTopRight,
    'icApps': IcApps,
    'icBathroom': IcBathroom,
    'icBedroom': IcBedroom,
    'icCamera': IcCamera,
    'icClients': IcClients,
    'icFacebook': IcFacebook,
    'icGraduationCap': IcGraduationCap,
    'icHouse': IcHouse,
    'icLightning': IcLightning,
    'icLinkedIn': IcLinkedIn,
    'icManagement': IcManagement,
    'icSend': IcSend,
    'icStar': IcStar,
    'icSun': IcSun,
    'icTwitter': IcTwitter,
    'icVilla': IcVilla,
    'icYouTube': IcYouTube,
    'xMark': XMark,
} as const;

export type IconName = keyof typeof iconMap;

interface IconProps extends SVGProps<SVGSVGElement> {
    name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
    const Component = iconMap[name];
    if (!Component) return null;
    return <Component {...props} />;
}
