import { Helmet } from "react-helmet";
import SignUpPageView from "./SignUpPageView";
import React from "react";

export default function SignUpPagePage() {
  return (
    <>
      <Helmet>
        <title>Signuppage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full flex-col gap-[46px] bg-white-a700">
        {/* <SignuppageTopviewpage /> */}
        <SignUpPageView />
      </div>
    </>
  );
}
