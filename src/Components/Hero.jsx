
export default function Hero() {
  return (
    <section className="relative bg-[#080c14] px-12 pt-14 pb-16 overflow-hidden min-h-screen flex flex-col justify-center">

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Top meta bar */}
      <div className="flex justify-between items-center mb-14 relative">
        <div className="flex items-center gap-5">
          <div className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.3)] text-[#c9a84c] text-[10px] font-medium px-3.5 py-1.5 rounded-full uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
            Available for hire
          </div>
          <div className="w-px h-4 bg-[#1a2030]" />
          <span className="text-[10px] text-[#2a3040] tracking-widest uppercase">Based in Algeria</span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: 'ti-brand-github', href: '#' },
            { icon: 'ti-brand-linkedin', href: '#' },
            { icon: 'ti-mail', href: '#' },
          ].map((s) => (
            <a key={s.icon} href={s.href}
              className="w-8 h-8 border border-[#1a2030] rounded-md flex items-center justify-center hover:border-[rgba(201,168,76,0.4)] transition-colors group">
              <i className={`ti ${s.icon} text-[14px] text-[#3a4256] group-hover:text-[#c9a84c] transition-colors`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-[1fr_auto] gap-12 items-center relative">

        {/* Text column */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-px bg-[#c9a84c]" />
            <span className="text-[11px] text-[#c9a84c] tracking-[0.2em] uppercase font-medium">Hello, I'm RK</span>
          </div>

          <h1 className="font-serif text-5xl font-medium text-[#f0ece4] leading-[1.08] tracking-tight mb-3">
            Full Stack
            <em className="text-[#c9a84c] italic block">MERN Developer</em>
          </h1>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-[12px] text-[#3a4256] tracking-widest uppercase">React · Node · Express · Mongo</span>
            <span className="text-[#1a2030]">·</span>
            <span className="text-[12px] text-[#2a3040] tracking-wide">Since 2022</span>
          </div>

          <p className="text-[13px] text-[#4a5568] leading-[1.85] max-w-md font-light mb-9">
            I build{' '}
            <span className="text-[#8892a4]">modern, responsive, and scalable</span>{' '}
            web applications — from polished frontends to robust backend systems.
            Every line of code is written with intention.
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            <a href="https://wa.me/213699387830"  className="inline-flex items-center gap-2 text-[11px] font-medium text-[#c9a84c] border border-[rgba(201,168,76,0.45)] px-7 py-3 rounded-lg uppercase tracking-widest hover:bg-[rgba(201,168,76,0.07)] hover:border-[rgba(201,168,76,0.75)] transition-all">
              <i className="ti ti-folder text-[14px]" aria-hidden="true" />
            Contact me
            </a>
            <div className="w-px h-5 bg-[#111827]" />
            <a href='https://github.com/KhemissatRa'd className="text-[11px] font-light text-[#3a4256] border border-[#1a2030] px-7 py-3 rounded-lg uppercase tracking-widest hover:text-[#8892a4] hover:border-[#2a3550] transition-all">
            View projects  
            </a>
            <div className="w-px h-5 bg-[#111827]" />
            <div className="flex items-center gap-2 text-[10px] text-[#2a3040] tracking-widest uppercase">
              <div className="w-1 h-1 bg-[#2a3040] rounded-full" />
              Scroll to explore
            </div>
          </div>
        </div>

        {/* Photo + stats column */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-44 h-56 border border-[#1a2030] rounded-2xl bg-[#0d1120] flex items-center justify-center overflow-hidden">
            {/* Replace with your actual photo: */}
            <img src="/Me.png" alt="RK" className="w-44 h-56" />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a84c] opacity-40" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[rgba(201,168,76,0.35)] rounded-tr-md" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[rgba(201,168,76,0.35)] rounded-bl-md" />
          </div>

          <div className="flex flex-col gap-2 w-full">
            {[
              { num: '14', sup: '+', label: 'Projects' },
              { num: '3', sup: 'yr', label: 'Experience' },
            ].map((s) => (
              <div key={s.label} className="bg-[#0d1120] border border-[#1a2030] rounded-lg px-3.5 py-2.5 flex justify-between items-center">
                <span className="font-serif text-base font-medium text-[#f0ece4]">
                  {s.num}<span className="text-[#c9a84c] text-[11px]">{s.sup}</span>
                </span>
                <span className="text-[10px] text-[#2a3040] tracking-widest uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom info strip */}
      <div className="flex items-stretch mt-12 pt-6 border-t border-[#111827] relative">
        {[
          { label: 'Specialty', val: ['Full stack ', 'MERN'] },
          { label: 'Deployment', val: ['', 'Vercel', ' · Railway'] },
          { label: 'Focus', val: ['UI/UX · ', 'Performance'] },
          { label: 'Status', val: ['', 'Open', ' to freelance'] },
        ].map((item, i) => (
          <div key={item.label} className={`flex-1 px-5 ${i > 0 ? 'border-l border-[#111827]' : 'pl-0'}`}>
            <p className="text-[10px] text-[#2a3040] tracking-widest uppercase mb-1">{item.label}</p>
            <p className="text-[12px] text-[#4a5568] font-light">
              {item.val[0]}
              {item.val[1] && <span className="text-[#c9a84c]">{item.val[1]}</span>}
              {item.val[2] || ''}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}