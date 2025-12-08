import React from "react";
import Image from "next/image";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">Featured Work</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <a key={i} href={p.link} className="group">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={p.img}
                width={500}
                height={500}
                alt={p.title}
                className="group-hover:scale-105 duration-500"
              />
            </div>
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-600">{p.role}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
