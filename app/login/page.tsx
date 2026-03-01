"use client";

import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

        // Later you can connect this to your backend / API
    };

    return (
        <section className="flex items-center justify-center min-h-screen bg-gray-50 px-6">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-green-900 mb-6">
                    Login
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-900"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col">
                        <label className="text-sm text-gray-600 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-green-900"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-green-900 text-white py-3 rounded-lg font-semibold transition-all hover:bg-black"
                    >
                        Log in
                    </button>
                </form>

                {/* Extra Links */}
                <div className="text-center mt-6 text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-green-900 font-semibold hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;