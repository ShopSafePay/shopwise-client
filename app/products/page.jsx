'use client'
import jwt  from 'jsonwebtoken';

import React, { useEffect } from 'react'

import { useRouter } from 'next/navigation'
import Footer from '@components/Footer/Footer';
import Navbar from '@components/Navbar/Navbar';

const products = () => {
  const router = useRouter()

  return (
    <> 
      <Navbar />
      <div class="bg-gray-100 ">
        <section class="py-10 ">
          <h2 class="mb-12 text-center font-sans text-2xl font-bold text-gray-900">
            Currently Trending 🔥
          </h2>
          <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl ">
              <a href="/products/productId=1?">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src="/assets/products/iphone/iphone1.jpeg"
                    class="transition duration-500 hover:scale-125"
                  />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">iPhone 14 128GB </h2>
                  <p class="text-slate-400 mt-1 text-sm">Apple</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$879</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <a href="/products/productId=2?">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src="/assets/products/beats/b1.webp "
                    alt="Hotel Photo"
                    class="transition duration-500 hover:scale-125"
                  />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">
                    Beats Studio3 Wireless Headphones
                  </h2>
                  <p class="text-slate-400 mt-1 text-sm">Beats</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$220</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <a href="/products/productId=3?">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src="/assets/products/vivobook/vivo1.webp"
                    class="transition duration-500 hover:scale-125"
                  />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">
                    ASUS Vivobook 17.3" Full HD PC Laptop
                  </h2>
                  <p class="text-slate-400 mt-1 text-sm">Asus</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$400</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </section>

        <section class="py-10">
          <h2 class="mb-12 text-center font-sans text-2xl font-bold text-gray-900">
            Best Deals ✨
          </h2>
          <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <a href="/products/productId=4?">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src="/assets/products/oneplus/oneplus1.webp"
                    class="transition duration-500 hover:scale-125"
                  />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">OnePlus 10 Pro 5G 256GB</h2>
                  <p class="text-slate-400 mt-1 text-sm">Oneplus</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$622</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <a href="/products/productId=5?">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src="/assets/products/beats-buds/b1.webp"
                    class="transition duration-500 hover:scale-125"
                  />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">Beats Studio Buds</h2>
                  <p class="text-slate-400 mt-1 text-sm">Beats</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$165</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <a href="/products/productId=6?">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src="/assets/products/macbook/mac1.webp"
                    class="transition duration-500 hover:scale-125"
                  />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">
                    Apple MacBook Air with Apple M1 Chip
                  </h2>
                  <p class="text-slate-400 mt-1 text-sm">Apple</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$889</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </section>

        <section class="py-10">
          <h2 class="mb-12 text-center font-sans text-2xl font-bold text-gray-900">
            Ongoing Offers 🥳
          </h2>
          <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <a href="/products/productId=7?">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src="/assets/products/pixel/pixel1.webp"
                    class="transition duration-500 hover:scale-125"
                  />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">Google Pixel 5</h2>
                  <p class="text-slate-400 mt-1 text-sm">Google</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$350</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <a href="/products/productId=8?">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src="/assets/products/razer/r1.webp"
                    class="transition duration-500 hover:scale-125"
                    alt="Hotel Photo"
                  />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">
                    Razer Kraken V3 X Wired Gaming Headset
                  </h2>
                  <p class="text-slate-400 mt-1 text-sm">Razer</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$45</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>

            <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
              <a href="/products/productId=9?">
                <div class="relative flex items-end overflow-hidden rounded-xl">
                  <img
                    src="/assets/products/tuf/tuf1.webp"
                    alt="Hotel Photo"
                    class="transition duration-500 hover:scale-125 ease-in-out"
                  />
                  <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="text-slate-400 ml-1 text-sm">4.9</span>
                  </div>
                </div>

                <div class="mt-1 p-2">
                  <h2 class="text-slate-700">ASUS TUF Gaming 17.3" 144Hz FHD</h2>
                  <p class="text-slate-400 mt-1 text-sm">Asus</p>

                  <div class="mt-3 flex items-end justify-between">
                    <p>
                      <span class="text-lg font-bold text-blue-500">$1,250</span>
                    </p>

                    <div class="group inline-flex rounded-xl bg-blue-100 p-2 hover:bg-blue-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="group-hover:text-blue-500 h-4 w-4 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </article>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default products;
