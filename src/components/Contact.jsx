"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#0c0c0c] py-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* LEFT CONTENT */}
        <div>
          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
            <span className="text-red-600">Contact</span>{" "}
            Us For <br /> Any Further Info
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-300 leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>

          {/* ADDRESS BLOCKS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">

            {/* Address 1 */}
            <div>
              <p className="text-lg leading-relaxed">
                251 Purple Sunset Avenue <br />
                Brooklyn, BXY 9210 <br />
                <a href="mailto:mailto@example.com" className="text-gray-300 hover:text-white">
                  mailto@example.com
                </a>
              </p>
            </div>

            {/* Address 2 */}
            <div>
              <p className="text-lg leading-relaxed">
                251 Purple Sunset Avenue <br />
                Brooklyn, BXY 9210 <br />
                <a href="mailto:mailto@example.com" className="text-gray-300 hover:text-white">
                  mailto@example.com
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="space-y-8">

          {/* Top Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-black text-white px-4 py-4 outline-none rounded-none"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full bg-black text-white px-4 py-4 outline-none rounded-none"
            />
          </div>

          {/* Message Box */}
          <textarea
            placeholder="Write here"
            className="w-full h-60 bg-black text-white px-4 py-4 outline-none rounded-none resize-none"
          ></textarea>

          {/* Submit Button */}
          <button className="bg-white text-black font-bold tracking-wider px-10 py-4 inline-flex items-center gap-2 hover:bg-gray-200 transition">
            SEND MESSAGE <span>▶</span>
          </button>

        </div>
      </div>
    </section>
  );
}
