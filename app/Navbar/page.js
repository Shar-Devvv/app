"use client";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Page = () => {
  const [enabled, setEnabled] = useState(false);
  const { data: session } = useSession();

  // Theme toggle logic
  useEffect(() => {
    const root = window.document.documentElement;

    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        {/* Left: Social Icons */}
        <div className="flex space-x-1">
          <img className="w-3 h-3" src="facebook.png" alt="facebook" />
          <img className="w-3 h-3" src="instagram.png" alt="instagram" />
          <img className="w-3 h-3" src="tik-tok.png" alt="tik-tok" />
          <img className="w-3 h-3" src="youtube.png" alt="youtube" />
        </div>

        {/* Center: Blog Name */}
        <div className="text-sm font-bold hidden md:block">SharBlog</div>

        {/* Right: Toggle + Nav Links */}
        <div className="flex items-center text-sm space-x-2">
          {/* 🔘 Toggle Button */}
          <div className="flex items-center">
            <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                id="toggle"
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
                className={`absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer ${
                  enabled ? "right-0 border-black" : "left-0 border-gray-300"
                }`}
              />
              <label
                htmlFor="toggle"
                className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                  enabled ? "bg-black" : "bg-gray-300"
                }`}
              ></label>
            </div>
          </div>

          {/* Nav Links */}
          <p className="cursor-pointer hidden md:block ">Homepage</p>
          <p className="cursor-pointer hidden md:block ">Contact</p>

          {/* 🔑 Google Auth Buttons */}
          {session ? (
            <>
              <p className="cursor-pointer" onClick={() => { window.location.href = '/write' }}>Write</p>
              <button
                onClick={() => signOut()}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="bg-blue-500 text-white px-2 py-1 rounded hover:cursor-pointer"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
