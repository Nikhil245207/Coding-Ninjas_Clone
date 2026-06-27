function Footer() {
    const links = {
        Company: ["About Us", "Careers", "Press", "Blog", "Contact Us"],
        Courses: ["DSA", "Web Development", "System Design", "AI & ML", "DevOps"],
        Community: ["Discord", "Forums", "Contests", "Leaderboard", "Referral"],
        Support: ["FAQ", "Help Center", "Privacy Policy", "Terms of Use", "Refund Policy"],
    };

    return (
        <div className="pb-10 pt-16 text-[15px] text-gray-400 border-t border-gray-800">
            {/* Top */}
            <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
                {/* Brand */}
                <div className="max-w-xs">
                    <div className="text-2xl font-bold text-orange-500 mb-3">⚔️ CodingNinjas</div>
                    <p className="text-gray-500 text-sm">
                        India's #1 coding education platform. Empowering 1.5M+ learners to crack top tech companies.
                    </p>
                    <div className="flex gap-4 mt-4 text-xl">
                        <span className="cursor-pointer hover:text-orange-400">📘</span>
                        <span className="cursor-pointer hover:text-orange-400">🐦</span>
                        <span className="cursor-pointer hover:text-orange-400">📸</span>
                        <span className="cursor-pointer hover:text-orange-400">💼</span>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-10">
                    {Object.entries(links).map(([category, items]) => (
                        <div key={category}>
                            <div className="text-white font-semibold mb-3">{category}</div>
                            <ul className="list-none flex flex-col gap-2">
                                {items.map((item, i) => (
                                    <li key={i} className="hover:text-orange-400 cursor-pointer transition">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Language Selector */}
            <div className="mb-6">
                <select
                    className="text-white bg-gray-900 border border-gray-600 py-1 px-3 rounded focus:outline-none focus:border-orange-500"
                >
                    <option value="English">🌐 English</option>
                    <option value="Hindi">🇮🇳 Hindi</option>
                </select>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
                <div className="text-sm text-gray-600">© 2024 Coding Ninjas. All rights reserved.</div>
                <div className="text-sm text-gray-600">
                    Made with ❤️ in India — trusted by engineers worldwide.
                </div>
            </div>
        </div>
    );
}

export default Footer;