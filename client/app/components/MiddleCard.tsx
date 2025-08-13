import Image from "next/image"
import redDot from '../assets/red-circle-icon.svg'
import greenDot from '../assets/green-circle-icon.svg'
import blackDot from '../assets/black-circle.svg'

export const MiddleCard = () => {
    return <div className="border border-gray-200 rounded-xl shadow-2xl">
        <div className="flex gap-1 p-2">
            <Image src={redDot} className="w-4 h-4" alt="redDot" />
            <Image src={greenDot} className="w-4 h-4" alt="greenDot" />
            <Image src={blackDot} className="w-4 h-4" alt="blackDot" />
        </div>
        <hr className="max-w-full text-gray-200" />
        <div className="p-3">
            <div className="flex flex-col items-center">
                <span>Productivity Score</span>
                <div className="flex gap-3 mt-4 items-center">
                    <span className="p-2 rounded bg-gray-100 w-50 h-25 flex justify-between">
                        <span className="text-gray-500">Tasks</span>
                        <span className="text-green-300">+12%</span>
                    </span>
                    <span className="p-2 rounded bg-gray-100 w-50 h-25 flex justify-between">
                        <span className="text-gray-500">Focus Time</span>
                        <span className="text-blue-500">6.2h</span>
                    </span>
                </div>
            </div>
            <div className="flex flex-col gap-2 mt-4 p-3 justify-center">
                <span>
                    Daily Goal
                    <div className="bg-blue-600 h-2 w-full rounded-xl"></div>
                </span>
                <span>
                    Weekly Target
                    <div className="bg-purple-600 h-2 rounded-xl w-full"></div>
                </span>
                <span className="flex gap-3 items-center p-2 mt-4 bg-gray-50 rounded-lg border border-gray-200">
                    <Image src={greenDot} className="w-4 h-4" alt="greenDot" />
                    <span className="text-gray-500">Currently tracking: Design Review</span>
                </span>
            </div>
        </div>
    </div>
}