import { Button, Text, Img } from "../components"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useAuthContext } from "../Hooks/useAuthContext"
import { useLogout } from "../Hooks/useLogout"

export default function TopBanner() {
  const { user } = useAuthContext()
  const { logout } = useLogout()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleClick = () => {
    logout()
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div>
      <div className="flex h-[380px] flex-col gap-20 rounded-bl-[10px] rounded-br-[10px] bg-[url(/images/img_topviewpage.png)] bg-cover bg-no-repeat md:h-auto md:gap-[60px] sm:gap-10">
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
                    className="font-titanone text-[64px] font-normal md:text-[48px] text-royalblue-100 drop-shadow-lg"
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
        <div>
          <div className="rounded-[30px] bg-teal-700 p-3">
            <div className="flex gap-9 self-end md:flex-col">
              <Link
                to="/"
                className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5"
              >
                HOME
              </Link>
              {!user && (
                <>
                  <Link
                    to="/loginpage"
                    className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5"
                  >
                    LOGIN
                  </Link>
                  <Link
                    to="/registrationpage"
                    className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5"
                  >
                    SIGN UP
                  </Link>
                </>
              )}
              <Link
                to="/aboutpage"
                className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5"
              >
                ABOUT
              </Link>

              {user && (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5"
                  >
                    MAP
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg">
                      <Link
                        to="/Pop"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={toggleDropdown}
                      >
                        View Map
                      </Link>
                      <Link
                        to="/Buildings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={toggleDropdown}
                      >
                        Search Location
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {user && (
                <Button
                  onClick={handleClick}
                  className="flex h-[92px] min-w-[128px] flex-row items-center justify-center rounded-[34px] bg-blue_gray-200 px-[34px] text-center font-roboto text-[14px] font-medium tracking-[0.10px] text-teal-700 shadow-xs sm:px-5"
                >
                  LOGOUT
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

