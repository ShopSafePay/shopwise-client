import React from "react";

const search = () => {
  return (
    <div>
      <div class="mx-auto mt-2 w-screen max-w-screen-md py-10 leading-6">
        <div class="relative mx-auto w-full max-w-2xl items-center justify-center  ">
          <h1 class="mt-8 mb-6 text-3xl font-bold ">Search Products 🔎</h1>
        </div>

        <form class="relative mx-auto flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg">
          <svg
            class="absolute left-2 block h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
          </svg>
          <input
            type="name"
            name="search"
            class="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
            placeholder="Product Name"
          />
          <button
            type="submit"
            class="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default search;
