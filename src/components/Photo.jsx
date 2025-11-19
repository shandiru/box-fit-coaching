"use client";

import React, { useState, useEffect } from "react";
import Masonry from "../components/Masonry";
import InteractiveViewer from "../components/InteractiveViewer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Gallery() {
  const items = [
    { id: "1", img: "/hero.webp", height: 720 },
    { id: "2", img: "/bus.webp", height: 680 },
    { id: "3", img: "/hero.webp", height: 700 },
    { id: "4", img: "/hero.webp", height: 660 },
    { id: "5", img: "/chair.webp", height: 740 },
    { id: "6", img: "/hero.webp", height: 710 },
    { id: "7", img: "/tyre.webp", height: 650 },
    { id: "8", img: "/service.webp", height: 720 },
    { id: "9", img: "/up.webp", height: 700 },
    { id: "10", img: "/men.webp", height: 730 },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // animation only once
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <section className="w-full py-20 bg-black text-white">

        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-12 px-4">
          <h2
            className="text-5xl font-bold"
            data-aos="fade-up"
          >
            Workshop Gallery
          </h2>

          <p
            className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Explore our workshop — craftsmanship, precision, and passion in
            every detail.
          </p>
        </div>

        {/* Masonry Grid */}
        <div
          className="max-w-[1600px] mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Masonry items={items} onImageClick={setActiveIndex} />
        </div>
      </section>

      {/* Fullscreen Viewer */}
      <InteractiveViewer
        items={items}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNext={() => setActiveIndex((i) => (i + 1) % items.length)}
        onPrev={() =>
          setActiveIndex((i) => (i === 0 ? items.length - 1 : i - 1))
        }
      />
    </>
  );
}
