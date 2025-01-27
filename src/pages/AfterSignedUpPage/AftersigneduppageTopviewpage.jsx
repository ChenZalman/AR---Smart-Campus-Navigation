import { Heading, Text, Img } from "../../components";
import React from "react";
import { TabList, Tab } from "react-tabs";

export default function AftersigneduppageTopviewpage() {
  return (
    <div className="h-[466px] rounded-bl-[30px] rounded-br-[30px] bg-[url(/public/images/img_topviewpage.png)] bg-cover bg-no-repeat md:h-auto">
      <div className="mt-7 flex flex-col gap-28 md:gap-[84px] sm:gap-14">
        <div className="ml-8 mr-[38px] md:mx-0">
          <div className="flex flex-col items-center gap-[58px] sm:gap-[29px]">
            <div className="flex items-center justify-between gap-5 self-stretch">
              <div className="flex w-[6%] justify-center gap-2.5 rounded-[14px] bg-teal-700 p-2.5 shadow-xs">
                <div className="w-full rounded-[12px] bg-blue_gray-200 shadow-sm">
                  <div className="flex flex-col items-center rounded-[12px]">
                    <Img src="images/img_icon.svg" alt="Icon" className="h-[24px] w-[24px]" />
                  </div>
                </div>
                <div className="w-full rounded-[12px] bg-blue_gray-200 shadow-sm">
                  <div className="flex flex-col items-center rounded-[12px]">
                    <Img src="images/img_search.svg" alt="Search" className="h-[24px] w-[24px]" />
                  </div>
                </div>
              </div>
              <Img src="images/img_whitelogohit.png" alt="Whitelogohit" className="h-[58px] w-[14%] object-contain" />
            </div>
            <div className="container-xs md:px-5">
              <div>
                <div className="flex flex-col items-center">
                  <Text
                    size="texts"
                    as="p"
                    className="font-titanone text-[64px] font-normal text-teal-700 md:text-[48px]"
                  >
                    AR - Smart Campus Navigation
                  </Text>
                  <Text
                    as="p"
                    className="relative mt-[-82px] font-titanone text-[65px] font-normal text-white-a700 md:text-[48px]"
                  >
                    AR - Smart Campus Navigation
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TabList className="flex gap-[42px] rounded-[30px] bg-teal-700 px-9 py-3.5 sm:px-5">
            <Tab className="flex flex-wrap">
              <div className="p-9 text-[14px] font-medium tracking-[0.10px] text-teal-700 sm:p-5">HOME</div>
              <div className="ml-12 p-9 text-[14px] font-medium tracking-[0.10px] text-teal-700 sm:p-5">LOGIN</div>
              <div className="ml-[42px] p-9 text-[14px] font-medium tracking-[0.10px] text-teal-700 sm:p-5">
                SIGN UP
              </div>
              <div className="ml-[38px] p-9 text-[14px] font-medium tracking-[0.10px] text-teal-700 sm:p-5">ABOUT</div>
            </Tab>
          </TabList>
        </div>
      </div>
    </div>
  );
}
