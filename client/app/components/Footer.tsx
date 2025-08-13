import Image from "next/image"
import leafSvg from '../assets/leaf.svg'
import { GithubIcon } from "../Icons/GithubIcon"
import { TwitterIcon } from "../Icons/TwitterIcon"

export const Footer = () => {
    return <div className="mt-9">
        <hr className="border border-gray-800" />
        <div className="flex gap-3 justify-between mt-2 items-center">
        <Image src={leafSvg} alt="leafIcon" className="w-14 h-14" />
        <span className="text-gray-800">© 2025 Tymeline, LLC. All rights reserved.</span>
        <span className="flex gap-1">
            <GithubIcon />
            <TwitterIcon />
        </span>
        </div>
    </div>
}
