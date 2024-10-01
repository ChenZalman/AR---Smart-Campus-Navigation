import { Helmet } from "react-helmet";
import AftersigneduppageColumnpagenotfo from "./AftersigneduppageColumnpagenotfo";
import AftersigneduppageTopviewpage from "./AftersigneduppageTopviewpage";
import React from "react";
import { Tabs } from "react-tabs";

export default function AfterSignedUpPagePage() {
  return (
    <>
      <Helmet>
        <title>Aftersigneduppage 3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Tabs
        className="flex w-full flex-col gap-[46px] bg-white-a700"
        selectedTabClassName=""
        selectedTabPanelClassName="tab-panel--selected"
      >
        <AftersigneduppageTopviewpage />
        <AftersigneduppageColumnpagenotfo />
      </Tabs>
    </>
  );
}
