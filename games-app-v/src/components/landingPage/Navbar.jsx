import React from "react";
import { RiNotification3Line, RiSearchLine } from "react-icons/ri";
function Navbar() {
  return (
    <header className="fixed lg:pl-[340px] w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-[#141414] z-40">
      <nav className="flex items-center gap-4 order-1 lg:order-none">
        <a
          href="#"
          className="hover:bg-[#4338ca] text-white py-2 px-4 rounded-full"
        >
          Discover
        </a>
        <a
          href="#"
          className="hover:bg-[#4338ca] text-white  py-2 px-4 rounded-full"
        >
          Browse
        </a>
        <a
          href="#"
          className="hover:bg-[#4338ca] text-white  py-2 px-4 rounded-full"
        >
          Wishlist
        </a>
      </nav>
      <ul className="flex items-center gap-4">
        <li>
          <form className="relative">
            <RiSearchLine className="text-gray-500 absolute top-3 left-2" />
            <input
              type="text"
              className="bg-[#232323] outline-none text-gray-300 py-2 pl-8 pr-4 rounded-full w-full"
              placeholder="Search"
            />
          </form>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li>
        <button className="btn btn-ghost btn-circle m-5 hover:bg-[#4338ca]">
          <div className="indicator">
            <svg
              class="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />{" "}
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </li>
       <li>
        <div className="dropdown dropdown-end m-7">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar hover:bg-[#4338ca]"
          >
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        </li>

      </ul>
     
    </header>
  );
}

export default Navbar;
