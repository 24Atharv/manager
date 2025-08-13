import { CalenderIcon } from "../Icons/CalenderIcon"
import { ProductivityIcon } from "../Icons/ProductivityIcon"
import { ProjectIcon } from "../Icons/ProjectIcon"
import { SchedularIcon } from "../Icons/SchedularIcon"
import { TimelineIcon } from "../Icons/TimelineIcon"
import { TodoIcon } from "../Icons/TodoIcon"

export const TaskCompnent = () => {
    return <div>
        <div className="border border-gray-800 rounded-lg mt-6">
            <div className="text-black flex gap-9 p-4">
                <span className="flex gap-2 items-center py-2 px-4 rounded bg-orange-400">
                    <SchedularIcon />
                    Scheduler
                </span>
                <span className="flex gap-1 items-center">
                    <ProductivityIcon />
                    Productivity
                </span>
                <span className="flex gap-1 items-center">
                    <TodoIcon />
                    Todo</span>
                <span className="flex gap-1 items-center">
                    <TimelineIcon />
                    Timeline</span>
                <span className="flex gap-1 items-center">
                    <CalenderIcon />
                    Calender</span>
                <span className="flex gap-1 items-center">
                    <ProjectIcon />
                    Projects</span>
            </div>
            <div className="m-3 flex flex-wrap gap-6 w-fit">
                <div className="flex flex-col gap-2 text-black p-5 rounded w-66 border border-gray-300">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-2xl bg-blue-100 text-blue-800">Time slot</span>
                        <span className="px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black p-5 rounded w-66 border border-gray-300">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-2xl bg-blue-100 text-blue-800">Time slot</span>
                        <span className="px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black p-5 rounded w-66 border border-gray-300">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-2xl bg-blue-100 text-blue-800">Time slot</span>
                        <span className="px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black p-5 rounded w-66 border border-gray-300">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-2xl bg-blue-100 text-blue-800">Time slot</span>
                        <span className="px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black p-5 rounded w-66 border border-gray-300">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-2xl bg-blue-100 text-blue-800">Time slot</span>
                        <span className="px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-gray-600">10:00 AM - 12:00 PM</span>
                        <span className="text-black font-bold">Task1</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-black p-5 rounded w-66 border border-gray-300">
                    <div className="flex gap-2">
                        <span className="px-4 py-1 w-fit rounded-2xl bg-blue-100 text-blue-800">Time slot</span>
                        <span className="px-5 py-1 rounded-lg bg-blue-100 text-blue-800">Edit</span>
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
