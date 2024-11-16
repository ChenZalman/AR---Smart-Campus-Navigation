import { Helmet } from "react-helmet";
import Pop from "./Pop";
import React from "react";

export default function PopPage() {
  return (
    <>
      <Helmet>
        <title>Pop</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-20 bg-white-a700 md:gap-[60px] sm:gap-10">
        <Pop />
      </div>
    </>
  );
}
