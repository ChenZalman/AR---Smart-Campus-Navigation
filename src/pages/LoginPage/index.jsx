import { Helmet } from "react-helmet";
import LoginPageView from "./LoginPageView";
import React from "react";

export default function LoginPagePage() {
  return (
    <>
      <Helmet>
        <title>LoginPage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-20 bg-white-a700 md:gap-[60px] sm:gap-10">
        <LoginPageView />
      </div>
    </>
  );
}
