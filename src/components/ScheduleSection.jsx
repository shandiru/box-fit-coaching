"use client";
import React from "react";

export default function ClassTimetable() {
  return (
    <section
      className="w-full bg-black py-10 px-4 flex justify-center"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="max-w-6xl w-full">

        {/* Heading */}
        <h2
          className="text-white text-3xl md:text-4xl font-bold text-center mb-8"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          Weekly Class Timetable
        </h2>

        {/* Timetable Image */}
        <div
          className="w-full rounded-xl overflow-hidden shadow-lg border border-red-600"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          <img
            src="/timetable-bfc.png"
            alt="BFC Class Timetable"
            className="w-full object-cover"
          />
        </div>

        {/* Footer Note */}
        <p
          className="text-center text-white/80 text-sm mt-6 tracking-wide"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          All sessions are 1 hour
        </p>
      </div>
    </section>
  );
}
