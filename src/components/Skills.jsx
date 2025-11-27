export default function Skills() {
  const skills = ['React', 'Vite', 'GSAP', 'Node.js', 'Python', 'ML Basics']
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="chips">
        {skills.map(s => (
          <span key={s} className="chip">{s}</span>
        ))}
      </div>
    </section>
  )
}
