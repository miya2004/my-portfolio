import React from "react";

export default function ProjectsAgenda() {
  return (
    <section className="w-full min-h-screen bg-[#FAF9EF] flex px-6 py-20">
      {/* LEFT – AGENDA TEXT */}
      <div className="flex items-center">
        <h2 className="text-6xl font-semibold text-gray-700 rotate-90 origin-left tracking-wide">
          Agenda
        </h2>
      </div>

      {/* RIGHT – BOOK STACK */}
      <div className="ml-20 flex flex-col gap-6 w-full max-w-3xl">

        {/* BOOK 1 */}
        <div className="bg-[#523A3A] text-white rounded-xl border-[3px] border-[#3B2A2A] px-10 py-6 shadow-md">
          <h3 className="text-4xl font-bold">Works</h3>
          <p className="text-sm opacity-70 mt-1">Authored by Miya Pham</p>
        </div>

        {/* BOOK 2 */}
        <div className="bg-[#DEA5B4] text-[#3E3E4A] rounded-xl px-10 py-6 shadow-md">
          <p className="text-lg">
            Self-Initiated and Organization Experiences
          </p>
        </div>

        {/* BOOK 3 */}
        <div className="bg-[#C88952] text-white rounded-xl px-10 py-6 shadow-md flex">
          <div className="w-2 bg-[#5E3D24] mr-4 rounded"></div>
          <h3 className="text-2xl font-semibold">
            SKILLS & PASSIONS
          </h3>
        </div>

        {/* BOOK 4 */}
        <div className="bg-[#7C4437] text-white rounded-xl px-10 py-6 shadow-md">
          <h3 className="text-3xl font-bold tracking-wide">
            HUYEN MI PHAM
          </h3>
        </div>

      </div>
    </section>
  );
}
