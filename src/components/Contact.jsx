"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        () => {
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <section className="w-full bg-[#0c0c0c] py-40 text-white overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight">
            <span className="text-red-600">Contact</span> Box Fit Coaching
          </h2>

          <div className="mt-8 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Box Fit Coaching — Birmingham
              </span>
              <br />
              69 Rea Street, Birmingham, B5 6BB, United Kingdom
            </p>

            <p>
              <span className="text-white font-semibold">Phone:</span>{" "}
              <a
                href="tel:07737163987"
                className="hover:text-red-600 transition"
              >
                07737163987
              </a>
            </p>

            {/* HOURS */}
            <div className="mt-6">
              <p className="text-white font-semibold text-lg">Hours:</p>
              <p>Mon–Sun: 10:00 AM – 8:00 PM</p>
              <p className="text-gray-400 text-sm mt-1">(Walk-ins welcome)</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={sendEmail} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleInput}
              required
              className="w-full bg-black text-white px-4 py-4 outline-none rounded-none"
            />

            <input
              name="email"
              type="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleInput}
              required
              className="w-full bg-black text-white px-4 py-4 outline-none rounded-none"
            />
          </div>

          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleInput}
            required
            className="w-full bg-black text-white px-4 py-4 outline-none rounded-none"
          />

          <textarea
            name="message"
            placeholder="Write your message"
            value={form.message}
            onChange={handleInput}
            required
            className="w-full h-60 bg-black text-white px-4 py-4 outline-none rounded-none resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-white text-black font-bold tracking-wider px-10 py-4 inline-flex items-center gap-2 hover:bg-red-600 hover:text-white transition"
          >
            SEND MESSAGE
          </button>

          {status && <p className="text-gray-300 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
