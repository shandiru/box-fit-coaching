"use client";
import React from "react";

const timetable = {
  Monday: [
    { name: "THE EARLY ROUNDS (ALL LEVELS)", time: "10:30 AM" },
    { name: "JUNIOR BOXERS (ALL LEVELS)", time: "16:00" },
    { name: "WOMENS ONLY BOXING", time: "17:00" },
    { name: "THE CHAMPIONSHIP ROUNDS (ALL LEVELS)", time: "17:00" },
  ],
  Tuesday: [
    { name: "THE AGELESS LAB (ALL LEVELS)", time: "10:30 AM" },
    { name: "BOXING (ALL LEVELS)", time: "18:00" },
    { name: "WTING", time: "19:30" },
    { name: "THE CHAMPIONSHIP ROUNDS (ALL LEVELS)", time: "21:00" },
  ],
  Wednesday: [
    { name: "THE AGELESS LAB (ALL LEVELS)", time: "10:30 AM" },
    { name: "BOXING (ALL LEVELS)", time: "18:00" },
    { name: "BEGINNERS", time: "19:30" },
    { name: "THE CHAMPIONSHIP ROUNDS FITNESS", time: "19:00" },
  ],
  Thursday: [
    { name: "THE AGELESS LAB (ALL LEVELS)", time: "12:30 PM" },
    { name: "BOXING (ALL LEVELS)", time: "18:00" },
    { name: "BOGEL", time: "19:30" },
    { name: "THE CHAMPIONSHIP ROUNDS (ALL LEVELS)", time: "20:00" },
  ],
  Friday: [
    { name: "THE EARLY ROUNDS (ALL LEVELS)", time: "10:00 AM" },
    { name: "WOMENS ONLY BOXING (ALL LEVELS)", time: "19:30" },
    { name: "SQUAD", time: "19:30" },
  ],
  Saturday: [
    { name: "BEGINNERS", time: "17:00" },
  ],
  Sunday: [
    { name: "JUNIOR BOXERS (7–10)", time: "11:00 AM" },
    { name: "BEE POWER CIRCUIT (ALL LEVELS)", time: "12:30 PM" },
  ],
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
                    className="bg-[#151515] p-4 rounded-xl shadow-md hover:shadow-red-500/30 hover:bg-[#1c1c1c] transition-all"
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
