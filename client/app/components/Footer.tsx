import Image from "next/image"
import leafSvg from '../assets/leaf.svg'

export const Footer = () => {
    return <div className="mt-9">
        <hr className="border border-gray-800" />
        <Image src={leafSvg} alt="leafIcon" className="w-14 h-14" />
        <span className="text-gray-800">© 2025 Tymeline, LLC. All rights reserved.</span>
    </div>
}
