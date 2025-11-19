"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#111] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="h-[500px] lg:h-full w-full">
          <img
            src="/about-boxing.jpg"   // <-- Replace with your actual image
            alt="Boxing training"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT BOX */}
        <div className="relative bg-black text-white flex items-center px-10 py-16">

          {/* RED LEFT BORDER STRIP */}
          <div className="absolute left-0 top-0 h-full w-[6px] bg-red-600"></div>

          <div className="ml-6">
            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight uppercase mb-6">
              Always Showing <br /> Dedication & Passion
            </h2>

            {/* PARAGRAPH */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* CTA LINK */}
            <button className="flex items-center gap-2 text-white font-semibold tracking-wide group">
              <span>VIEW MORE</span>
              <span className="group-hover:translate-x-1 transition">&#9654;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
