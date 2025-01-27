import { Helmet } from "react-helmet";
import AboutPageView from "./AboutPageView";
import React from "react";
import { Tabs } from "react-tabs";

export default function AboutPagePage() {
  return (
    <>
      <Helmet>
        <title>AboutUspage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <Tabs
        className="flex w-full flex-col gap-[46px] bg-white-a700"
        selectedTabClassName=""
        selectedTabPanelClassName="tab-panel--selected"
      >
        <AboutPageView />
      </Tabs>
    </>
  );
}
