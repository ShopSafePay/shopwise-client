import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import React from "react";

const categories = () => {
  return (
    <div>
      <Navbar />
      <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <h2 class="font-serif text-2xl font-bold sm:text-3xl">
              Laptop Deals 💻
            </h2>
          </div>

          <div class="mt-10 grid grid-cols-4 md:grid-cols-3 gap-6 sm:grid-cols-1 sm:gap-4 lg:mt-16">
            <article class="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
              <a href="/products/productId=3?">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="transition duration-300 hover:scale-125 ease-in-out"
                    src="/assets/products/vivobook/vivo1.webp"
                    alt=""
                  />
                </div>
              </a>

              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 class="text-lg font-semibold text-gray-900">
                  ASUS Vivobook 17.3" Full HD PC Laptop
                </h3>
                <div class="mb-2 flex">
                  <p class="mr-3 mt-3 text-sm font-semibold text-blue-500">
                    $400
                  </p>
                  <del class="text-xs mt-3 text-gray-500"> $470</del>
                </div>
              </div>
              <button class="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add to cart
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
            <article class="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
              <a href="/products/productId=6?">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="transition duration-300 hover:scale-125 ease-in-out"
                    src="/assets/products/macbook/mac1.webp"
                    alt=""
                  />
                </div>
              </a>

              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 class="text-lg font-semibold text-gray-900">
                  Apple MacBook Air with Apple M1 Chip
                </h3>
                <div class="mb-2 flex">
                  <p class="mr-3 mt-3 text-sm font-semibold text-blue-500">
                    $889
                  </p>
                  <del class="text-xs mt-3 text-gray-500"> $999</del>
                </div>
              </div>
              <button class="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add to cart
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
            <article class="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
              <a href="/products/productId=9?">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="transition duration-300 hover:scale-125 ease-in-out"
                    src="/assets/products/tuf/tuf1.webp"
                    alt=""
                  />
                </div>
              </a>

              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 class="text-lg font-semibold text-gray-900">
                  ASUS TUF Gaming 17.3" 144Hz FHD
                </h3>
                <div class="mb-2 flex">
                  <p class="mr-3 mt-3 text-sm font-semibold text-blue-500">
                    $1,250
                  </p>
                  <del class="text-xs mt-3 text-gray-500"> $1400</del>
                </div>
              </div>
              <button class="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add to cart
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <h2 class="font-serif text-2xl font-bold sm:text-3xl">
              Smartphone Deals 📱
            </h2>
          </div>

          <div class="mt-10 grid grid-cols-4 md:grid-cols-3 gap-6 sm:grid-cols-1 sm:gap-4 lg:mt-16">
            <article class="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
              <a href="/products/productId=1?">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="transition duration-300 hover:scale-125 ease-in-out"
                    src="/assets/products/iphone/iphone1.jpeg"
                    alt=""
                  />
                </div>
              </a>

              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 class="text-lg font-semibold text-gray-900">
                  iPhone 14 128GB
                </h3>
                <div class="mb-2 flex">
                  <p class="mr-3 mt-3 text-sm font-semibold text-blue-500">
                    $879
                  </p>
                  <del class="text-xs mt-3 text-gray-500"> $949</del>
                </div>
              </div>
              <button class="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add to cart
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
            <article class="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
              <a href="/products/productId=4?">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="transition duration-300 hover:scale-125 ease-in-out"
                    src="/assets/products/oneplus/oneplus1.webp"
                    alt=""
                  />
                </div>
              </a>

              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 class="text-lg font-semibold text-gray-900">
                  OnePlus 10 Pro 5G 256GB
                </h3>
                <div class="mb-2 flex">
                  <p class="mr-3 mt-3 text-sm font-semibold text-blue-500">
                    $622
                  </p>
                  <del class="text-xs mt-3 text-gray-500"> $722</del>
                </div>
              </div>
              <button class="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add to cart
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
            <article class="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
              <a href="/products/productId=7?">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="transition duration-300 scale-90 hover:scale-100 ease-in-out"
                    src="/assets/products/pixel/pixel1.webp"
                    alt=""
                  />
                </div>
              </a>

              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 class="text-lg font-semibold text-gray-900">
                  Google Pixel 5
                </h3>
                <div class="mb-2 flex">
                  <p class="mr-3 mt-3 text-sm font-semibold text-blue-500">
                    $350
                  </p>
                  <del class="text-xs mt-3 text-gray-500"> $450</del>
                </div>
              </div>
              <button class="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add to cart
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
          </div>
        </div>
      </section>

      <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <h2 class="font-serif text-2xl font-bold sm:text-3xl">
              Accessories Deals 🎧
            </h2>
          </div>

          <div class="mt-10 grid grid-cols-4 md:grid-cols-3 gap-6 sm:grid-cols-1 sm:gap-4 lg:mt-16">
            <article class="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
              <a href="/products/productId=2?">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="transition duration-300 hover:scale-125 ease-in-out"
                    src="/assets/products/beats/b1.webp"
                    alt=""
                  />
                </div>
              </a>

              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 class="text-lg font-semibold text-gray-900">
                  Beats Studio3
                </h3>
                <div class="mb-2 flex">
                  <p class="mr-3 mt-3 text-sm font-semibold text-blue-500">
                    $220
                  </p>
                  <del class="text-xs mt-3 text-gray-500"> $322</del>
                </div>
              </div>
              <button class="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add to cart
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
            <article class="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
              <a href="/products/productId=5?">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="transition duration-300 hover:scale-125 ease-in-out"
                    src="/assets/products/beats-buds/b1.webp"
                    alt=""
                  />
                </div>
              </a>

              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 class="text-lg font-semibold text-gray-900">
                  Beats Studio Buds
                </h3>
                <div class="mb-2 flex">
                  <p class="mr-3 mt-3 text-sm font-semibold text-blue-500">
                    $165
                  </p>
                  <del class="text-xs mt-3 text-gray-500"> $199</del>
                </div>
              </div>
              <button class="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add to cart
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
            <article class="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
              <a href="/products/productId=8?">
                <div class="aspect-square overflow-hidden">
                  <img
                    class="transition duration-300 hover:scale-125 ease-in-out"
                    src="/assets/products/razer/r1.webp"
                    alt=""
                  />
                </div>
              </a>

              <div class="absolute top-0 m-2 rounded-full bg-white">
                <p class="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                  Sale
                </p>
              </div>
              <div class="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h3 class="text-lg font-semibold text-gray-900">
                  Razer Kraken V3 X
                </h3>
                <div class="mb-2 flex">
                  <p class="mr-3 mt-3 text-sm font-semibold text-blue-500">
                    $45
                  </p>
                  <del class="text-xs mt-3 text-gray-500"> $75</del>
                </div>
              </div>
              <button class="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                  Add to cart
                </div>
                <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                  +
                </div>
              </button>
            </article>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default categories;
