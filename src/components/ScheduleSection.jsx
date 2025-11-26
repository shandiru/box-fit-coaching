"use client";
import React, { useState, useEffect } from "react";

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
  const [isMobile, setIsMobile] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleActive = (key) => {
    if (!isMobile) return; // only for mobile
    setActiveCard((prev) => (prev === key ? null : key));
  };

  return (
    <section id="timetable" className="bg-black py-20 px-6 overflow-x-auto">
      <div className="max-w-[1400px] mx-auto">

        <h2 className="text-white text-4xl md:text-5xl font-extrabold text-center mb-12 uppercase tracking-wide">
          Weekly Class Timetable
        </h2>

        <div className="min-w-[1100px] grid grid-cols-7 gap-6">
          {Object.entries(timetable).map(([day, sessions]) => (
            <div
              key={day}
              className="bg-[#101010] rounded-2xl shadow-[0_0_20px_-5px_rgba(255,0,0,0.3)] flex flex-col overflow-hidden"
            >

              <div className="bg-red-600 py-4 text-center">
                <h3 className="text-white font-bold text-xl uppercase tracking-wide">{day}</h3>
              </div>

              <div className="p-5 flex-1 flex flex-col gap-4">
                {sessions.map((s, idx) => {
                  const key = `${day}-${idx}`;
                  const isActive = activeCard === key;

                  return (
                    <div
                      key={idx}
                      onClick={() => toggleActive(key)}
                      className={`
                        bg-[#151515] p-4 rounded-xl shadow-md
                        transition-all transform
                        hover:scale-105 hover:shadow-red-500/30 hover:bg-[#1c1c1c]
                        ${isMobile && isActive ? "scale-105 shadow-red-500/30" : ""}
                      `}
                    >
                      <p className="text-white font-semibold text-sm leading-tight">{s.name}</p>
                      <p className="text-red-500 text-sm font-bold mt-2">{s.time}</p>
                    </div>
                  );
                })}

                {Array.from({ length: 4 - sessions.length }).map((_, i) => (
                  <div key={i} className="h-20"></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 mt-10 text-lg tracking-wide">
          All sessions are 1 hour.
        </p>

      </div>
    </section>
  );
}
