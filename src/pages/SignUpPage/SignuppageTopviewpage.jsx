import { Button, Text, Img } from "../../components";
import React from "react";

export default function SignuppageTopviewpage() {
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
                    size="textmd"
                    as="p"
                    className="font-titanone text-[64px] font-normal text-teal-700 md:text-[48px]"
                  >
                    AR - SMART CAMPUS NAVIGATION
                  </Text>
                  <Text
                    size="textlg"
                    as="p"
                    className="relative mt-[-82px] font-titanone text-[65px] font-normal text-white-a700 md:text-[48px]"
                  >
                    AR - SMART CAMPUS NAVIGATION
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="rounded-[30px] bg-teal-700 p-3.5">
            <div className="flex gap-9 md:flex-col">
              <Button className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5">
                HOME
              </Button>
              <Button className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5">
                LOGIN
              </Button>
              <Button className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5">
                SIGN UP
              </Button>
              <Button className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5">
                ABOUT
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
