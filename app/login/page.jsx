"use client";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
const login = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 201) {
      console.log("User logged in successfully");
      localStorage.setItem("ecomToken", data);
      const token = jwt.decode(data);
      if (token.role === "supplier") {
        router.push("/orders");
      } else if (token.role === "user") {
        router.push("/products");
      }
    }
    e.target.reset();
  };

  return (
    <div>
      <Navbar />
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          className="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
        <div className="relative bg-emerald-700 bg-opacity-80">
          <svg
            className="absolute inset-x-0 -bottom-1 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            ></path>
          </svg>
          <div className="relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
                <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none">
                  Shopping is now easier than ever 🛒
                </h2>
                <p className="mb-4 max-w-xl text-base text-gray-200 md:text-lg">
                  Login now to browse thousands of selected products from our
                  catalog 🎉
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider text-teal-400 transition-colors duration-200 hover:text-teal-300"
                >
                  Learn more
                  <svg
                    className="ml-2 inline-block w-3"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
              <div className="w-full max-w-xl xl:w-5/12 xl:px-8">
                <div className="overflow-hidden rounded-xl border-t-4 border-emerald-600 bg-white p-7 shadow-2xl shadow-emerald-300 sm:p-10">
                  <h3 className="mb-4 text-xl font-bold text-emerald-900 sm:mb-6 sm:text-center sm:text-2xl">
                    Log In
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-1 sm:mb-2">
                      <label className="mb-1 inline-block font-medium text-emerald-900">
                        E-mail
                      </label>
                      <input
                        placeholder="albert.einstein@example.com"
                        required=""
                        type="text"
                        className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring"
                        name="email"
                      />
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label className="mb-1 inline-block font-medium text-emerald-900">
                        Password
                      </label>
                      <input
                        placeholder=""
                        required=""
                        type="password"
                        className="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring"
                        name="password"
                      />
                    </div>

                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md ring-emerald-200 transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring"
                      >
                        Log In
                      </button>
                    </div>
                    <p className="mb-4 text-center">
                      New on Shopwise?
                      <a
                        href="/register"
                        className="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
                      >
                        {" "}
                        Register{" "}
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default login;
