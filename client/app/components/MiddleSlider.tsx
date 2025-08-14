import Image from "next/image"
import notesIcon from '../assets/notes.svg'
import { ManagementIcon } from "../Icons/managementIcon"
import doneButton from '../assets/done-button.svg'
 
const defaultStyles = "text-black flex flex-col gap-5 mt-10 p-6 w-102 border border-gray-400 rounded-lg"
const spanStyles = "flex gap-3 items-center text-center"
const imageStyle = "size-10 text-black"

export const MiddleSlider = () => {
    return <div className="flex gap-10">
        <div className={defaultStyles}>
            <span className={spanStyles}>
                <ManagementIcon />
                <span className="text-2xl">Link Management</span>
            </span>
            <span className="text-gray-800">Never lose important bookmarks with smart categorization, easy retrieval, and tagging.</span>
        </div>

        <div className={defaultStyles}>
            <span className={spanStyles}>
                <Image src={notesIcon} className={imageStyle} alt="notesIcon" />
                <span>Quick Notes</span>
            </span>
            <span>Capture thoughts instantly with powerful note-taking, organization, and syncing features.</span>
        </div>

        <div className={defaultStyles}>
            <span className={spanStyles}>
                <Image src={doneButton} className={imageStyle} alt="notesIcon" />
                <span>Smart Todo List</span>
            </span>
            <span>Organize tasks your way with intelligent task management, reminders, and prioritization.</span>
        </div>
    </div>
}
