export default function Projects() {
  const items = [
    {
      title: 'Air Quality Prediction',
      desc: 'ML-powered air quality prediction and analysis. Python project.',
      cta: 'View Repo',
      href: '#',
    },
    {
      title: 'CyberGuard',
      desc: 'Security-focused tooling and dashboards. Details coming soon.',
      cta: 'Details',
      href: '#',
    },
    {
      title: 'DevSpace',
      desc: 'Developer portfolio/workspace and utilities. Details coming soon.',
      cta: 'Details',
      href: '#',
    },
  ]

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="cards">
        {items.map((p) => (
          <article key={p.title} className="card">
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
            <div className="card-actions">
              <a className="btn" href={p.href} onClick={(e)=> e.preventDefault()}>{p.cta}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
