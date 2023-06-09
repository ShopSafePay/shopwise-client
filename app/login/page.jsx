import React from "react";

const login = () => {
  return (
    <div>
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="absolute inset-0 h-full w-full object-cover"
          alt=""
        />
        <div class="relative bg-emerald-700 bg-opacity-80">
          <svg
            class="absolute inset-x-0 -bottom-1 text-white"
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            ></path>
          </svg>
          <div class="relative mx-auto overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
            <div class="flex flex-col items-center justify-between xl:flex-row">
              <div class="mb-12 w-full max-w-xl xl:mb-0 xl:w-7/12 xl:pr-16">
                <h2 class="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight text-white sm:text-7xl sm:leading-none">
                  Shopping is now easier than ever 🛒
                </h2>
                <p class="mb-4 max-w-xl text-base text-gray-200 md:text-lg">
                  Login now to browse thousands of selected products from our
                  catalog 🎉
                </p>
                <a
                  href="/"
                  aria-label=""
                  class="inline-flex items-center font-semibold tracking-wider text-teal-400 transition-colors duration-200 hover:text-teal-300"
                >
                  Learn more
                  <svg
                    class="ml-2 inline-block w-3"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                  </svg>
                </a>
              </div>
              <div class="w-full max-w-xl xl:w-5/12 xl:px-8">
                <div class="overflow-hidden rounded-xl border-t-4 border-emerald-600 bg-white p-7 shadow-2xl shadow-emerald-300 sm:p-10">
                  <h3 class="mb-4 text-xl font-bold text-emerald-900 sm:mb-6 sm:text-center sm:text-2xl">
                    Log In
                  </h3>
                  <form>
                    <div class="mb-1 sm:mb-2">
                      <label
                        for="firstName"
                        class="mb-1 inline-block font-medium text-emerald-900"
                      >
                        First name
                      </label>
                      <input
                        placeholder="Albert"
                        required=""
                        type="text"
                        class="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div class="mb-1 sm:mb-2">
                      <label
                        for="lastName"
                        class="mb-1 inline-block font-medium text-emerald-900"
                      >
                        Last name
                      </label>
                      <input
                        placeholder="Einstein"
                        required=""
                        type="text"
                        class="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                    <div class="mb-1 sm:mb-2">
                      <label
                        for="email"
                        class="mb-1 inline-block font-medium text-emerald-900"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="albert.einstein@example.com"
                        required=""
                        type="text"
                        class="mb-2 h-12 w-full flex-grow appearance-none rounded border border-gray-300 bg-white px-4 shadow-sm ring-emerald-200 transition duration-200 focus:border-emerald-400 focus:outline-none focus:ring"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div class="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        class="inline-flex h-12 w-full items-center justify-center rounded-xl bg-emerald-600 px-6 font-medium tracking-wide text-white shadow-md ring-emerald-200 transition duration-200 hover:bg-emerald-700 focus:outline-none focus:ring"
                      >
                        Log In
                      </button>
                    </div>
                    <p class="mb-4 text-center">
                      New on Shopwise?
                      <a
                        href="/register"
                        class="cursor-pointer text-indigo-500 no-underline hover:text-indigo-500"
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
    </div>
  );
};

export default login;
