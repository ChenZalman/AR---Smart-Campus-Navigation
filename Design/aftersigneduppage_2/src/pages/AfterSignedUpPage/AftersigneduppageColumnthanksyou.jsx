import { Heading } from "../../components";
import React from "react";
import { TabPanel } from "react-tabs";

export default function AftersigneduppageColumnthanksyou() {
  return (
    <div className="mx-[146px] mb-1 md:mx-0">
      {[...Array(1)].map((_, index) => (
        <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
          <div className="w-full">
            <div className="flex rounded-[40px] bg-blue_gray-200 py-[88px] md:py-5">
              <div className="container-xs mb-[180px] flex justify-center px-14 md:px-5">
                <Heading
                  as="h2"
                  className="text-shadow-ts font-manrope text-[32px] font-normal text-teal-700 md:text-[30px] sm:text-[28px]"
                >
                  Thanks, you&#39;ve successfully signed up!
                </Heading>
              </div>
            </div>
          </div>
        </TabPanel>
      ))}
    </div>
  );
}
