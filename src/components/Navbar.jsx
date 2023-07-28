import { useState } from "react";
import { navLinks } from "../constants/constants";
import { BsList, BsXCircle } from "react-icons/bs";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex justify-between items-center sm:px-16 px-6 py-6">
      <h1 className="font-poppins font-bold text-[32px]">Logo</h1>

      <ul className="sm:flex hidden justify-start items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-black" : "text-blue-400"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.title}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden">
        <div onClick={() => setToggle(!toggle)}>
          {toggle ? <BsXCircle /> : <BsList />}
        </div>

        <div className={`${!toggle ? "hidden" : "flex"} absolute top-20 right-1 w-[60%] h-screen bg-black/30 animation transform`}>
          <ul className="flex-col justify-start text-start items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-gray-300"
                } m-6`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.title}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
