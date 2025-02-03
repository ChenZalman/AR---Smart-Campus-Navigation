import { Heading } from "../../components";
import React from "react";
import { TabPanel } from "react-tabs";
import { Text } from "../../components";

export default function AboutPageView() {
  return (
    <div className="mx-[146px] mb-8 md:mx-0">
      <div className="flex bottom-0 left-0 right-0 top-0 m-auto w-[90%] rounded-[40px] bg-teal-100 border-2 border-teal-300 py-[30px] sm:py-5 shadow-lg">
        <div className="container flex flex-col items-center w-[80%] px-14 md:px-5 text-white mx-auto">
          {/* Creators Section */}
          <span className="mb-4">
            <Text
              size="texts"
              as="p"
              className="text-shadow-md text-[32px] text-teal-700 font-bold md:text-[30px] sm:text-[28px]"
            >
              CREATORS
            </Text>
          </span>
          <Text className="text-center text-[20px] text-teal-700 leading-relaxed sm:text-[18px]">
            Ofir Buchacho
            <br />
            Avi Digmi
            <br />
            Pavel Sagalov
            <br />
            Chen Zalman
            <br />
            Dvir Uliel
          </Text>

          {/* Separator */}
          <div className="my-6 w-[60px] h-[2px] bg-teal-700"></div>

          {/* Instructor Section */}
          <span className="mb-2">
            <Text
              size="texts"
              as="p"
              className="text-shadow-md text-[32px] text-teal-700 font-bold md:text-[30px] sm:text-[28px]"
            >
              INSTRUCTOR
            </Text>
          </span>
          <Text className="text-center text-teal-700 text-[20px] sm:text-[18px]">
            Itamar Mizrahi
          </Text>
        </div>
      </div>
    </div>
  );
}
