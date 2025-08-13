import type { NextPage } from "next";
import Image from "next/image";
import leafSvg from '../assets/leaf.svg'


export const LeafIcon = () => {
    return (
        <div>
            <Image src={leafSvg} alt="LeafIcon" className="w-10 h-10" />
        </div>
    );
};
