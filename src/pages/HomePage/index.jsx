import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import React from "react";
import HomePageView from "./HomePageView";

export default function HomePagePage() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <HomePageView />
    </>
  );
}
