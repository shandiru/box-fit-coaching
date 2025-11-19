"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* ---- HERO BACKGROUND IMAGE ---- */}
      <div className="absolute inset-0">
        <img
          src="/hero.webp"   // <-- Add your hero image file here
          className="w-full h-full object-cover"
          alt="Boxing hero"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ---- HERO CONTENT ---- */}
      <div className="relative max-w-5xl mx-auto h-full flex flex-col items-center justify-center text-center z-20 px-6">
        
        <h1 className="text-[52px] md:text-[110px] font-extrabold tracking-tight text-red-600 mix-blend-multiply uppercase leading-none">
          TEAM SPARRING
        </h1>

        {/* BUTTONS */}
        <div className="mt-10 flex gap-6">
          <button className="bg-red-600 text-white px-8 py-3 font-bold text-sm tracking-wide hover:bg-red-700 transition">
            APPLY NOW
          </button>
          <button className="bg-white text-black px-8 py-3 font-bold text-sm tracking-wide hover:bg-gray-200 transition">
            VIEW MORE
          </button>
        </div>
      </div>

      
    </section>
  );
}
