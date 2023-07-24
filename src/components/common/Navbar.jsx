import { useState } from "react";

import { BsFacebook } from "react-icons/bs"
import { navlink } from "../data/dummydata"; 

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <h1 className="font-poppins font-bold text-[32px]">Logo</h1>

            <ul className="list-none sm:flex hidden">
              {navlink.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${active === nav.text ? "text-white scale-100" : "text-greyDark"} ${index === navlink.length -1 ? "mr-0" : "mr-10"} transition duration-100 ease-in-out hover:scale-110`}
                onClick={() => setActive(nav.text)}
              >
                <a href={`#${nav.id}`}>{nav.text}</a>
              </li>
              ))}
            </ul>

            <h1>Logo</h1>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
