"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../data/services";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const serviceRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const cards = serviceRefs.current;

    const pinTriggers: ScrollTrigger[] = [];
    const fadeTriggers: ScrollTrigger[] = [];

    cards.forEach((card, index) => {
      if (!card) return;
      const isLastCard = index === cards.length - 1;

      /** 📌 PIN EACH CARD UNTIL THE NEXT SECTION STARTS */
      pinTriggers.push(
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: "#featured-work", // <— STOP BEFORE NEXT SECTION
          end: "top top",
          pin: true,
          pinSpacing: isLastCard,
        })
      );

      /** 🎨 Fade in animation */
      fadeTriggers.push(
        gsap.fromTo(
          card,
          { y: 150, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        ).scrollTrigger!
      );
    });

    return () => {
      [...pinTriggers, ...fadeTriggers].forEach((t) => t?.kill());
    };
  }, []);

  return (
    <>
      {/* ======================= SERVICES SECTION ======================= */}
      <section
        id="services-section"
        className="relative w-full bg-[#F8F6E9] px-0"
      >
        <div
          className="
            w-full
            min-h-full
            bg-[#4C3837]
            rounded-t-[48px]
            relative
            pb-0
          "
        >

          {/* ======= FOLDER TAB ======= */}
          <div
            className="
              absolute
              -top-16
              left-1/4
              -translate-x-1/2
              w-[260px]
              h-[70px]
              bg-[#4C3837]
              rounded-t-3xl
              flex
              items-center
              justify-center
              z-20
              font-handwrite
            "
          >
            <h2 className="text-3xl font-semibold text-white ">Services</h2>
          </div>

          {/* ======= CONTENT INSIDE FOLDER ======= */}
          <div className="max-w-6xl mx-auto pt-20 px-6 space-y-40">

            {services.map((service, i) => (
              <div
                key={service.title}
                ref={(el) => {
                  if (el) serviceRefs.current[i] = el;
                }}
                className="
                  relative
                  w-full
                  rounded-3xl
                  shadow-xl
                  overflow-hidden
                  bg-[#F9F5EF]    /* Inner page color */
                  
                "
              >
                {/* ===== INNER GRID CONTENT ===== */}
                <div className="grid md:grid-cols-2 gap-10 p-12">

                  {/* LEFT TEXT */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-6xl font-bold text-black">
                      {service.title}
                    </h3>

                    <p className="text-lg text-black/80 leading-relaxed">
                      {service.summary}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white text-black px-4 py-1 rounded-full shadow-inner text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="#contact"
                      className="
                        mt-4 inline-flex items-center gap-3
                        px-6 py-3 bg-white
                        text-black rounded-full
                        shadow-md text-lg font-semibold
                        hover:scale-105 transition
                      "
                    >
                      Contact
                    </Link>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* SECTION NUMBER */}
                <p className="text-[72px] font-bold text-black/40 pr-8 pb-6 text-right">
                  ({String(i + 1).padStart(2, "0")})
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>




    </>
  );
}
