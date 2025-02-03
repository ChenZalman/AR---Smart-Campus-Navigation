import React from "react"
import { Link } from "react-router-dom"
import HebrewSpeaking3DAvatar from '../../HebrewSpeaking3DAvatar';
import { useState,useEffect } from "react";

function Building5() {
  const [position, setPosition] = useState(430); // Initial position
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get scroll position
      // if (scrollY > 460 && scrollY < 1340) {
      //   setPosition(scrollY + 30);
      // } else 
      if (scrollY >= 1340) {
        setPosition(1140);
      } else {
        setPosition(630);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  // Runs only once on mount

  return (
    <div className="flex">
      <div style={{position: "absolute",top: `${position}px`,right: "100px", width: "15%"}}>
        <HebrewSpeaking3DAvatar/>
      </div>

      <div className="flex flex-wrap building-container max-w-7xl ml-20 px-4 py-12 bg-gray-50 w-[80%] rounded-[40px] bg-teal-100 border-2 border-teal-300 shadow-xl mb-10">
      {/* Title Section */}
      <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-8 text-center w-full border-b-2 pb-4 border-teal-300">
        בניין 5 - מרגלית
      </h1>

      {/* Content Section (Image and Text in Same Row) */}
      <div className="flex w-full gap-10">
        {/* Image */}
        <img
          src="/images/buildingFive.jpeg"
          alt="Building 5"
          className="rounded-[20px] shadow-lg object-cover h-[450px] w-[50%] h-auto ml-10"
        />

        {/* Text Section */}
        <div className="w-[50%] mr-10">
          <h2 className="text-2xl font-semibold text-teal-700 mb-6 text-center pr-10 underline">
            :בבניין זה ניתן למצוא
          </h2>
          <ul
            className="space-y-6 text-teal-700 font-roboto text-lg"
            style={{ direction: "rtl", textAlign: "right" }}
          >
            {[
              { floor: "קומת קרקע", items: ["מועדון האגודה", "קפיטריה", "מזכירות האגודה", "הפקולטה לטכנולוגיות למידה"] },
              { floor: "קומה 2", items: ["מנהל הסטודנטים", "הפקלוטה להנדסת חשמל וטכנולוגיה", "מדור שכר לימוד", "דקנאט הסטודנטים",
                   "היחידה להכוון תעסוקתי", "לשכת הרקטור", "הפקלוטה לטכנולוגיות למידה", "מכינה קדם אקדמית", "בית הספר ללימודי תעודה", "מדור שכר לימוד"] },
              { floor: "קומה 3", items: ["ספרייה", "המחלקה ללימודים רב תחומיים"] },
            ].map((section, index) => (
              <li key={index} className="mb-4">
                <h3 className="font-bold text-xl mb-2 text-teal-900 underline">{section.floor}</h3>
                <ul className="list-disc list-inside space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Return Button */}
      <div className="mt-12 flex justify-center w-full">
        <Link
          to="/Buildings"
          className="flex items-center justify-center h-16 px-8 rounded-full bg-teal-600 text-white text-lg font-medium tracking-wide shadow-lg hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transform hover:scale-105 transition-transform duration-300"
        >
          &#8592; חזרה לרשימת הבניינים
        </Link>
      </div>
      </div>
    </div>

  )
}

export default Building5

