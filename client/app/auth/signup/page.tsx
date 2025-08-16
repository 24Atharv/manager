'use client'
import { useState } from "react";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function authHandler() {
    const res = await fetch('http://localhost:4000/auth/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    const data = await res.json()
    console.log(data);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      <div className="flex flex-col gap-2 justify-center items-center max-w-sm w-full">
        <div className="flex flex-col gap-3 text-center">
          <span className="text-2xl font-bold">Create your account</span>
          <span className="text-gray-400">
            Your journey to organized productivity starts here.
          </span>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <input onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="p-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
            className="p-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 rounded-xl bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button onClick={authHandler} className="py-3 px-10 text-black bg-gray-200 rounded-xl hover:bg-gray-300 transition">
          Create account
        </button>

        <div className="flex items-center w-full">
          <hr className="flex-grow h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="mx-4 text-gray-500">OR</span>
          <hr className="flex-grow h-px bg-gray-200 border-0 dark:bg-gray-700" />
        </div>

        <span className="py-2 px-10 rounded-xl bg-gray-800">
          Continue with Goggle
        </span>
      </div>

      <span className="mt-5">Already have an account? <span className="text-blue-500">Log in</span></span>
    </div>
  );
}
