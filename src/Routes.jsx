import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Home from "pages/HomePage";
import NotFound from "pages/NotFoundPage";
import LoginPage from "pages/LoginPage";
import AboutPagePage from "pages/AboutPage";
import AfterSignedUpPagePage from "pages/AfterSignedUpPage";
import SignUpPagePage from "pages/SignUpPage";
import { useAuthContext } from './Hooks/useAuthContext';
import Pop from "pages/Pop";
import BuildingList from "pages/Buildings/BuildingList";
import Building1 from "pages/Buildings/Building1";
import Building2 from "pages/Buildings/Building2";
import Building3 from "pages/Buildings/Building3";
import Building4 from "pages/Buildings/Building4";
import Building5 from "pages/Buildings/Building5";
import Building6 from "pages/Buildings/Building6";
import Building7 from "pages/Buildings/Building7";
import Building8 from "pages/Buildings/Building8";

const ProjectRoutes = () => {
  const {user} = useAuthContext();
  let element = useRoutes([
    { path: "/", element: <Home />  },
    { path: "*", element: <NotFound /> },
    { path: "/loginpage", element:<>  {!user ? <LoginPage /> : <Navigate to="/Pop"/>}</>},  //In this line element gets a component that return a page to get a user info if a user isn't signed
    { path: "/aboutpage", element: <AboutPagePage />},
    { path: "/afterregistrationpage", element: <AfterSignedUpPagePage />},
    { path: "/registrationpage", element:<>  {!user ?  <SignUpPagePage />  : <Navigate to="/Pop"/>}</>},  //In this line element gets a component that return a page to get a user info if a user isn't signed
    { path: "/Pop", element:<>  {user ?  <Pop />  : <Navigate to="/loginpage"/>}</>},
    { path: "/Buildings", element:<>  {user ?  <BuildingList />  : <Navigate to="/loginpage"/>}</>},

    //Building1, Building2, ... paths:
    { path: "/Building1", element:<>  {user ?  <Building1 />  : <Navigate to="/loginpage"/>}</>},
    { path: "/Building2", element:<>  {user ?  <Building2 />  : <Navigate to="/loginpage"/>}</>},
    { path: "/Building3", element:<>  {user ?  <Building3 />  : <Navigate to="/loginpage"/>}</>},
    { path: "/Building4", element:<>  {user ?  <Building4 />  : <Navigate to="/loginpage"/>}</>},
    { path: "/Building5", element:<>  {user ?  <Building5 />  : <Navigate to="/loginpage"/>}</>},
    { path: "/Building6", element:<>  {user ?  <Building6 />  : <Navigate to="/loginpage"/>}</>},
    { path: "/Building7", element:<>  {user ?  <Building7 />  : <Navigate to="/loginpage"/>}</>},
    { path: "/Building8", element:<>  {user ?  <Building8 />  : <Navigate to="/loginpage"/>}</>},

  ]);

  return element;
};

export default ProjectRoutes;
