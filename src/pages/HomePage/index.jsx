import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import HomepageRow from "./HomepageRow";
import React from "react";

export default function HomePagePage() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div>
          {/* <HomepageRow /> */}
          <div className="relative mt-[-74px] h-[820px]">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[464px] w-[80%] rounded-[40px] bg-blue_gray-200" />
            <div className="absolute left-0 top-0 m-auto flex h-[666px] w-[78%] items-end justify-end bg-[url(/public/images/img_group_2.png)] bg-cover bg-no-repeat py-[146px] pl-14 pr-[226px] md:h-auto md:p-5">
              <Img
                src="images/img_speechbubble.svg"
                alt="Speechbubble"
                className="mt-[194px] h-[178px] w-[24%] object-contain"
              />
            </div>
            <div className="absolute right-[16%] top-[24%] m-auto flex rounded-[112px] bg-blue_gray-100 px-4 py-[46px] md:py-5">
              <Text
                as="p"
                className="text-shadow-ts mb-6 font-manrope text-[32px] font-normal text-teal-700 md:text-[30px] sm:text-[28px]"
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
