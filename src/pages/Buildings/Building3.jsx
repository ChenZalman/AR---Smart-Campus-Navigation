import React from "react"
import { Link } from "react-router-dom"

function Building3() {
  return (
    <div className="building-container max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-8 text-center">בניין 3 - רובינשטיין</h1>

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
                { floor: "קומה 1", items: ["כיתות מחשבים", "מרכז המחשבים"] },
                { floor: "קומה 2", items: ["אודיטוריום", "מרכז חדשנות ויזמות - FUTURE"] },
                { floor: "קומה 3", items: ["לשכת נשיא", "לשכת מנכ''ל", "לשכת סגן נשיא", "מערך השיווק ויחסי ציבור", "מחלקת כספים", "מחלקת משאבי אנוש", "חדר ישיבות"] },
                { floor: "קומה 4", items: ["אולם כנסים"] },
                
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
                src="/images/buildingThree.jpeg"
                alt="Building 3"
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
  )
}

export default Building3

