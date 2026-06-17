import React from "react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "E-Commerce Platform",
      category: "Full Stack",
      stack: "React · Node · MongoDB",
      year: "2025",
      image:'/octoweb.png',
      desc: "Premium online store with authentication, admin dashboard, order management and door delivery system",
    link:"https://octo-web-eight.vercel.app/",
    },
    {
      id: "02",
      title: "Restaurant Management (under development)",
      category: "MERN",
      stack: "React · Express · MongoDB",
      year: "2024",
      image:'/foodorder.png',
      
      desc: "Reservation system and customer dashboard designed for modern hospitality businesses.",
    },
       {
      id: "01",
      title: "E-Commerce Platform",
      category: "Full Stack",
      stack: "React · Node · MongoDB",
      year: "2025",
      image:'/ecoweb.png',
      desc: "Premium online store with authentication, admin dashboard, order management and door delivery system",
      link:"https://ecomweb-olive.vercel.app/"
    },
    {
      id: "04",
      title: "Portfolio ",
      category: "Frontend",
      stack: "React · Tailwind",
      image:"/portfl.png",
      year: "2024",
      desc: "Elegant portfolio focus performance and simplicity.",
    },
  ];

  return (
    <section className="bg-[#080c14] px-12 py-32 relative overflow-hidden">

      {/* section heading */}
      <div className="max-w-7xl mx-auto mb-24">

        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-px bg-[#c9a84c]" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#c9a84c]">
            Selected Work
          </span>
        </div>

        <div className="flex justify-between items-end">

          <div>
            <h2 className="font-serif text-5xl text-[#f0ece4] leading-tight">
              Featured
              <em className="block text-[#c9a84c] italic">
                Projects
              </em>
            </h2>

            <p className="mt-6 text-[13px] leading-[1.9] text-[#4a5568] max-w-md">
              A curated collection of digital products crafted with precision,
              performance, and attention to detail.
            </p>
          </div>

          <div className="hidden md:block text-right">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#2a3040]">
              Since 2022
            </p>
            <div className="mt-2 text-4xl font-serif text-[#f0ece4]">
              14<span className="text-[#c9a84c]">+</span>
            </div>
          </div>

        </div>
      </div>

      {/* projects */}
      <div className="max-w-7xl mx-auto">

{projects.map((project, index) => (
  <div
    key={project.id}
    className={`grid lg:grid-cols-[110px_420px_1fr] gap-12 py-16 border-t border-[#111827]
    ${index === projects.length - 1 && "border-b"}`}
  >

    {/* Number */}
    <div>
      <span className="font-serif text-4xl text-[#1a2030]">
        {project.id}
      </span>
    </div>

    {/* Project Image */}
    <div className="group">

      <div className="relative overflow-hidden rounded-2xl border border-[#1a2030] bg-[#0d1120]">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-[1.03]"
        />

        {/* Gold line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c9a84c] opacity-40" />

        {/* Corner details */}
        <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-[rgba(201,168,76,0.4)] rounded-tr-md" />

        <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-[rgba(201,168,76,0.4)] rounded-bl-md" />

      </div>

    </div>

    {/* Content */}
    <div className="flex flex-col justify-center">

      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#c9a84c]">
          {project.category}
        </span>

        <div className="w-8 h-px bg-[#1a2030]" />

        <span className="text-[10px] uppercase tracking-[0.2em] text-[#2a3040]">
          {project.year}
        </span>
      </div>

      <h3 className="font-serif text-3xl text-[#f0ece4] mb-5">
        {project.title}
      </h3>

      <p className="text-[13px] leading-[1.9] text-[#4a5568] max-w-lg mb-8">
        {project.desc}
      </p>

      <a
        href={project.link}
        className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-[#8892a4] group"
      >
        View Project

        <div className="w-10 h-10 rounded-full border border-[#1a2030] flex items-center justify-center group-hover:border-[#c9a84c] transition-all">
          <i className="ti ti-arrow-up-right text-[#c9a84c]" />
        </div>
      </a>

    </div>

  </div>
))}


            {/* action */}
    

      </div>

    </section>
  );
}
