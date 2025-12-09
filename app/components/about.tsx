export default function About() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden rounded-xl">
      <video
        src="/about.MP4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

    </section>
  );
}
