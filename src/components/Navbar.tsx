import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-white bg-[url('/images/background.jpg')] bg-cover bg-center border-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href="/Blog" className="mr-5 font-bold text-black">
              Blog
            </Link>
            <Link href="/AboutUs" className="mr-5 font-bold text-black">
              About Us
            </Link>
            <Link href="/Shop" className="mr-5 font-bold text-black">
              Shop
            </Link>
            <Link href="/ReachUs" className=" mr-5 text-black font-bold">
              Reach Us
            </Link>
          </nav>
          <Link
            href={"/"}
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <Image
              src="/images/light-bulb.png"
              width={50}
              height={50}
              alt="logo"
            />
           
            <span className="ml-3 text-xl xl:block lg:hidden text-black font-bold">
              LightYear
            </span>
          </Link>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
