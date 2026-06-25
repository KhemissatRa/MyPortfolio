const experiences = [
  
    {
    role: 'Full Stack MERN Developer',
    company: 'Freelance',
    date: '2025 – Present',
    desc:
      'Built full-stack applications with React, Node.js, Express, authentication systems, dashboards, and REST APIs end to end.',
    tags: ['MERN', 'REST API', 'Auth'],
    active: true,
    badge: 'Current',
  },
  {
    role: 'Front-End Developer',
    company: 'Nibra',
    date: '2024 – 2025',
    desc:
      'Developed responsive landing pages and reusable UI components using React.js and Tailwind CSS while focusing on modern UI/UX principles.',
    tags: ['React', 'Tailwind', 'UI/UX'],
    active: true,
    badge: null,
  },

  {
    role: 'Database Engineering Student',
    company: 'Associate Degree,
    date: '2024 – Present',
    desc:
      'Pursuing advanced database engineering studies while improving backend development and database management skills in parallel.',
    tags: ['SQL', 'MongoDB', 'Backend'],
    active: false,
    badge: 'Ongoing',
  },
];

const stack = ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Railway'];

export default function Experience() {
  return (
    <div className="bg-[#080c14] max-w-full min-h-full  px-12 py-14 font-sans">
      {/* Section header */}
      <div className="flex  items-center gap-4 mb-3">
        <div className="flex-1 h-px bg-[#111827]" />
        <span className="text-[11px] text-[#3a4256] tracking-[0.2em] uppercase font-medium">
          Career
        </span>
        <div className="flex-1 h-px bg-[#111827]" />
      </div>

      <h2 className="font-serif text-4xl font-medium text-[#f0ece4] mb-2">
        My <em className="text-[#c9a84c] italic">Experience</em>
      </h2>

      <p className="text-[13px] text-[#2a3040] font-light mb-14">
        A journey through roles, projects & growth
      </p>

      <div className="grid grid-cols:1  md:grid-cols-2 gap-12 items-start">
        {/* Left — stats + stack */}
        <div>
          <p className="text-[11px] text-[#3a4256] tracking-[0.15em] uppercase font-medium mb-5">
            At a glance
          </p>

          {[
            {
              num: '3',
              sup: '+',
              label: 'Years building',
              desc:
                'From landing pages to full-stack MERN applications in production.',
            },
            {
              num: '2',
              sup: '+',
              label: 'Roles held',
              desc:
                'Frontend specialist to full-stack developer, always leveling up.',
            },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[#0d1120] border border-[#1a2030] rounded-xl p-6 mb-3"
            >
              <p className="font-serif text-3xl font-medium text-[#f0ece4] leading-none">
                {s.num}
                <sup className="text-sm text-[#c9a84c] align-super">
                  {s.sup}
                </sup>
              </p>

              <p className="text-[11px] text-[#3a4256] tracking-widest uppercase font-medium mt-1">
                {s.label}
              </p>

              <p className="text-[12px] text-[#2a3040] font-light mt-2 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}

          <p className="text-[11px] text-[#3a4256] tracking-[0.15em] uppercase font-medium mt-6 mb-4">
            Core stack
          </p>

          <div className="grid grid-cols-3 gap-2">
            {stack.map((s) => (
              <div
                key={s}
                className="bg-[#0d1120] border border-[#1a2030] rounded-lg py-2.5 text-center text-[11px] text-[#4a5568] tracking-widest uppercase font-medium"
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Right — timeline */}
        <div className="flex flex-col gap-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid gap-4"
              style={{
                gridTemplateColumns: '20px 1fr',
                paddingBottom:
                  i < experiences.length - 1 ? '32px' : '0',
              }}
            >
              {/* Dot + line */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-2.5 h-2.5 rounded-full border border-[#c9a84c] mt-1 flex-shrink-0 z-10 ${
                    exp.active
                      ? 'bg-[#c9a84c]'
                      : 'bg-[#080c14]'
                  }`}
                />
                {i < experiences.length - 1 && (
                  <div className="w-px bg-[#1a2030] flex-1 mt-1" />
                )}
              </div>

              {/* Card */}
              <div className="bg-[#0d1120] border border-[#1a2030] hover:border-[rgba(201,168,76,0.3)] rounded-xl p-5 transition-all duration-200 group">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-[13px] font-medium text-[#c9a84c] leading-snug">
                    {exp.role}
                  </p>

                  <span className="text-[10px] text-[#2a3040] tracking-widest font-light ml-3 mt-0.5 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>

                <p className="text-[11px] text-[#3a4256] tracking-widest uppercase font-medium mb-3">
                  {exp.company}
                </p>

                <p className="text-[12px] text-[#4a5568] leading-relaxed font-light">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-[#2a3040] border border-[#1a2030] rounded px-2 py-0.5 tracking-widest uppercase font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {exp.badge && (
                  <div className="inline-flex items-center gap-1.5 bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.25)] text-[#c9a84c] text-[10px] px-2 py-1 rounded mt-3 tracking-widest uppercase font-medium">
                    <span className="w-1 h-1 bg-[#c9a84c] rounded-full animate-pulse" />
                    {exp.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
