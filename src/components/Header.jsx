"use client";
import React, { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = ["HOME", "PAGES", "CLASSES", "SHOP", "BLOG", "LANDING"];

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-6">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Boxing Academy" className="h-12 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-extrabold tracking-widest text-black">
              BOXING
            </span>
            <span className="text-xl font-extrabold tracking-widest text-black -mt-1">
              ACADEMY
            </span>
          </div>
        </div>

        {/* CENTER — DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-12 text-black font-bold tracking-wide text-[15px]">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <span
                className={`h-5 w-[2px] ${
                  active === item ? "bg-red-600" : "bg-transparent"
                }`}
              ></span>

              <span
                className={`${active === item ? "text-red-600" : "text-black"}`}
              >
                {item}
              </span>
            </button>
          ))}
        </nav>

        {/* RIGHT — DESKTOP SQUARE ICON */}
        <button className="hidden md:flex items-center justify-center border border-black p-2">
          <div className="h-3 w-3 bg-black"></div>
        </button>

        {/* MOBILE — HAMBURGER BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <nav className="flex flex-col gap-4 font-bold text-black tracking-wide">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  setMobileOpen(false);
                }}
                className="flex items-center gap-2 py-2"
              >
                <span
                  className={`h-4 w-[2px] ${
                    active === item ? "bg-red-600" : "bg-transparent"
                  }`}
                ></span>

                <span
                  className={`${
                    active === item ? "text-red-600" : "text-black"
                  }`}
                >
                  {item}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
