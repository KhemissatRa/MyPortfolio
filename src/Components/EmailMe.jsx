import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendMessage = (e) => {
    e.preventDefault();

    const text = `Hello RK,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`;

    window.open(
      `https://wa.me/213699387830?text=${encodeURIComponent(text)}`,
      "_blank"
    );

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#080c14] px-12 py-32 relative overflow-hidden">

      {/* grid background */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">

        {/* Heading */}
        <div className="mb-24">

          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#c9a84c]" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#c9a84c]">
              Get In Touch
            </span>
          </div>

          <h2 className="font-serif text-5xl text-[#f0ece4] leading-tight">
            Let's Build
            <em className="block italic text-[#c9a84c]">
              Something Great
            </em>
          </h2>

        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-20">

          {/* Left Side */}
          <div>

            <p className="text-[13px] leading-[1.9] text-[#4a5568] mb-12">
              Whether you need a modern web application or a complete MERN
              solution, I'm always open to discussing meaningful projects.
            </p>

            <div className="space-y-8">

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#2a3040] mb-2">
                  WhatsApp
                </p>

                <p className="text-[#8892a4]">
                  +213 699 387 830
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#2a3040] mb-2">
                  Location
                </p>

                <p className="text-[#8892a4]">
                  Souk Ahras, Algeria
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#2a3040] mb-2">
                  Availability
                </p>

                <p className="text-[#c9a84c]">
                  Open to freelance work
                </p>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="bg-[#0d1120] border border-[#1a2030] rounded-3xl p-10">

            <form onSubmit={sendMessage} className="space-y-8">

              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-[#2a3040] mb-4">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-[#1a2030] pb-4 outline-none text-[#f0ece4] placeholder:text-[#3a4256]"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-[#2a3040] mb-4">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-[#1a2030] pb-4 outline-none text-[#f0ece4] placeholder:text-[#3a4256]"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-[#2a3040] mb-4">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-[#1a2030] pb-4 outline-none resize-none text-[#f0ece4] placeholder:text-[#3a4256]"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 border border-[rgba(201,168,76,0.45)] rounded-xl text-[11px] uppercase tracking-[0.2em] text-[#c9a84c] hover:bg-[rgba(201,168,76,0.05)] transition-all"
              >
                <i className="ti ti-brand-whatsapp text-sm"></i>
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
