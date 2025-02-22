import React from "react";
import Image from "next/image";
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center space-x-12 rtl:space-x-reverse mb-4">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fashion Hub</span>
          </a>
          <div className="flex items-center space-x-12 rtl:space-x-reverse">
            <SignedOut>
              <SignInButton>
                <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <div className="hover:bg-indigo-300 inline-flex items-center justify-center gap-3 border border-b border-gray-700 shadow-xl px-1 py-1 rounded-md">
              <i className="text-3xl ri-shopping-cart-fill"></i>
              <p className="text-lg">0</p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a href="/" className="bg-indigo-300 border-b border-gray-200 px-4 py-2 rounded-md text-gray-900 hover:bg-indigo-800 hover:text-white" aria-current="page">Shop</a>
              </li>
              <li>
                <a href="contact" className="bg-indigo-300 border-b border-gray-200 px-4 py-2 rounded-md text-gray-900 hover:bg-indigo-800 hover:text-white">Men</a>
              </li>
              <li>
                <a href="#" className="bg-indigo-300 border-b border-gray-200 px-4 py-2 rounded-md text-gray-900 hover:bg-indigo-800 hover:text-white">Kids</a>
              </li>
              <li>
                <a href="#" className="bg-indigo-300 border-b border-gray-200 px-4 py-2 rounded-md text-gray-900 hover:bg-indigo-800 hover:text-white">Women</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}