import { useState } from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="px-[60px] py-4 bg-black text-white relative z-10">
                {/* Background gradient instead of image */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-950 to-black opacity-60"></div>

                <div className="relative z-10">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center">
                        <div className="text-3xl font-bold text-orange-500">
                            ⚔️ CodingNinjas
                        </div>

                        <ul className="hidden md:flex gap-8 text-[15px] font-medium list-none">
                            <li className="hover:text-orange-400 cursor-pointer">Courses</li>
                            <li className="hover:text-orange-400 cursor-pointer">Practice</li>
                            <li className="hover:text-orange-400 cursor-pointer">Jobs</li>
                            <li className="hover:text-orange-400 cursor-pointer">Mentorship</li>
                            <li className="hover:text-orange-400 cursor-pointer">Blog</li>
                        </ul>

                        <div className="flex gap-3 items-center">
                            <button className="border border-orange-500 text-orange-500 px-4 py-1 rounded hover:bg-orange-500 hover:text-white transition">
                                Log In
                            </button>
                            <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition">
                                Sign Up Free
                            </button>
                        </div>

                        <button
                            className="md:hidden flex flex-col gap-1"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span className="w-6 h-[2px] bg-white"></span>
                            <span className="w-6 h-[2px] bg-white"></span>
                            <span className="w-6 h-[2px] bg-white"></span>
                        </button>
                    </div>

                    {menuOpen && (
                        <ul className="md:hidden flex flex-col gap-3 mt-4 text-[15px] list-none">
                            <li className="hover:text-orange-400 cursor-pointer">Courses</li>
                            <li className="hover:text-orange-400 cursor-pointer">Practice</li>
                            <li className="hover:text-orange-400 cursor-pointer">Jobs</li>
                            <li className="hover:text-orange-400 cursor-pointer">Mentorship</li>
                            <li className="hover:text-orange-400 cursor-pointer">Blog</li>
                        </ul>
                    )}

                    {/* HERO SECTION */}
                    <div className="py-24 flex flex-col items-center text-center">
                        <span className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full mb-5 inline-block">
                            🔥 India's #1 Coding Platform
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold max-w-3xl leading-tight">
                            Learn to <span className="text-orange-500">Code.</span> Get{" "}
                            <span className="text-orange-500">Hired.</span>
                        </h1>
                        <p className="py-5 text-gray-300 text-[18px] max-w-xl">
                            Master DSA, Web Dev, System Design & more with expert-led courses
                            trusted by 1.5 Million+ learners.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 mt-2">
                            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded text-lg font-semibold">
                                Explore Courses →
                            </button>
                            <button className="border border-white hover:border-orange-400 hover:text-orange-400 transition text-white px-8 py-3 rounded text-lg">
                                Try for Free
                            </button>
                        </div>

                        <div className="flex gap-12 mt-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500">1.5M+</div>
                                <div className="text-gray-400 text-sm">Learners</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500">500+</div>
                                <div className="text-gray-400 text-sm">Courses</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-500">95%</div>
                                <div className="text-gray-400 text-sm">Placement Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;