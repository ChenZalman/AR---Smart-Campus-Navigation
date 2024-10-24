import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "pages/HomePage";
import NotFound from "pages/NotFoundPage";
import LoginPage from "pages/LoginPage";
import AboutPagePage from "pages/AboutPage";
import AfterSignedUpPagePage from "pages/AfterSignedUpPage";
import SignUpPagePage from "pages/SignUpPage";
import { useAuthContext } from './Hooks/useAuthContext';

const ProjectRoutes = () => {
  const {user} = useAuthContext();
  let element = useRoutes([
    { path: "/", element: <Home />  },
    { path: "*", element: <NotFound /> },
    { path: "/loginpage", element:<>  {!user ? <LoginPage /> : <Navigate to="/"/>}</>},  //In this line element gets a component that return a page to get a user info if a user isn't signed
    { path: "/aboutpage", element: <AboutPagePage />},
    { path: "/afterregistrationpage", element: <AfterSignedUpPagePage />},
    { path: "/registrationpage", element:<>  {!user ?  <SignUpPagePage />  : <Navigate to="/"/>}</>}  //In this line element gets a component that return a page to get a user info if a user isn't signed
  ]);

  return element;
};

export default ProjectRoutes;
