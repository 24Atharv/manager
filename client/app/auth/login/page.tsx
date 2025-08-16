'use client'
import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function LoginHandler() {
        try {
            const response = await fetch("http://localhost:4000/auth/login", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json();
            if (!response.ok) {
                alert("login failed")
            }

            localStorage.setItem('token', data.token);

            alert("Login Successfull");
        }
        catch (err) {
            console.log("Error during login: ", err);
            alert("Something went wrong");
        }
    }

    return <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-col text-center mt-8">
            <span className="text-3xl">Log in to your account</span>
            <span className="text-sm text-gray-400 leading-5">Welcome back! Please enter your details.</span>
        </div>
        <div className="flex flex-col gap-4">
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="p-2 rounded bg-gray-800" />
            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" className="p-2 rounded bg-gray-800" />
        </div>
        <button onClick={LoginHandler} className="px-10 py-2 bg-blue-200 rounded-2xl text-black">Log to your account</button>
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
