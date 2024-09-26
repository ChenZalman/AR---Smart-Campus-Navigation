import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import SignUpPage from "pages/SignUpPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "signuppage",
      element: <SignUpPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
