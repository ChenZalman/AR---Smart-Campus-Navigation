import { Heading } from "../../components";
import React from "react";
import { TabPanel } from "react-tabs";

export default function AboutpageColumndescripti() {
  return (
    <div className="mx-[146px] mb-1 md:mx-0">
      {[...Array(1)].map((_, index) => (
        <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
          <div className="w-full">
            <div className="flex rounded-[40px] bg-blue_gray-200 py-[30px] sm:py-5">
              <div className="container-xs flex justify-center px-14 md:px-5">
                {/* <Heading as="h2" className="text-shadow-ts font-manrope text-[32px] font-normal text-teal-700 md:text-[30px] sm:text-[28px]" > */}
                  <span>
                    <>
                      CREATORS
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="text-[20px]">
                    <>
                      Ofir Buchacho
                      <br />
                      Avi Digmi <br />
                      Chen Zalman
                      <br />
                      Pavel Sagalov
                      <br />
                      <br />
                      <br />
                    </>
                  </span>
                  <span>
                    <>
                      INSTRUCTOR
                      <br />
                      <br />
                    </>
                  </span>
                  <span className="text-[20px]">Itamar Mizrahi</span>
                {/* </Heading> */}
              </div>
            </div>
          </div>
        </TabPanel>
      ))}
    </div>
  );
}
