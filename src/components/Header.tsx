import React from "react";
import Image from "next/image";
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Demo App</span>
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <SignedOut>
              <SignInButton>
              <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
              </SignInButton>
            </SignedOut>
            <UserButton />
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
              </li>
              <li>
                <a href="contact" className="text-gray-900 dark:text-white hover:underline">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">Features</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}