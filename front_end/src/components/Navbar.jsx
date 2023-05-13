import { NavLinks } from "../constant/index";
import { useState, useRef } from "react";
import { Link } from "react-scroll";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Logo from "../assets/Sumiyo Logo.svg";
import HelloPhoto from "../assets/AppFiles/Hello.json";
import Lottie from "lottie-react";

export default function Navbar() {
  const [toggle, settoggle] = useState(false);
  toggle
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <>
      <div className="md:h-6 h-4 bg-grey"></div>
      <div
        className={`flex justify-between items-center md:px-48 px-4 py-2 font-lato `}
      >
        <div className="flex flex-1  cursor-pointer ">
          <img src={Logo} alt="SUMIYO" className="md:max-h-7 max-h-5 " />
        </div>
        <div onClick={() => settoggle((prev) => !prev)} className="md:hidden">
          <MenuRoundedIcon className=" text-3xl" />
        </div>

        <div className="md:flex hidden  ">
          <ul className="flex text-xl font-roboto">
            <div
              onClick={() => settoggle((prev) => !prev)}
              className="md:hidden"
            >
              <MenuRoundedIcon className=" text-3xl" />
            </div>

            {NavLinks.map((menu_item, index) => {
              return (
                <li
                  key={menu_item.id}
                  className={`${
                    index === NavLinks.length - 1
                      ? "md:mr-0 "
                      : "md:mr-24 md:pb-0 pb-7"
                  }
                  hover:transform hover:scale-110`}
                >
                  <Link
                    to={`${menu_item.id}`}
                    smooth={true}
                    offset={-10}
                    duration={500}
                  >
                    {menu_item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className={`absolute top-0 right-0 pt-5 w-[60%] h-screen bg-white  shadow-black shadow-2xl  ${
          toggle ? " z-10" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-between h-screen">
          <div className="flex flex-col gap-[60px]">
            <div
              onClick={() => settoggle((prev) => !prev)}
              className="md:hidden flex justify-end pr-4"
            >
              <CloseRoundedIcon className=" text-3xl" />
            </div>
            <ul className="flex flex-col text-2xl font-roboto gap-7 pl-3 ">
              {NavLinks.map((menu_item) => {
                return (
                  <li key={menu_item.id} className="">
                    <Link
                      to={`${menu_item.id}`}
                      smooth={true}
                      offset={-10}
                      duration={500}
                      onClick={() => settoggle((prev) => !prev)}
                    >
                      {menu_item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className=" items-end">
            <Lottie animationData={HelloPhoto} />
          </div>
        </div>
      </div>

      <div className="md:h-6 h-4 bg-grey font-roboto md:text-base text-xs">
        <div className="md:px-48 px-4">GSTIN - 06ABJCS3407L1Z5</div>
      </div>
    </>
  );
}
