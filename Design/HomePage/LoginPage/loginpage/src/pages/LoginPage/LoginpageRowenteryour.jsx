import { Text, Button, Img, Input } from "../../components";
import React from "react";

export default function LoginpageRowenteryour() {
  return (
    <div className="mb-1 flex justify-center px-14 md:px-5">
      <div className="flex w-[86%] flex-col items-center justify-center rounded-[40px] bg-blue_gray-200 py-[42px] shadow-xs md:w-full md:py-5">
        <div className="container-xs flex flex-col items-center gap-[18px] px-14 md:px-5">
          <Text
            size="texts"
            as="p"
            className="text-shadow-ts text-[32px] font-normal text-teal-700 md:text-[30px] sm:text-[28px]"
          >
            ENTER YOUR CREDENTIALS
          </Text>
          <div className="flex w-[48%] justify-center md:w-full">
            <div className="flex w-full flex-wrap gap-[54px] border-b border-solid border-blue_gray-700_56 py-2 md:gap-5">
              <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-teal-700">
                EMAIL
              </Text>
              <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-gray-800_4c">
                example@domain.com
              </Text>
            </div>
          </div>
          <div className="flex w-[48%] justify-center md:w-full">
            <Input
              type="password"
              name="email"
              placeholder={`PASS`}
              suffix={<Img src="images/img_eye_off.svg" alt="Eye Off" className="h-[24px] w-[24px]" />}
              className="flex h-[48px] w-full items-center justify-center gap-4 border-b border-solid border-blue_gray-700_56 px-2.5 text-[17px] tracking-[-0.43px] text-teal-700"
            />
          </div>
          <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-teal-700">
            Forgot your pass? Click here
          </Text>
          <Button
            leftIcon={<Img src="images/img_lock.svg" alt="Lock" className="h-[18px] w-[18px]" />}
            className="flex h-[40px] min-w-[100px] flex-row items-center justify-center gap-2 rounded-[20px] bg-teal-700 pl-3 pr-5 text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-blue_gray-200 shadow-xs"
          >
            LOGIN
          </Button>
          <div className="flex flex-col items-center">
            <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-teal-700">
              Don’t have an Account? SIGN UP NOW!
            </Text>
            <a href="#">
              <Text as="p" className="text-[17px] font-normal tracking-[-0.43px] text-teal-700">
                Terms of Service
              </Text>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
