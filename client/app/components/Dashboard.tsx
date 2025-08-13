import { HeroSpan } from "./HeroSpan"
import { Navbar } from "./Navbar"
import { TaskCompnent } from "./TaskComponent"
import { Footer } from "./Footer"
import { Middle } from "./Middle"

export const Dashboard = () => {
    return <div className="">
        <div className="py-5 px-15">
            <Navbar />
            <HeroSpan />
            <TaskCompnent />
            <Middle />
            <Footer />
        </div>
    </div>
}

