"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { services } from "../data/services";
import { projects } from "../data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const featuredCardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const cards = [...cardsRef.current, ...featuredCardsRef.current];

    cards.forEach((card, i) => {
      if (!card) return;

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
    <>
      <section ref={containerRef} className="px-6 py-24 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-white">Services</p>
          <h2 className="text-5xl font-bold text-white drop-shadow-md">What I craft</h2>

          <div className="relative mt-20 pb-20">
            {services.map((service, i) => {
              const offset = i === 0 ? 0 : -120;
              return (
                <article
                  key={service.title}
                  ref={(el) => {
                    if (el) cardsRef.current[i] = el;
                  }}
                  style={{
                    marginTop: offset,
                    zIndex: services.length - i,
                  }}
                  className={`group relative rounded-4xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 ${service.palette.body}`}
                >
                  <div className="absolute inset-x-8 -top-6 h-8 rounded-t-3xl bg-white shadow-xl opacity-90" />
                  <div className={`absolute inset-0 bg-linear-to-br ${service.palette.shell} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                  <div className="relative grid gap-10 p-10 lg:grid-cols-[minmax(0,1fr)_280px]">
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] text-gray-600">Service</p>
                          <h3 className="text-5xl font-semibold text-gray-900">
                            {service.title}
                          </h3>
                        </div>
                        <span className={`text-5xl font-black ${service.palette.accent}`}>
                          ({String(i + 1).padStart(2, "0")})
                        </span>
                      </div>

                      <p className="text-lg text-gray-800 leading-relaxed">
                        {service.summary}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1 rounded-full bg-white/70 text-gray-800 text-sm font-medium shadow-inner"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="max-h-20 overflow-hidden group-hover:max-h-72 transition-[max-height] duration-500 ease-out text-base text-gray-700">
                        <p>{service.details}</p>
                      </div>

                      <Link
                        href="#contact"
                        className="self-start px-5 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold shadow-md border border-gray-200 hover:-translate-y-0.5 transition"
                      >
                        Contact
                      </Link>
                    </div>

                    <div className="relative h-60 rounded-2xl overflow-hidden shadow-2xl bg-white/60 flex items-center justify-center">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={320}
                        height={240}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

     {/* FEATURED WORK SECTION */}
<section className="px-6 py-24 bg-[#e9dfd2]">
  <h2 className="text-5xl font-bold text-white mb-16">Featured work</h2>

  <div className="grid gap-12 max-w-7xl mx-auto md:grid-cols-2 lg:grid-cols-4">
    {projects.map((project, i) => (
      <div
        key={project.title}
        ref={(el) => {
          if (el) featuredCardsRef.current[i] = el;
        }}
        className="rounded-3xl bg-white shadow-xl overflow-hidden flex flex-col"
      >
        {/* Image */}
        <div className="relative h-72 w-full">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />

          {/* Floating Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Title */}
        <div className="p-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>

          {/* Buttons */}
          <div className="flex gap-3 mt-6">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                className="flex-1 py-2 rounded-lg bg-black text-white text-center font-semibold shadow-md hover:opacity-80 transition"
              >
                Website
              </a>
            )}

            {project.instagram && (
              <a
                href={project.instagram}
                target="_blank"
                className="flex-1 py-2 rounded-lg bg-pink-200 text-black text-center font-semibold shadow-md hover:bg-pink-300 transition"
              >
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    </>
  );
}
