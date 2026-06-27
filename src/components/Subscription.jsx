function Subscription() {
    return (
        <div className="flex flex-col items-center gap-5 py-16 text-center bg-gradient-to-r from-orange-950 to-gray-900 rounded-2xl my-10 px-6">
            <p className="text-orange-400 text-sm font-semibold tracking-widest">START TODAY</p>
            <div className="text-3xl md:text-4xl font-bold max-w-xl">
                Ready to become a <span className="text-orange-500">Coding Ninja?</span>
            </div>
            <p className="text-gray-400 text-[16px] max-w-md">
                Join 1.5M+ learners. Get access to 500+ courses, live mentorship & placement support.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg">
                <input
                    className="border border-gray-500 bg-gray-900 text-white p-3 rounded w-full sm:flex-1 focus:outline-none focus:border-orange-500"
                    type="email"
                    placeholder="Enter your email address"
                />
                <button className="bg-orange-500 hover:bg-orange-600 transition text-white text-[16px] font-semibold py-3 px-6 rounded w-full sm:w-auto">
                    Get Started Free →
                </button>
            </div>
            <p className="text-gray-500 text-xs">No credit card required. 7-day free trial included.</p>
        </div>
    );
}

export default Subscription;