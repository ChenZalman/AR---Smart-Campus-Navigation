import React from "react";
import { Link } from "react-router-dom"

const BuildingList = () => {

  const buildings = [
    { id: 1, name: "Building 1" },
    { id: 2, name: "Building 2" },
    { id: 3, name: "Building 3" },
    { id: 4, name: "Building 4" },
    { id: 5, name: "Building 5" },
    { id: 6, name: "Building 6" },
    { id: 7, name: "Building 7" },
    { id: 8, name: "Building 8" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">Campus Buildings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {buildings.map((building) => (
          <Link
            key={building.id}
            to={`/Building${building.id}`}
            className="flex h-[92px] items-center justify-center border-2 border-teal-300 rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[18px] font-medium tracking-[0.10px] text-teal-700 shadow-xs hover:bg-teal-700 hover:text-white transition-colors duration-300"
          >
            {building.name}
          </Link>
        ))}
      </div>
    </div>

  )
  
  };
  
  export default BuildingList;
  