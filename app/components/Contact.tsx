export default function Contact() {
    return (
      <section className="px-6 py-20 bg-black text-white">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
  
        <form className="max-w-md space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded text-black"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded text-black"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded text-black"
          ></textarea>
  
          <button className="px-6 py-3 bg-white text-black rounded font-semibold">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  