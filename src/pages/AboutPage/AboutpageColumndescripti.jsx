import { Heading } from "../../components";
import React from "react";
import { TabPanel } from "react-tabs";
import { Text } from "../../components";
export default function AboutpageColumndescripti() {
  return (
    <div className="mx-[146px] mb-1 md:mx-0">
          <div className="w-full">
            <div className="flex bottom-0 left-0 right-0 top-0 m-auto h-[464px] w-[80%] rounded-[40px] bg-blue_gray-200 py-[30px] sm:py-5">
              <div className="container-xs flex flex-col align-center items-center px-14 md:px-5">
                  <span>
                      <Text
                        size="texts"
                        as="p"
                        className="text-shadow-ts text-[32px] font-normal text-teal-700 md:text-[30px] sm:text-[28px]"
                      >
                          CREATORS
                      </Text>
                  </span>
                  <Text className="text-[#000000] text-center text-[20px]">
                      Ofir Buchacho
                      <br />
                      Avi Digmi
                      <br />
                      Pavel Sagalov
                      <br />
                      Chen Zalman
                      <br />
                      <br />
                      <br />
                  </Text>
                  <span>
                  <Text
                    size="texts"
                    as="p"
                    className="text-shadow-ts text-[32px] font-normal text-teal-700 md:text-[30px] sm:text-[28px]"
                  >
                      INSTRUCTOR
                    </Text>
                  </span>
                  <Text className="text-[#000000] text-center text-[20px]">
                  Itamar Mizrahi
                  </Text>
              </div>
            </div>
          </div>
    </div>
  );
}
