import { LeafIcon } from "../Icons/LeafIcon"
import { SunIcon } from "../Icons/SunIcon"

export const Navbar = () => {
    return <div className="border border-gray-100 shadow-2xs rounded-lg p-3 flex items-center justify-between hover:shadow-2xl">
        <div className="flex items-center">
            <LeafIcon />
            <span className="text-gray-900 text-2xl">tymeline</span>
        </div>
        <div className="flex items-center gap-6 cursor-pointer">
            <SunIcon />
            <span className="bg-white border border-gray-400 text-gray-900 rounded py-2 px-4 text-xl hover:shadow-2xl">
                Log in
            </span>
            <span className="bg-orange-400 border border-gray-400 rounded py-2 px-4 text-xl font-semibold">
                Sign up
            </span>
        </div>
    </div>
}

