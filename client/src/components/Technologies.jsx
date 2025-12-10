export default function Technologies() {
  return (
    <section id="technologies" className="tech-section">
      <h2>Technologies</h2>
      <p className="section-lead">Languages, frameworks, tools and platforms I actively use or have meaningful experience with.</p>
      <div className="tech-grid">
        {[
          'JavaScript','TypeScript','React','Vite','GSAP','Node.js','Express','Python','C++','PHP','HTML5','CSS3','Git','GitHub','REST APIs','JSON','Data Analysis','Machine Learning Basics','Pandas','NumPy','UI/UX','Accessibility','Performance'
        ].map(t => <span key={t} className="tech-badge">{t}</span>)}
      </div>
    </section>
  )
}
