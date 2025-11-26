"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroSection() {

  // Smooth scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120; // adjust for header height
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* ---- HERO BACKGROUND VIDEO ---- */}
      <div className="absolute inset-0">
        <video
          src="/hero.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* ---- HERO CONTENT ---- */}
      <div className="relative max-w-5xl mx-auto h-full flex flex-col items-center justify-center text-center z-20 px-6">

        {/* MAIN HEADLINE */}
        <h1
          data-aos="fade-up"
          className="text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-red-600 uppercase leading-tight"
        >
          Train Like a Champion at Birmingham’s Premier Boxing Gym
        </h1>

        {/* SUB-HEADLINE */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl leading-relaxed"
        >
          Professional & Amateur Boxing • Personal Training • Fitness Classes for All Levels
        </p>

        {/* BUTTONS */}
        <div
          data-aos="fade-up"
          data-aos-delay="350"
          className="mt-10 flex gap-6"
        >
          {/* BUTTON 1 — CONTACT (SCROLL) */}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-red-600 text-white px-8 py-3 font-bold text-sm tracking-wide hover:bg-red-700 transition"
          >
            Become a Member
          </button>

          {/* BUTTON 2 — JOIN NOW (EXTERNAL LINK) */}
          <a
            href="https://secure.ashbournemanagement.co.uk/signupUK/index.aspx?fn=GREF2"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-3 font-bold text-sm tracking-wide hover:bg-gray-200 transition"
          >
            Join a Class Today
          </a>
        </div>
      </div>
    </section>
  );
}
