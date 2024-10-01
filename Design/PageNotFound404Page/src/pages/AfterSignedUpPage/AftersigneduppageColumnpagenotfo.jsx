import { Text } from "../../components";
import React from "react";
import { TabPanel } from "react-tabs";

export default function AftersigneduppageColumnpagenotfo() {
  return (
    <div className="mb-1 ml-[150px] mr-[146px] md:mx-0">
      {[...Array(1)].map((_, index) => (
        <TabPanel key={`tab-panel${index}`} className="absolute justify-center">
          <div className="w-full">
            <div className="flex rounded-[40px] bg-blue_gray-200 py-[158px] shadow-xs md:py-5">
              <div className="container-xs flex justify-center px-[30px] md:px-5">
                <Text
                  as="p"
                  className="text-shadow-ts font-manrope text-[96px] font-normal text-teal-700 md:text-[48px]"
                >
                  Page not found 404
                </Text>
              </div>
            </div>
          </div>
        </TabPanel>
      ))}
    </div>
  );
}
