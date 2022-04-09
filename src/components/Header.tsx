import React from "react";

function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-red-100 p-6 text-xl font-bold">
        <div className="flex items-center flex-shrink-0 text-red-800 mr-6">
          pokemove
        </div>
        <div className="w-full block items-end flex-grow lg:flex lg:items-end lg:w-auto">
          <div className="flex justify-end ml-auto">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-red-800 hover:text-red mr-4 hover:text-red-600"
            >
              Home
            </a>
            <a
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-red-800 hover:text-red mr-4 hover:text-red-600"
            >
              About
            </a>
            <a
              href="/session/catch"
              className="block mt-4 lg:inline-block lg:mt-0 text-red-800 hover:text-red-600"
            >
              Session
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
