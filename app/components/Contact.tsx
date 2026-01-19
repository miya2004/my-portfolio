"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [open, setOpen] = useState(false);

  const bubbles = useRef<(HTMLElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Falling bubble animation
  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const items = bubbles.current.filter((b): b is HTMLElement => b !== null);

    gsap.set(items, { opacity: 0, y: -70 });

    gsap.to(items, {
      opacity: 1,
      y: 0,
      rotate: () => gsap.utils.random(-6, 6),
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.18,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });
  }, []);

  // Popup animation
  useEffect(() => {
    if (open) {
      gsap.fromTo(
        "#popup",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" }
      );
    }
  }, [open]);

  return (
    <section
      ref={sectionRef}
      className="
        relative 
        w-full 
        h-screen 
        bg-[#F8F6E9] 
        bg-paper 
        overflow-hidden
        flex flex-col items-center justify-center
      "
    >
      {/* TEXTURE IS BEHIND — CONTENT MUST BE ABOVE */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

        {/* LOCATION + TIME */}
        <div className="absolute top-6 left-6 text-[#4C3837] font-semibold text-xl">
          Eindhoven, NL
        </div>

        <div className="absolute top-6 right-6 text-[#4C3837] font-semibold text-xl">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>

        {/* HEADLINE */}
        <h1 className="text-[70px] font-extrabold text-[#F4A9C2]/80 text-center leading-[1.1] mb-10">
          Let&apos;s work <span className="text-[#F4A9C2]/80">together!</span>
        </h1>

        {/* BUBBLE STACK */}
        <div className="relative flex flex-col items-center gap-8 w-full">

          {/* Say hiii */}
          <div
            ref={(el) => { bubbles.current[0] = el; }}
            onClick={() => setOpen(true)}
            className="cursor-pointer absolute left-[8%] top-20 -rotate-18 bg-[#F2E6AC] px-10 py-5 rounded-[999px] shadow-xl text-[40px] font-bold"
          >
            Say hiii
          </div>

          {/* Leopard icon */}
          <div
            ref={(el) => { bubbles.current[1] = el; }}
            onClick={() => setOpen(true)}
            className="cursor-pointer absolute left-[5%] bottom-[15%] w-28 h-28 rounded-full shadow-xl overflow-hidden flex items-center justify-center"
          >
            <Image src="/leopard.png" alt="Leopard sticker" width={112} height={112} className="w-full h-full object-cover" />
          </div>

          {/* Reach out */}
          <div
            ref={(el) => { bubbles.current[2] = el; }}
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-[#C1DBE8] text-black text-[55px] font-semibold px-16 py-6 rounded-[999px] shadow-xl hover:scale-105 transition"
          >
            Reach out
          </div>

          {/* Let's chat */}
          <div
            ref={(el) => { bubbles.current[3] = el; }}
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-[#D9D7B1] text-white text-[55px] font-bold px-16 py-8 rounded-[999px] shadow-xl -rotate-3"
          >
            Let&apos;s chat
          </div>

          {/* Send a message */}
          <div
            ref={(el) => { bubbles.current[4] = el; }}
            onClick={() => setOpen(true)}
            className="cursor-pointer bg-[#F5CBD7] text-white text-[55px] font-bold px-24 py-8 rounded-[999px] shadow-xl"
          >
            Send a message
          </div>

          {/* Email bubble */}
          <div
            ref={(el) => { bubbles.current[5] = el; }}
            onClick={() => setOpen(true)}
            className="cursor-pointer absolute right-[6%] bottom-[12%] w-36 h-36 bg-[#D0A77B] rounded-full shadow-xl flex items-center justify-center text-6xl"
          >
            ✉️
          </div>
        </div>

        {/* FOOTER NAV */}
        <div className="absolute bottom-6 w-full flex justify-center gap-16 text-[#4C3837] font-semibold text-lg">
          <a href="#" className="hover:text-[#4C3837]">Instagram</a>
          <a href="#" className="hover:text-[#4C3837]">Linkedin</a>
          <a href="#" className="hover:text-[#4C3837]">WhatsApp</a>
          <a href="#" className="hover:text-[#4C3837]">TikTok</a>
        </div>

        {/* POPUP */}
        {open && (
          <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
            <div
              id="popup"
              className="w-[92%] max-w-5xl bg-[#F0E8D5] rounded-3xl shadow-2xl p-10 relative border-4 border-[#4C3837]"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-6 top-4 text-[45px] text-[#4C3837] font-bold"
              >
                ×
              </button>

              <h2 className="text-[60px] font-extrabold text-[#4C3837] mb-8">
                Get in touch
              </h2>

              {/* FORM GRID */}
              <div className="grid grid-cols-3 gap-6 text-[#4C3837] font-semibold text-lg">

                {/* NAME */}
                <div className="bg-[#E9DDC0] p-6 rounded-2xl">
                  <label className="block mb-2">Full name</label>
                  <input
                    placeholder="Your name"
                    className="w-full bg-transparent outline-none text-[#4C3837]/70"
                  />
                </div>

                {/* EMAIL */}
                <div className="bg-[#E9DDC0] p-6 rounded-2xl">
                  <label className="block mb-2">Email</label>
                  <input
                    placeholder="you@email.com"
                    className="w-full bg-transparent outline-none text-[#4C3837]/70"
                  />
                </div>

                {/* COMPANY */}
                <div className="bg-[#E9DDC0] p-6 rounded-2xl">
                  <label className="block mb-2">Company</label>
                  <input
                    placeholder="Your company"
                    className="w-full bg-transparent outline-none text-[#4C3837]/70"
                  />
                </div>

                {/* PROJECT DETAILS */}
                <div className="bg-[#E9DDC0] p-6 rounded-2xl">
                  <label className="block mb-2">Project details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me your goals"
                    className="w-full bg-transparent outline-none text-[#4C3837]/70"
                  ></textarea>
                </div>

                {/* SERVICES */}
                <div className="bg-[#E9DDC0] p-6 rounded-2xl">
                  <label className="block mb-2">What can I do for you?</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "UGC",
                      "Website Design",
                      "Front-End Developing",
                      "branding",
                      "Identity",
                      "Other",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1 border border-[#4C3837] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUDGET RANGE */}
               
              </div>

              {/* SUBMIT */}
              <div className="flex justify-center mt-10">
                <button className="bg-[#4C3837] text-white text-2xl font-bold px-10 py-4 rounded-full shadow-xl hover:scale-105 transition">
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
