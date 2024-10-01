import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/HomePage";
import NotFound from "pages/NotFoundPage";
import LoginPage from "pages/LoginPage";
import AboutPagePage from "pages/AboutPage";
import AfterSignedUpPagePage from "pages/AfterSignedUpPage";
import SignUpPagePage from "pages/SignUpPage";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    { path: "loginpage", element: <LoginPage />},
    { path: "aboutpage", element: <AboutPagePage />},
    { path: "afterregistrationpage", element: <AfterSignedUpPagePage />},
    { path: "registrationpage", element: <SignUpPagePage />}
  ]);

  return element;
};

export default ProjectRoutes;
