import { HeroSpan } from "./HeroSpan"
import { Navbar } from "./Navbar"
import { TaskCompnent } from "./TaskComponent"
import { Footer } from "./Footer"
import { Middle } from "./Middle"

export const Dashboard = () => {
    return <div className="w-full bg-white">
        <div className="w-full max-w-full md:max-w-[1024px] mx-auto px-4">
            <div className="py-5 px-15">
                <Navbar />
                <HeroSpan />
                <TaskCompnent />
                <Middle />
                <Footer />
            </div>
        </div>
    </div>
}

