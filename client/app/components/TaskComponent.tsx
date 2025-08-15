import { CalenderIcon } from "../Icons/CalenderIcon"
import { ProductivityIcon } from "../Icons/ProductivityIcon"
import { ProjectIcon } from "../Icons/ProjectIcon"
import { SchedularIcon } from "../Icons/SchedularIcon"
import { TimelineIcon } from "../Icons/TimelineIcon"
import { TodoIcon } from "../Icons/TodoIcon"

export const TaskCompnent = () => {
    return <div>
        <div className="border-2 border-gray-300 rounded-lg mt-6 ">
            <div className="text-black grid grid-cols-2 gap-5 p-4 sm:flex sm:gap-6 sm:p-4">
                <span className="flex gap-1 items-center px-2 py-1 sm:py-2 sm:px-4 rounded bg-orange-400">
                    <SchedularIcon />
                    Scheduler
                </span>
                <span className="flex gap-1 items-center px-2 sm:py-2 sm:px-4 ">
                    <ProductivityIcon />
                    Productivity
                </span>
                <span className="flex gap-1 items-center px-2 sm:py-2 sm:px-4 ">
                    <TodoIcon />
                    Todo</span>
                <span className="flex gap-1 items-center px-2 sm:py-2 sm:px-4 ">
                    <TimelineIcon />
                    Timeline</span>
                <span className="flex gap-1 items-center px-2 sm:py-2 sm:px-4 ">
                    <CalenderIcon />
                    Calender</span>
                <span className="flex gap-1 items-center px-2 sm:py-2 sm:px-4 ">
                    <ProjectIcon />
                    Projects</span>
            </div>


            <div className="m-3 flex flex-wrap gap-6 w-fit">
                <div className="flex flex-col gap-2 text-black px-8 py-5 rounded border w-80 border-gray-300 sm:p-5 sm:w-60">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-2xl bg-blue-100 text-blue-800">Time slot</span>
                        <span className="px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black px-8 py-5 rounded border w-80 border-gray-300 sm:p-5 sm:w-60">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-lg bg-blue-100 text-blue-800">Time slot</span>
                        <span className="hidden sm:inline px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black px-8 py-5 rounded border w-80 border-gray-300 sm:p-5 sm:w-60">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-lg bg-blue-100 text-blue-800">Time slot</span>
                        <span className="hidden sm:inline px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black px-8 py-5 rounded border w-80 border-gray-300 sm:p-5 sm:w-60">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-lg bg-blue-100 text-blue-800">Time slot</span>
                        <span className="hidden sm:inline px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black px-8 py-5 rounded border w-80 border-gray-300 sm:p-5 sm:w-60">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-lg bg-blue-100 text-blue-800">Time slot</span>
                        <span className="hidden sm:inline px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black px-8 py-5 rounded border w-80 border-gray-300 sm:p-5 sm:w-60">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-lg bg-blue-100 text-blue-800">Time slot</span>
                        <span className="hidden sm:inline px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
