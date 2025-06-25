const skillsData = [
  { name: 'HTML', icon: '/html.svg', color: '#E34F26' },
  { name: 'CSS', icon: '/css.svg', color: '#1572B6' },
  { name: 'JavaScript', icon: '/javascript.svg', color: '#F7DF1E' },
  { name: 'TypeScript', icon: '/typescript.svg', color: '#3178C6' },
  { name: 'React', icon: '/react.svg', color: '#61DAFB' },
  { name: 'Next.js', icon: '/nextjs.svg', color: '#000000' },
];
export default function Skills() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
        {skillsData.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-28 h-28 md:w-32 md:h-32 transition-all duration-300 hover:scale-110"
              style={{
                filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                padding: '12px',
              }}
            />
            <span
              className="mt-3 text-lg font-semibold"
              style={{ color: skill.color }}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
