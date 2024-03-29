import React, { useState } from "react";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import SearchIcon from "@mui/icons-material/Search";




import { useLocation } from "react-router-dom";
import UserPlaceholder from "../UserPlaceholder/UserPlaceholder";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation().pathname;


  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-4 my-5 justify-center">
       <div className="mx-auto md:mx-0">
         <img
          src="/twitter-logo.png"
          alt="Twitter Logo"
          width={"40px"}
          className="ml-8"
        />
      </div>

      <div className="col-span-2 md:border-x-2 md:border-slate-200 md:px-6 my-6 md:my-0">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl">
            {location.includes("profile") ? (
              <UserPlaceholder setUserData={setUserData} userData={userData} />
            ) : location.includes("explore") ? (
              "Explore"
            ) : (
              "Home"
            )}
          </h2>
          <StarBorderPurple500Icon />
        </div>
      </div>

      <div className="px-0 md:px-6 mx-auto">
        <SearchIcon className="absolute m-2" />
        <input type="text" className="bg-blue-100 rounded-full py-2 px-8" />
      </div>
    </div>
    {/* <section className=" text-center flex justify-center items-center scroll-smooth">
      <nav className="sm:w-[90%] w-full flex py-2 justify-between items-center">
        <img src={empowermend} alt="" className="w-[80px]" />
        <ul className="list-none sm:flex gap-4 hidden justify-center ms-5 items-center flex-1">
          <li
            className={`font-poppins font-normal  active:font-semibold  cursor-pointer text-[18px] `}
          >
            <Link to="/">HOME</Link>
          </li>
          <li
            className={`font-poppins  font-normal active:font-semibold cursor-pointer text-[18px] `}
          >
            <Link to="/ayurveda">AYURVEDA</Link>
          </li>
          <li
            className={`font-poppins  font-normal active:font-semibold cursor-pointer text-[18px] `}
          >
            <Link to="/community">COMMUNITY</Link>
          </li>
          <li
            className={`font-poppins  font-normal active:font-semibold cursor-pointer text-[18px] `}
          >
            <Link to="/experts">EXPERTS</Link>
          </li>
          <li
            className={`font-poppins  font-normal active:font-semibold  ms-auto cursor-pointer text-[18px] `}
          >
            <Link to="/contact">
              <Button name="Contact"></Button>
            </Link>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? 
            (
            <IoCloseOutline
              className="w-[28px] h-[28px] mr-[20px]"
              onClick={() => setToggle((prev) => !prev)}
            />
          ) :(
          <FaBarsStaggered
          className="w-[28px] h-[28px] mr-[20px]"
          onClick={() => setToggle((prev) => !prev)}
        />
      ) 
        }

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded -xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              <li
                className={`font-poppins font-normal active:font-semibold  cursor-pointer text-[18px] `}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`font-poppins  font-norma active:font-semiboldl cursor-pointer text-[18px] `}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={`font-poppins  font-normal active:font-semibold  cursor-pointer text-[18px] `}
              >
                <Link to="/community">Community</Link>
              </li>
              <li
                className={`font-poppins  font-normal cursor-pointer text-[18px] `}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section> */}
    </>
  );
};

export default Navbar;
