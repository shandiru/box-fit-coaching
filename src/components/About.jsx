"use client";
import React from "react";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#111] py-20">

      <div className="relative max-w-7xl mx-auto">

        {/* IMAGE — DESKTOP + MOBILE ✔ Responsive + AOS */}
        <img
          src="/about.jpg"
          alt="Boxing training"
          data-aos="fade-right"
          data-aos-duration="800"
          className="
            w-[900px]
            h-[400px] 
            md:h-[500px] 
            lg:h-[600px]
            object-cover
          "
        />

        {/* TEXT BOX — DESKTOP overlay, MOBILE normal flow */}
        <div
          className="
            bg-black
            text-white
            shadow-xl
            w-full

            /* DESKTOP overlay */
            lg:absolute 
            lg:top-1/2 
            lg:right-0 
            lg:-translate-y-1/2 
            lg:w-[50%]
            lg:h-[500px]
            lg:flex 
            lg:flex-col 
            lg:justify-center

            /* MOBILE & TABLET spacing */
            p-10
            md:p-12
            lg:p-16 
            mt-6 
            lg:mt-0
          "
          data-aos="fade-left"
          data-aos-duration="800"
        >

          {/* RED STRIP — only on desktop */}
          <div className="hidden lg:block absolute left-0 top-0 h-full w-[8px] bg-red-600"></div>

          {/* CONTENT */}
          <div className="lg:ml-6">
            <h2 
              className="text-3xl md:text-4xl font-extrabold uppercase leading-tight mb-6"
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              ABOUT BOX FIT COACHING
            </h2>

            <p 
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              We are a dedicated boxing facility in Birmingham offering 
              professional-level training for beginners, amateurs, and 
              competitive fighters. Our coaches bring years of coaching 
              and ring experience, helping members build confidence, power, 
              discipline, and real technique — no matter their starting point.
            </p>

            <p 
              className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              If you want a supportive atmosphere, real boxing training, 
              and results you can feel, you're in the right place.
            </p>

            <button 
              className="flex items-center gap-2 text-white font-semibold tracking-wide group"
              data-aos="fade-up" 
              data-aos-delay="500"
            >
              <span>LEARN MORE</span>
              <span className="group-hover:translate-x-1 transition">&#9654;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
