import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LoginPage from "pages/LoginPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "loginpage",
      element: <LoginPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
