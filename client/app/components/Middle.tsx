import { LowerSpan } from "./LowerSpan"
import { MiddleCard } from "./MiddleCard"
import { MiddleSlider } from "./MiddleSlider"
import { MiddleSpan } from "./MiddleSpan"

export const Middle = () => {
    return <div className="flex flex-col">
        <div className="flex items-center">
            <div className="flex justify-between gap-10 mt-8 items-center text-black">
                <div className="flex flex-col gap-6 w-126">
                    <span className="text-3xl font-bold">Everything you need to stay organized, with powerful integrations built-in.</span>
                    <span className="text-lg text-gray-600">Streamline your workflow with intelligent task management, seamless time tracking, and organized link collections that sync across all your devices.</span>
                    <span className="text-lg text-gray-600">Whether you're a developer, designer, or entrepreneur, tymeline adapts to your unique productivity needs with customizable workflows and smart automation.</span>
                    <button className="px-5 py-2 rounded bg-orange-400 w-fit">Start Now</button>
                </div>
                <div className="w-[2px] h-120 bg-gray-700"></div>
                <div className="w-136 text-center">
                    <MiddleCard />
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center text-black text-4xl">
        <MiddleSpan />
        </div>
        <MiddleSlider />
        <LowerSpan />
    </div>
}

