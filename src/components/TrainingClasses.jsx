"use client";
import React from "react";

export default function ClassesGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4">

        {/* Image 1 */}
        <img
          src="h1.jpg"
          className="w-full h-[380px] object-cover"
          alt="boxing"
          data-aos="fade-right"
          data-aos-duration="800"
        />

        {/* BOX 1 */}
        <div
          className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h2 className="text-3xl font-extrabold uppercase mb-4">
            Boxing Classes <br /> for All Levels
          </h2>

          <p className="text-sm leading-relaxed opacity-90 mb-6">
            High-energy sessions focused on technique, footwork, combinations,
            and conditioning.
          </p>

          <button className="flex items-center gap-2 font-bold tracking-wide">
            VIEW MORE <span>▶</span>
          </button>
        </div>

        {/* Image 2 */}
        <img
          src="h2.jpg"
          className="w-full h-[380px] object-cover"
          alt="boxing training"
          data-aos="fade-up"
          data-aos-duration="800"
        />
            {/* BOX 4 — NOW NORMAL (NO HOVER, NO IMAGE) */}
        <div
          className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl font-extrabold uppercase mb-4">
            Boxing for Fitness
          </h2>

          <p className="text-sm leading-relaxed opacity-90 mb-6">
            A non-contact class designed to burn calories, strengthen the body,
            and improve cardio.
          </p>

          <button className="flex items-center gap-2 font-bold tracking-wide">
            VIEW MORE <span>▶</span>
          </button>
        </div>

       

        {/* BOX 2 */}
        <div
          className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <h2 className="text-3xl font-extrabold uppercase mb-4">
            Personal Training
          </h2>

          <p className="text-sm leading-relaxed opacity-90 mb-6">
            1-to-1 coaching tailored to your goals — weight loss, boxing skills,
            strength, or competition prep.
          </p>

          <button className="flex items-center gap-2 font-bold tracking-wide">
            VIEW MORE <span>▶</span>
          </button>
        </div>

        {/* Image 4 */}
        <img
          src="h4.jpg"
          className="w-full h-[380px] object-cover"
          alt="boxing gym"
          data-aos="fade-up"
          data-aos-duration="800"
        />

        {/* BOX 3 */}
        <div
          className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl font-extrabold uppercase mb-4">
            Amateur & Competitive <br /> Boxing Coaching
          </h2>

          <p className="text-sm leading-relaxed opacity-90 mb-6">
            Structured fighter development for those wanting to compete.
          </p>

          <button className="flex items-center gap-2 font-bold tracking-wide">
            VIEW MORE <span>▶</span>
          </button>
        </div>
       
        {/* Image 3 */}
        <img
          src="h3.jpg"
          className="w-full h-[380px] object-cover"
          alt="boxing punch"
          data-aos="fade-left"
          data-aos-duration="800"
        />
       
      </div>
    </section>
  );
}
