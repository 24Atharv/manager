import { HeroSpan } from "./HeroSpan"
import { Navbar } from "./Navbar"
import { TaskCompnent } from "./TaskComponent"
import { Footer } from "./Footer"
import { Middle } from "./Middle"

export const Dashboard = () => {
    return <div className="w-full bg-white">
        <div className="w-full max-w-full mx-auto sm:px-4">
            <div className="px-5 py-5 sm:py-5 sm:px-15">
                <Navbar />
                <HeroSpan />
                <TaskCompnent />
                <Middle />
                <Footer />
            </div>
        </div>
    </div>
}

