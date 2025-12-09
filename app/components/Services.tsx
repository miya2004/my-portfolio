"use client";

import React, { useLayoutEffect, useRef } from "react";
import { services } from "../data/services";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { x: i % 2 === 0 ? -200 : 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="px-6 py-20 bg-gray-50">
      <h2 className="text-4xl font-bold mb-20 text-center">Services</h2>

      <div className="relative space-y-20">
        {services.map((s, i) => {
          return (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className={`p-10 rounded-3xl shadow-xl max-w-4xl mx-auto text-left transition-all
                ${
                  i % 3 === 0
                    ? "bg-pink-300"
                    : i % 3 === 1
                    ? "bg-blue-200"
                    : "bg-green-300"
                }
              `}
            >
              <h3 className="text-5xl font-bold mb-4">{s.title}</h3>
              <p className="text-lg text-gray-800 max-w-2xl">
                {s.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
