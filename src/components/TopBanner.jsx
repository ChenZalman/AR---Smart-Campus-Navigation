import { Button, Text, Img } from "../components";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
import { useLogout } from "../Hooks/useLogout";
import "../styles/style.css";

export default function TopBanner() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <div className="flex h-[380px] flex-col gap-20 rounded-bl-[40px] rounded-br-[40px] bg-[url(/images/img_topviewpage.png)] bg-cover bg-no-repeat bg-cover bg-no-repeat overflow-hidden md:h-auto md:gap-[60px] sm:gap-10">
        <div className="mx-[34px] md:mx-0">
          <div className="flex flex-col items-center gap-[88px] md:gap-[66px] sm:gap-11 mt-[-20px]">
            <div className="flex items-center justify-end gap-5 self-stretch mt-10">
              <Img
                src="images/img_whitelogohit.png"
                alt="Whitelogohit"
                className="h-[54px] w-[14%] object-contain"
              />
            </div>
            <div className="container-xs md:px-5">
              <div>
                <div className="flex flex-col items-center">
                  <Text
                    size="textmd"
                    as="p"
                    className="font-titanone text-[64px] font-normal md:text-[48px] text-teal-100 drop-shadow-lg"
                    style={{
                      WebkitTextStroke: "1px black",
                      transform: "translateY(-30px)", // Moves the title up
                    }}
                  >
                    AR - Smart Campus Navigation
                  </Text>
                  <Text
                    size="textlg"
                    as="p"
                    className="relative mt-[-82px] font-titanone text-[64px] font-normal text-[rgb(228,228,228)] md:text-[48px] drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
                    style={{
                      WebkitTextStroke: "2px black",
                      transform: "translateY(-30px)", // Moves the subtitle up
                    }}
                  >
                    AR - Smart Campus Navigation
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[10px] p-6 shadow-lg mt-[-40px]">
          <div className="flex flex-wrap items-center justify-center gap-20 md:flex-col">
            <Link
              to="/"
              className="flex items-center justify-center h-14 w-[160px] border-2 border-teal-300 rounded-[34px] bg-teal-100 px-6 py-3 text-center font-roboto text-[16px] font-medium tracking-wide text-teal-700 shadow-lg hover:brightness-110 transition-all duration-300"
            >
              Home
            </Link>
            {!user && (
              <Link
                to="/loginpage"
                className="flex items-center justify-center h-14 w-[160px] border-2 border-teal-300 rounded-[34px] bg-teal-100 px-6 py-3 text-center font-roboto text-[16px] font-medium tracking-wide text-teal-700 shadow-lg hover:brightness-110 transition-all duration-300"
              >
                Login
              </Link>
            )}
            {!user && (
              <Link
                to="/registrationpage"
                className="flex items-center justify-center h-14 w-[160px] border-2 border-teal-300 rounded-[34px] bg-teal-100 px-6 py-3 text-center font-roboto text-[16px] font-medium tracking-wide text-teal-700 shadow-lg hover:brightness-110 transition-all duration-300"
              >
                Sign Up
              </Link>
            )}
            <Link
              to="/aboutpage"
              className="flex items-center justify-center h-14 w-[160px] border-2 border-teal-300 rounded-[34px] bg-teal-100 px-6 py-3 text-center font-roboto text-[16px] font-medium tracking-wide text-teal-700 shadow-lg hover:brightness-110 transition-all duration-300"
            >
              About
            </Link>
            {user && (
              <Link
                to="/Pop"
                className="flex items-center justify-center h-14 w-[160px] border-2 border-teal-300 rounded-[34px] bg-teal-100 px-6 py-3 text-center font-roboto text-[16px] font-medium tracking-wide text-teal-700 shadow-lg hover:brightness-110 transition-all duration-300"
              >
                Map
              </Link>
            )}
            {user && (
              <Link
                to="/Buildings"
                className="flex items-center justify-center h-14 w-[160px] border-2 border-teal-300 rounded-[34px] bg-teal-100 px-6 py-3 text-center font-roboto text-[16px] font-medium tracking-wide text-teal-700 shadow-lg hover:brightness-110 transition-all duration-300"
              >
                Buildings List
              </Link>
            )}
            {user && (
              <Button
                onClick={handleClick}
                className="flex items-center justify-center h-14 w-[160px] border-2 border-teal-300 rounded-[34px] bg-teal-100 px-6 py-3 text-center font-roboto text-[16px] font-medium tracking-wide text-teal-700 shadow-lg hover:brightness-110 transition-all duration-300"
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
