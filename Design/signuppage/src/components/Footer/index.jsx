import { Button, Img, Text } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex flex-col mb-[46px] py-7 mx-[146px] md:mx-0 sm:py-5 bg-blue_gray-200 rounded-[40px]`}
    >
      <div className="container-xs flex flex-col items-center px-14 md:px-5">
        <Text
          size="texts"
          as="p"
          className="text-shadow-ts text-[32px] font-normal text-teal-700 md:text-[30px] sm:text-[28px]"
        >
          PLEASE FILL IN YOUR DETAILS
        </Text>
        <div className="flex w-[48%] justify-center md:w-full">
          <div className="flex w-full flex-wrap gap-[18px] border-b border-solid border-blue_gray-700_56 py-2">
            <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-teal-700">
              FULL NAME
            </Text>
            <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-gray-800_4c">
              Israel Israeli
            </Text>
          </div>
        </div>
        <div className="mt-1.5 flex w-[48%] justify-center md:w-full">
          <div className="flex w-full flex-wrap gap-4 border-b border-solid border-blue_gray-700_56 py-2.5">
            <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-teal-700">
              USERNAME
            </Text>
            <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-gray-800_4c">
              israel1234
            </Text>
          </div>
        </div>
        <div className="mt-1.5 flex w-[48%] justify-center md:w-full">
          <div className="flex w-full items-center justify-between gap-5 border-b border-solid border-blue_gray-700_56 py-2 sm:flex-col">
            <Text as="p" className="self-end text-[17px] font-normal tracking-[-0.43px] text-teal-700 sm:self-auto">
              PASS
            </Text>
            <div className="mr-4 flex w-[78%] items-center justify-between gap-5 sm:mr-0 sm:w-full">
              <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-gray-800_4c">
                ********
              </Text>
              <Img src="images/img_eye_off.svg" alt="Eyeoff" className="h-[24px] w-[24px] self-end" />
            </div>
          </div>
        </div>
        <div className="mt-1.5 flex w-[48%] justify-center md:w-full">
          <div className="flex w-full flex-wrap gap-[54px] border-b border-solid border-blue_gray-700_56 py-2 md:gap-5">
            <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-teal-700">
              EMAIL
            </Text>
            <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-gray-800_4c">
              example@domain.com
            </Text>
          </div>
        </div>
        <div className="mt-1.5 flex w-[48%] justify-center md:w-full">
          <div className="flex w-full flex-wrap gap-[46px] border-b border-solid border-blue_gray-700_56 py-2.5">
            <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-teal-700">
              PHONE
            </Text>
            <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-gray-800_4c">
              0 - 9
            </Text>
          </div>
        </div>
        <Button
          leftIcon={<Img src="images/img_lock.svg" alt="Lock" className="h-[18px] w-[18px]" />}
          className="mt-[30px] flex h-[40px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-[20px] bg-teal-700 pl-1.5 pr-3.5 text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-blue_gray-200 shadow-xs"
        >
          SIGN UP
        </Button>
      </div>
    </footer>
  );
}
