"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

function Navbar() {
  const router = useRouter();

  const [isLogged, setIsLogged] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    router.push("/login");
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("ecomToken");
    localStorage.removeItem("cart");
    router.push("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("ecomToken");
    const decoded = jwt.decode(token);
    console.log(decoded?.isLogged);
    setIsLogged(decoded?.isLogged);
  }, []);

  return (
    <div className="w-full bg-white sticky top-0 z-30 drop-shadow-md">
      <header className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 text-slate-700 md:mx-auto md:flex-row md:items-center">
        <a
          href="/"
          className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
        >
          <img
            src="/assets/logos/shopwise.png"
            className="object-scale-down h-14 w-14 mr-2"
          />
          Shopwise
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          for="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="md:mr-12">
              <a href="/products">Products</a>
            </li>
            <li className="md:mr-12">
              <a href="/categories">Categories</a>
            </li>
            <li className="md:mr-12">
              <a href="/search">Search</a>
            </li>
            <li className="md:mr-12">
              <a href="/cart">Cart</a>
            </li>
            {isLogged ? (
              <li className="md:mr-12">
                <button
                  className="rounded-full border-2 border-green-500 px-6 py-1 text-green-600 transition-colors hover:bg-green-500 hover:text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            ) : (
              <li className="md:mr-12">
                <button
                  className="rounded-full border-2 border-green-500 px-6 py-1 text-green-600 transition-colors hover:bg-green-500 hover:text-white"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
