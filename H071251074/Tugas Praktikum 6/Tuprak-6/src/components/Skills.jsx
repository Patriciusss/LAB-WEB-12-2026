function Skills() {
  const keahlian = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
    "UI/UX Dasar",
  ];

  return (
    <section id="skills" className="bg-slate-900/50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold">Skill</h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {keahlian.map((skill, index) => (
            <span
              key={index}
              className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;