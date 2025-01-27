import React from "react"
import { Link } from "react-router-dom"
import HebrewSpeaking3DAvatar from '../../HebrewSpeaking3DAvatar';
import { useState,useEffect } from "react";

function Building1() {

  const [position, setPosition] = useState(430); // Initial position

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 430 && window.scrollY < 1300)
        setPosition(window.scrollY); // Adjust based on scroll
      // if(window.scrollY < 20000)
      //   setPosition(430);
      else
        setPosition(430);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <div className="flex">
        <div style={{position: "absolute",top: `${position}px`,right: "10px",transition: "top 0.2s ease-out",}}>
          <HebrewSpeaking3DAvatar/>
        </div>

      <div className="building-container max-w-7xl mx-auto px-4 py-12 bg-gray-50">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-8 text-center">בניין 1 - גולומב</h1>
        
        

        <div className="flex flex-col lg:flex-row items-start gap-10">
          {/* <div className="w-full lg:w-1/2 flex-shrink-0 order-2 lg:order-1">
          </div> */}

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100">
              <h2 className="text-2xl font-semibold text-teal-800 mb-6 text-center">בבניין זה ניתן למצוא</h2>
              <ul
                className="space-y-6 text-teal-700 font-roboto text-lg"
                style={{ direction: "rtl", textAlign: "right" }}
              >
                {[
                  { floor: "קומת קרקע", items: ["המרכז לקידום הסטודנט", "קפיטריה", "מרכז לוגיסטי"] },
                  { floor: "קומה 3", items: ["המחלקה למדעי הנתונים"] },
                  { floor: "קומה 5", items: ["מעבדת מחשבים"] },
                  { floor: "קומה 6", items: ["הפקולטה להנדסת תעשייה וניהול טכנולוגיה"] },
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
        </div>

              <img
                  src="/images/buildingOne.jpeg"
                  alt="Building 1"
                  className="rounded-[20px] shadow-lg object-cover w-[600px] h-auto"
              />

        <div className="mt-12 flex justify-center">
          <Link
            to="/Buildings"
            className="flex items-center justify-center h-16 px-8 rounded-full bg-teal-600 text-white text-lg font-medium tracking-wide shadow-lg hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            &#8592; חזרה לרשימת הבניינים
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Building1

