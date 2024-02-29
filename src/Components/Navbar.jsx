import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              News App
            </span>
          </a>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                ></svg>
              </div>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:text-red-500"
                  onClick={() => setCategory("business")}
                  aria-label="Business"
                  
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:text-red-500"
                  onClick={() => setCategory("health")}
                  aria-label="Health"
                >
                  Health
                </button>
              </li>
              <li>
                <button
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:text-red-500"
                  onClick={() => setCategory("technology")}
                  aria-label="Technology"
                >
                  Technology
                </button>
              </li>
              <li>
                <button
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:text-red-500"
                  onClick={() => setCategory("sports")}
                  aria-label="Sports"
                >
                  Sports
                </button>
              </li>
              <li>
                <button
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:text-red-500"
                  onClick={() => setCategory("entertainment")}
                  aria-label="Entertainment"
                >
                  Entertainment
                </button>
              </li>
              <li>
                <button
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500  hover:text-red-500"
                  onClick={() => setCategory("general")}
                  aria-label="General"
                >
                  General
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
