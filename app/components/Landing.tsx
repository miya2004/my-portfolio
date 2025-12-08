import React from "react";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="min-h-screen w-full bg-[#e9dfd2] px-6 pt-2 relative">

      {/* ========= NAVBAR ========= */}
      <nav className="w-full flex justify-center mt-2 mb-2">
        <div className="bg-white/80 backdrop-blur-md shadow-md px-12 py-3 rounded-xl flex gap-16 text-sm tracking-wide">
          <a href="#home" className="hover:text-gray-500 transition">HOME</a>
          <a href="#products" className="hover:text-gray-500 transition">PRODUCTS</a>
          <a href="#contact" className="hover:text-gray-500 transition">CONTACT ME</a>
        </div>
      </nav>

      {/* ========= CENTER WRAPPER ========= */}
      <div className="flex items-start justify-center -mt-10">
        <div className="relative max-w-5xl w-full text-center">

          {/* Background Name Image */}
          <Image
            src="/name.png"
            alt="Huyen Mi Pham"
            width={2600}
            height={900}
            className="
              absolute 
              top-[35%] left-1/2
              -translate-x-1/2 -translate-y-1/2
              select-none
              pointer-events-none
              z-10
              object-contain
            "
          />

          {/* Handwritten Text Top */}
          <p className="absolute top-[18%] left-9 text-black text-xl font-handwrite z-20">
            Hi. Since you're new here,
            </p>

            <p className="absolute top-[28%] right-20 text-black text-xl font-handwrite z-20">
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

          {/* Handwritten “This is …” */}
          <p className="absolute left-[15%] top-[30%] text-black text-xl font-handwrite rotate-[-8deg] z-30">
            This is
          </p>

          {/* Bottom title */}
          <p className="mt-0 text-gray-700">Graphic Designer / Video Editor</p>
        </div>
      </div>
    </section>
  );
}
