import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import items from "@utils/productItems";

const categories = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Laptop Deals 💻
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-4 md:grid-cols-3 gap-6 sm:grid-cols-1 sm:gap-4 lg:mt-16">
            {items.map((item) => {
              if (item.category === "Laptop") {
                return (
                  <article className="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
                    <a href={item.url}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          className="transition duration-300 hover:scale-125 ease-in-out"
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </a>

                    <div className="absolute top-0 m-2 rounded-full bg-white">
                      <p className="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                        Sale
                      </p>
                    </div>
                    <div className="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <div className="mb-2 flex">
                        <p className="mr-3 mt-3 text-sm font-semibold text-blue-500">
                          ${item.price}
                        </p>
                        <del className="text-xs mt-3 text-gray-500">
                          {" "}
                          ${item.price + parseInt((item.price * 20) / 100)}
                        </del>
                      </div>
                    </div>
                    <button className="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                      <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                        Add to cart
                      </div>
                      <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                        +
                      </div>
                    </button>
                  </article>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Smartphone Deals 📱
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-4 md:grid-cols-3 gap-6 sm:grid-cols-1 sm:gap-4 lg:mt-16">
            {items.map((item) => {
              if (item.category === "Phone") {
                return (
                  <article className="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
                    <a href={item.url}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          className="transition duration-300 hover:scale-125 ease-in-out"
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </a>

                    <div className="absolute top-0 m-2 rounded-full bg-white">
                      <p className="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                        Sale
                      </p>
                    </div>
                    <div className="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <div className="mb-2 flex">
                        <p className="mr-3 mt-3 text-sm font-semibold text-blue-500">
                          ${item.price}
                        </p>
                        <del className="text-xs mt-3 text-gray-500">
                          {" "}
                          ${item.price + parseInt((item.price * 20) / 100)}
                        </del>
                      </div>
                    </div>
                    <button className="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                      <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                        Add to cart
                      </div>
                      <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                        +
                      </div>
                    </button>
                  </article>
                );
              }
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Accessories Deals 🎧
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-4 md:grid-cols-3 gap-6 sm:grid-cols-1 sm:gap-4 lg:mt-16">
            {items.map((item) => {
              if (item.category === "Headphones") {
                return (
                  <article className="relative flex flex-col overflow-hidden rounded-lg border transition duration-300 hover:shadow-lg ease-in-out">
                    <a href={item.url}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          className="transition duration-300 hover:scale-125 ease-in-out"
                          src={item.image}
                          alt=""
                        />
                      </div>
                    </a>

                    <div className="absolute top-0 m-2 rounded-full bg-white">
                      <p className="rounded-full bg-emerald-500 p-1 text-[12px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                        Sale
                      </p>
                    </div>
                    <div className="my-2 mx-auto flex w-10/12 flex-col items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <div className="mb-2 flex">
                        <p className="mr-3 mt-3 text-sm font-semibold text-blue-500">
                          ${item.price}
                        </p>
                        <del className="text-xs mt-3 text-gray-500">
                          {" "}
                          ${item.price + parseInt((item.price * 20) / 100)}
                        </del>
                      </div>
                    </div>
                    <button className="group mx-auto mb-6 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                      <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                        Add to cart
                      </div>
                      <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                        +
                      </div>
                    </button>
                  </article>
                );
              }
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default categories;
