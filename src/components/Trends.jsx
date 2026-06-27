function Trends() {
    const courses = [
        { id: 1, title: "DSA in C++", level: "Beginner → Advanced", rating: "4.9", bg: "from-orange-950 to-gray-900", icon: "🌳" },
        { id: 2, title: "Full Stack Web Dev", level: "Beginner → Pro", rating: "4.8", bg: "from-blue-950 to-gray-900", icon: "💻" },
        { id: 3, title: "System Design", level: "Intermediate", rating: "4.9", bg: "from-purple-950 to-gray-900", icon: "🏗️" },
        { id: 4, title: "Python & AI/ML", level: "Beginner", rating: "4.7", bg: "from-green-950 to-gray-900", icon: "🤖" },
        { id: 5, title: "React Masterclass", level: "Intermediate", rating: "4.8", bg: "from-cyan-950 to-gray-900", icon: "⚛️" },
        { id: 6, title: "Java Backend Dev", level: "Beginner → Pro", rating: "4.7", bg: "from-yellow-950 to-gray-900", icon: "☕" },
        { id: 7, title: "DevOps & Cloud", level: "Intermediate", rating: "4.6", bg: "from-red-950 to-gray-900", icon: "☁️" },
        { id: 8, title: "Competitive Coding", level: "Advanced", rating: "4.9", bg: "from-pink-950 to-gray-900", icon: "🏆" },
    ];

    return (
        <div className="py-10">
            <p className="text-orange-500 text-sm font-semibold tracking-widest mb-1">TRENDING NOW</p>
            <div className="font-bold text-2xl mb-5">Top Courses by <span className="text-orange-500">1.5M+ Ninjas</span></div>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-4">
                {courses.map((course) => {
                    return (
                        <div key={course.id} className="pt-5 relative flex-shrink-0 group cursor-pointer">
                            {/* Card Thumbnail - image ki jagah gradient card */}
                            <div className={`rounded-2xl w-[180px] h-[240px] bg-gradient-to-b ${course.bg} flex items-center justify-center border border-gray-800 group-hover:border-orange-500 transition-all duration-300`}>
                                <div className="text-5xl">{course.icon}</div>
                            </div>
                            {/* Big Number */}
                            <div className="text-8xl font-bold absolute bottom-16 left-[-20px] text-stroke-white select-none">
                                {course.id}
                            </div>
                            {/* Course Info */}
                            <div className="mt-2 w-[180px]">
                                <div className="font-semibold text-sm text-white">{course.title}</div>
                                <div className="text-gray-400 text-xs">{course.level}</div>
                                <div className="text-orange-400 text-xs">⭐ {course.rating}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Trends;