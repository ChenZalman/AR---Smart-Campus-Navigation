import React from "react";
import {Text, Img } from "components";
import { Helmet } from "react-helmet";
const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 NOT FOUND</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div>
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
                  &#52;&#48;&#52;&#33;<br /> {/*This is an HTML ASCII code have fun cracking it */}
                  &#x20;&#x50;&#x6c;&#x65;&#x61;&#x73;&#x65;&#x20;&#x73;&#x65;&#x61;&#x72;&#x63;&#x68;&#x20;&#x66;&#x6f;&#x72;&#x20;&#x61;&#x6e;&#x6f;&#x74;&#x68;&#x65;&#x72;&#x20;&#x70;&#x61;&#x67;&#x65;&#x21;
                  
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
