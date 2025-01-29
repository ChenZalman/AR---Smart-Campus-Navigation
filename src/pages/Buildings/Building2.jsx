import React from "react"
import { Link } from "react-router-dom"
import HebrewSpeaking3DAvatar from '../../HebrewSpeaking3DAvatar';
import { useState,useEffect } from "react";
import { useBuildingContext } from 'Hooks/useBuildingContext';

function Building2() {

  const [position, setPosition] = useState(430); // Initial position
  const {dispatch, buildingInfo} = useBuildingContext();
  const [paragraph,setParagraph] = useState(buildingInfo);

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 430 && window.scrollY < 1340)
          setPosition(window.scrollY + 30); // Adjust based on scroll
        else if(window.scrollY >= 1340)
          setPosition(1040);
        else
          setPosition(430);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [window.scrollY]);
  

useEffect(() => {
    setParagraph("בניין 2 - רדיו קסם")
    dispatch({type: 2 , payload: {discription: "בניין 2 - רדיו קסם"}});
  },[]);

  return (
    <div className="flex">
        <div style={{position: "absolute",top: `${position}px`,right: "100px",}}>
          <HebrewSpeaking3DAvatar/>
        </div>
    <div className="building-container max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-8 text-center">בניין 2</h1>

      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-1/2 flex-shrink-0 order-2 lg:order-1">
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-teal-100">
            <h2 className="text-2xl font-semibold text-teal-800 mb-6 text-center">בבניין זה ניתן למצוא</h2>
            <ul
              className="space-y-6 text-teal-700 font-roboto text-lg"
              style={{ direction: "rtl", textAlign: "right" }}
            >
              {[
                { floor: "קומה 1", items: ["רדיו קס''ם - FM 106"] },
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
                src="/images/buildingTwo.jpeg"
                alt="Building 2"
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

export default Building2

