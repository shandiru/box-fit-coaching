"use client";
import React from "react";

const timetable = {
  Monday: [
    { name: "Junior Boxers", time: "5PM" },
    { name: "Womens Boxing", time: "6PM" },
    { name: "SQUAD", time: "7:30PM" },
  ],
  Tuesday: [
    { name: "Beginners", time: "10:30AM" },
    { name: "BFC Wellbeing Programme", time: "5PM" },
    { name: "BFC Wellbeing Programme", time: "6PM" },
    { name: "Beginners", time: "7:30PM" },
  ],
  Wednesday: [
    { name: "Junior Boxers", time: "5PM" },
    { name: "Beginners", time: "6PM" },
    { name: "SQUAD", time: "7:30PM" },
  ],
  Thursday: [
    { name: "Beginners", time: "10:30AM" },
    { name: "BFC Wellbeing Programme", time: "5PM" },
    { name: "Womens Boxing", time: "6PM" },
    { name: "Beginners", time: "7:30PM" },
  ],
  Friday: [
    { name: "Junior Boxers", time: "5PM" },
    { name: "Beginners", time: "6PM" },
    { name: "SQUAD", time: "7:30PM" },
  ],
  Saturday: [{ name: "Beginners", time: "11AM" }],
  Sunday: [{ name: "BFC Wellbeing Programme", time: "1PM" }],
};

export default function ClassTimetable() {
  return (
    <section id="timetable" className="bg-black py-20 px-6 overflow-x-auto">
      <div className="max-w-[1400px] mx-auto">

        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center mb-12 uppercase tracking-wide">
          Weekly Class Timetable
        </h2>

        {/* Horizontal scroll wrapper */}
        <div className="min-w-[1100px] grid grid-cols-7 gap-6">
          {Object.entries(timetable).map(([day, sessions]) => (
            <div
              key={day}
              className="bg-[#101010] rounded-2xl shadow-[0_0_20px_-5px_rgba(255,0,0,0.3)] flex flex-col overflow-hidden"
            >

              {/* Day Header */}
              <div className="bg-red-600 py-4 text-center">
                <h3 className="text-white font-bold text-xl uppercase tracking-wide">
                  {day}
                </h3>
              </div>

              {/* Sessions container */}
              <div className="p-5 flex-1 flex flex-col gap-4">
                {sessions.map((s, idx) => (
                  <div
                    key={idx}
                    className="bg-[#151515] p-4 rounded-xl shadow-md hover:shadow-red-500/30 hover:bg-[#1c1c1c] transition-all transform hover:scale-105"
                  >
                    <p className="text-white font-semibold text-sm leading-tight">
                      {s.name}
                    </p>
                    <p className="text-red-500 text-sm font-bold mt-2">
                      {s.time}
                    </p>
                  </div>
                ))}

                {/* Filler space to match height */}
                {Array.from({ length: 4 - sessions.length }).map((_, i) => (
                  <div key={i} className="h-20"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-400 mt-10 text-lg tracking-wide">
          All sessions are 1 hour.
        </p>

      </div>
    </section>
  );
}
