export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 sm:px-10 py-3 sm:py-0 h-auto sm:h-16 bg-[#05080f] border-b border-[#1a2030] max-w-full">

      {/* Logo */}
      <h1 className="flex items-center gap-2 font-serif text-xl font-medium text-[#f0ece4] hover:text-[#c9a84c] transition-colors duration-300 cursor-pointer">
        <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
        RK<span className="text-[#c9a84c]">.</span>
      </h1>

      {/* Links */}
      <ul className="flex flex-wrap items-center gap-1 mt-3 sm:mt-0">
        {[
          { name: 'About', id: 'about' },
          { name: 'Experience', id: 'about' },
          { name: 'Projects', id: 'projects' },
          { name: 'Contact', id: 'contact' }
        ].map((link) => (
          <li
            key={link.name}
            className="text-[11px] font-medium text-[#4a5568] tracking-widest uppercase px-3 sm:px-4 py-2 rounded-md border border-transparent
                       hover:text-[#c9a84c] hover:bg-[rgba(201,168,76,0.06)] hover:border-[rgba(201,168,76,0.15)]
                       transition-all duration-200 cursor-pointer"
          >
            <a href={`#${link.id}`}>{link.name}</a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="mailto:khemissatraouf98@gmail.com"
        className="mt-3 sm:mt-0 text-[11px] font-medium text-[#c9a84c] tracking-widest uppercase px-4 sm:px-5 py-2 rounded-md
        text-center md:text-end          
        border border-[rgba(201,168,76,0.4)]
                   hover:bg-[rgba(201,168,76,0.08)] hover:border-[rgba(201,168,76,0.7)]
                   transition-all duration-200"
      >
        Hire me
      </a>

    </nav>
  );
}