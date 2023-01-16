import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RiHome3Line,
  RiFirefoxLine,
  RiLayoutGridLine,
  RiTeamLine,
  RiLiveLine,
  RiContactsBookLine,
  RiContactsFill,
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

function Sidebar() {
  let activeStyle = {
    textDecoration: "Underline",
    // color: "[#4338ca]",
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <sidebar
      className={`fixed top-0 w-80 h-full  border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414] transition-all lg:left-0 z-50 ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        {/* Logo */}
        <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10">
          KRUGER STAR
        </h1>
        <ul>
          <li>
            <NavLink
              to="/"
              className="nav-link text-gray-300 flex items-center gap-4 hover:bg-[#4338ca] py-3 px-4 rounded-xl transition-colors"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <RiHome3Line />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/desca"
              className="nav-link text-gray-300 flex items-center gap-4 hover:bg-[#4338ca] py-3 px-4 rounded-xl transition-colors"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <RiFirefoxLine />
              Store
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/desca"
              className="nav-link text-gray-300 flex items-center gap-4 hover:bg-[#4338ca] py-3 px-4 rounded-xl transition-colors"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <RiLayoutGridLine />
              Library
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/desca"
              className="nav-link text-gray-300 flex items-center gap-4 hover:bg-[#4338ca] py-3 px-4 rounded-xl transition-colors"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <RiTeamLine />
              Friends
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/desca"
              className="nav-link text-gray-300 flex items-center gap-4 hover:bg-[#4338ca] py-3 px-4 rounded-xl transition-colors"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <RiLiveLine />
              Live
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <NavLink
              to="/about"
              className="nav-link text-gray-300 flex items-center gap-4 hover:bg-[#4338ca] py-3 px-4 rounded-xl transition-colors"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <RiContactsBookLine />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link text-gray-300 flex items-center gap-4 hover:bg-[#4338ca] py-3 px-4 rounded-xl transition-colors"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <RiContactsFill />
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="#"
              className="relative text-gray-300 flex items-center gap-4 hover:bg-[#4338ca] py-3 px-4 rounded-xl transition-colors"
            >
              <img
                src="https://img.freepik.com/foto-gratis/chico-alegre-feliz-mostrando-gesto-bien_74855-3502.jpg"
                className="w-6 h-6 object-cover rounded-full"
              />
              <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-3 left-8 text-[8px]" />
              Trung Tran
            </a>
          </li>
        </ul>
      </div>
      {/* Btn menu movil */}
      <button
        onClick={toggleMenu}
        className="lg:hidden bg-blue-600 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </sidebar>
  );
}
export default Sidebar;
