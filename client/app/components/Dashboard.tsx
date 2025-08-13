import { Footer } from "./footer"
import { HeroSpan } from "./HeroSpan"
import { Navbar } from "./Navbar"
import { TaskCompnent } from "./TaskComponent"

export const Dashboard = () => {
    return <div className="">
        <div className="py-5 px-15">
            <Navbar />
            <HeroSpan />
            <TaskCompnent />
            <Footer />
        </div>
    </div>
}

