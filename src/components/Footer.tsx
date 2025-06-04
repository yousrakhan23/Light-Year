import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <div><footer className="rounded-lg shadow-sm m-4 bg-[url('/images/background.jpg')] bg-cover bg-center border-gray-900 body-font">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
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
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
      </ul>
    </div>
    <hr className="my-6 border-gray-900 sm:mx-auto lg:my-8" />
    <span className="block text-sm text-gray-900 sm:text-center font-extrabold ">
      © 2025{" "}
      <Link href="/" className="font-bold text-gray-900">
        LightYear™
      </Link>
      . All Rights Reserved.
    </span>
  </div>
</footer>
</div>
  )
}

export default Footer