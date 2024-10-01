import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AfterSignedUpPage from "pages/AfterSignedUpPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "aftersigneduppage",
      element: <AfterSignedUpPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
