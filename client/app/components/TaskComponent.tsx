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
        </div>
    </div>
}
