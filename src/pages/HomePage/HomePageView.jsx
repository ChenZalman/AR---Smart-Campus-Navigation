import { Text, Img } from "../../components";
import React from "react";

export default function HomePageView() {
  return (
    <>
      <div className="w-full">
        <div>
          {/* Main container */}
          <div className="relative mt-[-80px] h-[560px]">
            {/* Outer container with background and shadow */}
            <div className="absolute bottom-0 left-0 right-0 top-0 mx-auto mt-20 h-[440px] w-[75%] rounded-[40px] bg-teal-100 border-2 border-teal-300 shadow-lg" />
            
            {/* Image container */}
            <div className="absolute left-28 top-3 m-auto flex h-[540px] w-[60%] items-end justify-end bg-[url(/public/images/img_group_2.png)] bg-cover bg-no-repeat py-[132px] pl-14 pr-[150px] md:h-auto md:p-5">
              <Img
                src="images/img_speechbubble.svg"
                alt="Speechbubble"
                className="mt-[194px] h-[150px] w-[18%] object-contain"
              />
            </div>

            {/* Bubble chat */}
            <div className="absolute right-[16%] top-[25%] m-auto flex rounded-[112px] bg-bubble_gray-light px-4 pr-[100px] shadow-md md:py-5 p-4">
              <Text
                as="p"
                className="text-shadow-md mb-6 p-6 font-manrope text-[28px] font-bold text-teal-700 md:text-[24px] sm:text-[22px]"
              >
                <>
                  Hi I&#39;m Joe, <br />
                  Welcome to Holon Institute of Technology. <br />
                  Ready to get to know the area?
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
