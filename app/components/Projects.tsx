import React from "react";

export default function ProjectsAgenda() {
  return (
    <section className="w-full min-h-screen bg-[#F5F5F5] flex items-center px-10 py-20 relative">

      {/* LEFT – AGENDA TEXT CENTERED */}
      <div className="flex items-center justify-center">
        <h2 className="text-[110px] font-semibold text-[#3E3E3E] rotate-90 origin-center leading-none tracking-wide">
          Agenda
        </h2>
      </div>

      {/* RIGHT – STACK OF BOOKS */}
      <div className="ml-32 flex flex-col gap-10 w-full max-w-4xl">

        {/* BOOK 1 — Works */}
        <div className="bg-[#523A3A] text-white rounded-xl px-14 py-10 shadow-md relative w-[90%]">
          {/* Decorative spine lines */}
          <div className="absolute left-6 top-4 bottom-4 border-l-4 border-white/30"></div>
          <div className="absolute left-10 top-4 bottom-4 border-l-2 border-white/30"></div>

          <h3 className="text-5xl font-bold">Works</h3>
          <p className="text-base opacity-75 mt-2">Authored by Miya Pham</p>
        </div>

        {/* BOOK 2 — Self-initiated */}
        <div className="bg-[#DEA5B4] text-[#3E3E4A] rounded-xl px-14 py-10 shadow-md w-[75%]">
          <p className="text-xl text-center font-medium">
            Self-Initiated and organization Experiences
          </p>
        </div>

        {/* BOOK 3 — Skills & Passions */}
        <div className="bg-[#C88952] text-white rounded-xl px-14 py-10 shadow-md relative flex w-[85%]">
          {/* Decorative bold spine stripes */}
          <div className="absolute left-8 top-4 bottom-4 w-2 bg-[#5E3D24] rounded-full"></div>
          <div className="absolute left-14 top-4 bottom-4 w-1 bg-[#5E3D24] rounded-full"></div>

          <h3 className="text-3xl font-semibold mx-auto">
            SKILLS & PASSIONS
          </h3>
        </div>

        {/* BOOK 4 — Name */}
        <div className="bg-[#7C4437] text-white rounded-xl px-14 py-10 shadow-md w-[80%]">
          <h3 className="text-4xl font-semibold tracking-wide text-center">
            HUYEN MI PHAM
          </h3>
        </div>

      </div>
    </section>
  );
}
