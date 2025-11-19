"use client";
import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, sectet adipis nula nullam auctor lorem sed ruale bolt.",
      author: "Mark Joseph",
      role: "Coach",
    },
    {
      text: "At our boxing academy, everyone gets stronger every single day.",
      author: "Liam Carter",
      role: "Member",
    },
    {
      text: "Training here changed my mindset completely—disciplined & confident.",
      author: "Chris Walker",
      role: "Athlete",
    }
  ];

  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — FIXED IMAGE */}
        <div className="relative h-[600px] lg:h-[800px] sticky top-24 flex items-center">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a1f4c"
            alt="Boxer"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Black overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-xl"></div>
        </div>

        {/* RIGHT — SCROLLING CONTENT */}
        <div className="space-y-32 mt-12 pl-6 lg:pl-16">

          {/* SECTION TITLE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
              <span className="text-red-600">Reviews</span>{" "}
              of Our <br /> Boxing Academy
            </h2>
          </div>

          {/* TESTIMONIAL BLOCKS */}
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-h-[300px] flex flex-col justify-center scroll-mt-20"
            >
              <div className="text-7xl text-white mb-6">“</div>
              <p className="text-xl md:text-2xl font-semibold leading-relaxed max-w-2xl">
                {item.text}
              </p>

              <div className="mt-6">
                <p className="text-gray-400 text-sm">{item.role}</p>
                <p className="text-white text-lg font-bold uppercase">{item.author}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
