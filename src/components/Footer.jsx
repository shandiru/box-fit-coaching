"use client";

import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 border-t border-[#1a1a1a] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-white text-3xl font-extrabold tracking-wide">
            BOX FIT COACHING
          </h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Birmingham’s dedicated boxing facility offering real training, 
            supportive coaching, powerful fitness programs, and classes for all levels.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-red-600 transition cursor-pointer">Home</li>
            <li className="hover:text-red-600 transition cursor-pointer">Classes</li>
            <li className="hover:text-red-600 transition cursor-pointer">Timetable</li>
            <li className="hover:text-red-600 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-red-600" />
              69 Rea Street, Birmingham, B5 6BB, United Kingdom
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-red-600" />
              07737163987
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-red-600" />
              boxfitcoaching@gmail.com
            </li>
          </ul>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a className="p-3 rounded-full bg-[#111] hover:bg-red-600 transition cursor-pointer">
              <Facebook size={20} className="text-white" />
            </a>
            <a className="p-3 rounded-full bg-[#111] hover:bg-red-600 transition cursor-pointer">
              <Instagram size={20} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="border-t border-[#1a1a1a] mt-12 pt-6 text-center text-gray-500">
        © {new Date().getFullYear()} Box Fit Coaching. All Rights Reserved.
      </div>
    </footer>
  );
}
