import React from "react";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="px-6 py-20 bg-gray-100">
      <h2 className="text-3xl font-bold mb-10">Services</h2>

      <ul className="space-y-4">
        {services.map((s, i) => (
          <li key={i} className="text-lg">
            • {s}
          </li>
        ))}
      </ul>
    </section>
  );
}
