"use client";
import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-[#0c0c0c] py-20 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* LEFT CONTENT */}
        <div>
          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
            <span className="text-red-600">Contact</span> Box Fit Coaching
          </h2>

          {/* CONTACT INFO */}
          <div className="mt-8 space-y-6 text-gray-300 text-lg leading-relaxed">

            <p>
              <span className="text-white font-semibold">Box Fit Coaching — Birmingham</span><br/>
              69 Rea Street, Birmingham, B5 6BB, United Kingdom
            </p>

            <p>
              <span className="text-white font-semibold">Phone:</span>{" "}
              <a href="tel:07737163987" className="hover:text-red-600 transition">
                07737163987
              </a>
            </p>

            <p>
              <span className="text-white font-semibold">Website:</span>{" "}
              <a href="#" className="hover:text-red-600 transition">
                Box Fit Coaching
              </a>
            </p>

            {/* HOURS */}
            <div className="mt-6">
              <p className="text-white font-semibold text-lg">Hours:</p>
              <p>Mon–Sun: 10:00 AM – 8:00 PM</p>
              <p className="text-gray-400 text-sm mt-1">
                (Walk-ins welcome)
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

          {/* Message */}
          <textarea
            placeholder="Write here"
            className="w-full h-60 bg-black text-white px-4 py-4 outline-none rounded-none resize-none"
          ></textarea>

          {/* Submit */}
          <button className="bg-white text-black font-bold tracking-wider px-10 py-4 inline-flex items-center gap-2 hover:bg-red-600 hover:text-white transition">
            SEND MESSAGE <span>▶</span>
          </button>

        </div>

      </div>
    </section>
  );
}
