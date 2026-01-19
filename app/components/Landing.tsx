import React from "react";
import Image from "next/image";
import localFont from "next/font/local";

// ===== IMPORT BRUSH FONT =====
const BrushFont = localFont({
  src: "../../public/fonts/appopaint-Regular.otf",
  variable: "--font-brush",
});

export default function Landing() {
  return (
    <>
      {/* ================= LANDING SECTION ================= */}
      <section
        className={`${BrushFont.variable} min-h-screen w-full bg-[#F8F6E9] px-6 pt-2 relative overflow-hidden`}
      >
        {/* ========= NAVBAR ========= */}
        <nav className="w-full flex justify-center mt-2 mb-2">
          <div className="bg-white/80 backdrop-blur-md shadow-md px-12 py-3 rounded-xl flex gap-16 text-sm tracking-wide">
            <a href="#home" className="hover:text-gray-500 transition">HOME</a>
            <a href="#products" className="hover:text-gray-500 transition">SERVICE</a>
            <a href="#contact" className="hover:text-gray-500 transition">MY WORK</a>
            <a href="#contact" className="hover:text-gray-500 transition">ABOUT ME</a>
            <a href="#contact" className="hover:text-gray-500 transition">CONTACT ME</a>
          </div>
        </nav>

        {/* ========= CENTER WRAPPER ========= */}
        <div className="flex items-start justify-center -mt-10">
          <div className="relative max-w-5xl w-full text-center">

            {/* FIRST NAME */}
            <h1
              className="
                absolute 
                top-[26%] left-[-9%] 
                -translate-y-1/2
                font-brush 
                text-[180px] md:text-[240px]
                leading-none 
                text-[#F4A9C2]/80 
                select-none pointer-events-none
                z-10
                tracking-[-0.03em]
                -rotate-2
                whitespace-nowrap
              "
            >
              HUYEN MI&apos;S
            </h1>

            {/* LAST NAME */}
            <h1
              className="
                absolute 
                top-[63%] right-[-8%] 
                -translate-y-1/2
                font-brush 
                text-[200px] md:text-[260px]
                leading-none 
                text-[#F4A9C2]/80 
                select-none pointer-events-none
                z-300
                tracking-tight
                rotate-1
              "
            >
              PHAM
            </h1>

            {/* Handwritten text */}
            <p className="absolute top-[18%] left-9 text-[#4C3837]  text-xl font-handwrite z-20">
              Hi. Since you&apos;re new here,
            </p>

            <p className="absolute top-[28%] right-10 text-[#4C3837]  text-xl font-handwrite z-20">
              portfolio
            </p>

            {/* Center Image */}
            <div className="relative z-30 flex justify-center -mt-24">
              <Image
                src="/miya.png"
                width={530}
                height={850}
                alt="you"
                className="object-contain -translate-x-20"
              />
            </div>

            <p className="absolute left-[15%] top-[30%] text-[#4C3837]  text-xl font-handwrite rotate-[-8deg] z-30">
              This is
            </p>

            <p className="mt-0 text-gray-700">Graphic Designer / Video Editor</p>

          </div>
        </div>
      </section>

     
    </>
  );
}
