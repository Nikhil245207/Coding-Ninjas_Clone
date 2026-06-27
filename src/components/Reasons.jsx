import { FaCode } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineLeaderboard } from "react-icons/md";
import { RiStarSmileLine } from "react-icons/ri";

function Reasons() {
    const reasons = [
        {
            title: "Expert-Led Courses",
            detail: "Learn from engineers at Google, Amazon & Microsoft. Real-world curriculum built for placements.",
            icon: <FaUserTie />,
        },
        {
            title: "1000+ Coding Problems",
            detail: "Practice on our built-in judge with curated DSA problems from easy to hard — just like real interviews.",
            icon: <FaCode />,
        },
        {
            title: "Placement Guarantee",
            detail: "Get placed in a top tech company or get your money back. 95% of our students land their dream job.",
            icon: <MdOutlineLeaderboard />,
        },
        {
            title: "Peer Community",
            detail: "Join 1.5M+ learners, participate in contests, doubt sessions, and study groups — grow together.",
            icon: <RiStarSmileLine />,
        },
    ];

    return (
        <div className="mt-10 py-10">
            <p className="text-orange-500 text-sm font-semibold tracking-widest mb-1">WHY CODING NINJAS?</p>
            <div className="font-bold text-2xl mb-2">More reasons to join</div>
            <p className="text-gray-400 mb-8 text-[15px]">We don't just teach — we transform beginners into job-ready engineers.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {reasons.map((reason, index) => {
                    return (
                        <div
                            key={index}
                            className="min-h-[280px] rounded-2xl p-5 bg-gradient-to-b from-orange-950 to-gray-900 relative hover:scale-105 transition-transform duration-300"
                        >
                            <div className="font-bold text-[18px] mb-3">{reason.title}</div>
                            <div className="text-gray-400 text-[15px]">{reason.detail}</div>
                            <div className="text-6xl right-0 mr-6 absolute opacity-40 bottom-0 mb-5 text-orange-500">
                                {reason.icon}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Reasons;