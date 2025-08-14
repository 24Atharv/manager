export default function signin() {
    return <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col text-center mt-8">
            <span className="text-3xl">Log in to your account</span>
            <span className="text-sm text-gray-400 leading-5">Welcome back! Please enter your details.</span>
        </div>
        <div className="flex flex-col gap-4">
            <input type="text" placeholder="Email" className="p-2 rounded bg-gray-800" />
            <input type="text" placeholder="Password" className="p-2 rounded bg-gray-800" />
        </div>
        <button className="px-10 py-2 bg-blue-200 rounded-2xl text-black">Log to your account</button>
        <div className="flex items-center w-76">
            <hr className="flex-grow h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="flex-grow h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <span className="py-2 px-10 rounded-xl bg-gray-800">
            Continue with Goggle
        </span>
        <span className="text-sm">Don't have an account? <span className="text-blue-200">Sign up</span></span>
    </div>
}
