"use client";
import React from "react";

export default function ClassesGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4">

        {/* Row 1 - Image 1 */}
        <img
          src="https://images.unsplash.com/photo-1576435728678-1d5f4f6cde89"
          className="w-full h-[380px] object-cover"
          alt="boxing"
        />

        {/* Row 1 - Image 2 */}
        <img
          src="https://images.unsplash.com/photo-1552072092-7f09d6c75c3e"
          className="w-full h-[380px] object-cover"
          alt="boxing training"
        />

        {/* Row 1 - Red Text Box */}
        <div className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]">
          <h2 className="text-3xl font-extrabold uppercase mb-4">Boxing (All Levels)</h2>
          <p className="text-sm leading-relaxed opacity-90 mb-6">
            Nullam id dolor id nibh ultricies vehicula ut id elit sem lacinia quam
            venenatis vestibulum. Maecenas sed diam eget risus varius blandit.
          </p>
          <button className="flex items-center gap-2 font-bold tracking-wide">
            VIEW MORE <span>▶</span>
          </button>
        </div>

        {/* Row 1 - Image 4 */}
        <img
          src="https://images.unsplash.com/photo-1605428099395-00f4f07d7dd1"
          className="w-full h-[380px] object-cover"
          alt="boxing punch"
        />

        {/* Row 2 - Red Text Box */}
        <div className="bg-red-600 text-white p-10 flex flex-col justify-center h-[380px]">
          <h2 className="text-3xl font-extrabold uppercase mb-4">Kickboxing</h2>
          <p className="text-sm leading-relaxed opacity-90 mb-6">
            Nullam id dolor id nibh ultricies vehicula ut id elit sem lacinia quam
            venenatis vestibulum. Maecenas sed diam eget risus varius blandit.
          </p>
          <button className="flex items-center gap-2 font-bold tracking-wide">
            VIEW MORE <span>▶</span>
          </button>
        </div>

        {/* Row 2 - Image 6 */}
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a1f4c"
          className="w-full h-[380px] object-cover"
          alt="boxing gym"
        />

        {/* Row 2 - Image 7 */}
        <img
          src="https://images.unsplash.com/photo-1552653108-2315c49e0d0d"
          className="w-full h-[380px] object-cover"
          alt="boxing fight"
        />

        {/* Row 2 - Image 8 */}
        <img
          src="https://images.unsplash.com/photo-1617957743152-341fa2342a59"
          className="w-full h-[380px] object-cover"
          alt="kids boxing"
        />
      </div>
    </section>
  );
}
