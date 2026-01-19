"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedWork() {
  const refs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    refs.current.forEach((card) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="featured-work" className="px-6 py-24 bg-[#4C3837]">


      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-16">
          Featured Work
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) refs.current[i] = el;
              }}
              className="rounded-3xl bg-white shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-72 w-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                {/* FLOATING TAGS */}
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

              {/* CONTENT */}
              <div className="p-6 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      className="flex-1 py-2 rounded-lg bg-[#4C3837] text-white text-center font-semibold shadow-md hover:opacity-80 transition"
                    >
                      Website
                    </a>
                  )}

                  {project.instagram && (
                    <a
                      href={project.instagram}
                      target="_blank"
                      className="flex-1 py-2 rounded-lg   bg-[#F5CBD7]  text-black text-center font-semibold shadow-md hover:bg-pink-300 transition"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
