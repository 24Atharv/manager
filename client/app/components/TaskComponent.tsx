import { CalenderIcon } from "../Icons/CalenderIcon"
import { ProductivityIcon } from "../Icons/ProductivityIcon"
import { ProjectIcon } from "../Icons/ProjectIcon"
import { SchedularIcon } from "../Icons/SchedularIcon"
import { TimelineIcon } from "../Icons/TimelineIcon"
import { TodoIcon } from "../Icons/TodoIcon"

export const TaskCompnent = () => {
    return <div>
        <div className="border border-gray-800 rounded-lg">
            <div className="text-black flex gap-4 p-4">
                <span>
                    <SchedularIcon />
                    Scheduler
                </span>
                <span>
                    <ProductivityIcon />
                    Productivity
                </span>
                <span>
                    <TodoIcon />
                    Todo</span>
                <span>
                    <TimelineIcon />
                    Timeline</span>
                <span>
                    <CalenderIcon />
                    Calender</span>
                <span>
                    <ProjectIcon />
                    Projects</span>
            </div>
        </div>
    </div>
}
