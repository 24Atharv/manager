import Image from "next/image"
import dotPoint from '../assets/green-dot.png'

export const HeroSpan = () => {
    return <div className="flex flex-col items-center mt-8 sm:gap-8 gap-4 text-center">
        <span className="text-gray-800 flex gap-2 items-center py-2 px-8 rounded-3xl text-sm border border-gray-400">
            <Image src={dotPoint} alt="grrenIcon" className="w-5 h-5" />
            New Feature Available
        </span>
        <span className="text-3xl sm:text-6xl text-black">
            Your Personal Productivity Suite
        </span>
        <span className="text-gray-600 text-xs sm:text-lg">Manage tasks, organize links, take notes, and track time — all in one place. Join 250+ users optimizing their time with tymeline.</span>
        <div className="flex gap-4 items-center">
            <span className="sm:text-xl cursor-pointer border border-gray-400 px-2 py-1 sm:py-2 sm:px-4 font-light rounded-lg text-white
             bg-orange-400 hover:shadow-2xl">
                Get Started
            </span>
            <span className="sm:text-xl cursor-pointer border border-gray-400 px-2 py-1 sm:py-2 sm:px-4 font-light rounded-lg
             text-black hover:shadow-2xl">
                Learn More
            </span>
        </div>
    </div>
}

