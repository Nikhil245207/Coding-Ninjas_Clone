import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoPlus } from "react-icons/go";

function Questions() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const questionAns = [
        {
            question: "What is Coding Ninjas?",
            answer:
                "Coding Ninjas is India's #1 online coding education platform. We offer structured courses in DSA, Web Development, AI/ML, System Design and more — taught by experts from top tech companies.",
        },
        {
            question: "Who are the courses designed for?",
            answer:
                "Our courses are designed for everyone — from absolute beginners to experienced developers looking to upskill. Whether you're a college student preparing for placements or a working professional, we have the right path for you.",
        },
        {
            question: "Do you offer a placement guarantee?",
            answer:
                "Yes! Our flagship programs come with a placement guarantee. If you don't get placed in a tech company after completing the course and fulfilling the criteria, we offer a full refund.",
        },
        {
            question: "Can I access courses on mobile?",
            answer:
                "Absolutely! Coding Ninjas is available on Web, Android and iOS. You can learn, practice problems, and attend live classes from any device, anywhere.",
        },
        {
            question: "What is the refund policy?",
            answer:
                "We offer a 7-day money-back guarantee on most courses. If you're not satisfied within the first 7 days of purchase, you can request a full refund — no questions asked.",
        },
    ];

    return (
        <div className="py-10">
            <p className="text-orange-500 text-sm font-semibold tracking-widest mb-1">GOT QUESTIONS?</p>
            <div className="text-2xl font-bold mb-6">Frequently Asked Questions</div>
            {questionAns.map((item, index) => {
                return (
                    <div key={index} className="mb-2">
                        <div
                            onClick={() => handleToggle(index)}
                            className="cursor-pointer text-[18px] bg-gray-800 hover:bg-gray-700 transition p-5 flex items-center justify-between px-6 rounded-t"
                        >
                            <div>{item.question}</div>
                            <div className="text-2xl text-orange-400">
                                {activeIndex === index ? <RxCross2 /> : <GoPlus />}
                            </div>
                        </div>
                        <div
                            className={`bg-gray-800 overflow-hidden text-gray-300 text-[15px] transition-all duration-500 px-6 ${activeIndex === index ? "max-h-[300px] py-4" : "max-h-0"
                                }`}
                        >
                            {item.answer}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Questions;