"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FilmStrip() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    gsap.to(trackRef.current, {
      x: "-50%",
      duration: 22,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  const photos = [
    "/film1.png",
    "/film2.png",
    "/film3.png",
    "/film4.png",
    "/film5.png",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-transparent py-6 h-[110px]">
      {/* Film strip frame (smaller, but full width) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <Image
          src="/stripe.png"
          alt="Film Frame"
          width={2600}
          height={110}
          className="w-full object-cover opacity-95"
        />
      </div>

      {/* Moving track */}
      <div
        ref={trackRef}
        className="flex items-center gap-3 w-[300%] z-10 relative pl-10"
        style={{ willChange: "transform" }}
      >
        {/* Duplicate images for infinite loop */}
        {[...photos, ...photos, ...photos].map((src, i) => (
          <div
            key={i}
            className="w-20 h-[95px] overflow-hidden rounded-sm bg-white shadow-md"
          >
            <Image
              src={src}
              alt="film photo"
              width={80}
              height={95}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
