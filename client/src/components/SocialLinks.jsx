export default function SocialLinks() {
  return (
    <section id="social" className="social-section">
      <h2>Social Networks</h2>
      <p className="section-lead">Quick access to public profiles. More channels can be added over time.</p>
      <div className="social-grid">
        <a className="social-pill" href="https://github.com/Dishi-Gautam" target="_blank" rel="noreferrer">GitHub</a>
        <a className="social-pill" href="#" onClick={e=>e.preventDefault()}>LinkedIn (soon)</a>
        <a className="social-pill" href="#" onClick={e=>e.preventDefault()}>Twitter (soon)</a>
        <a className="social-pill" href="#" onClick={e=>e.preventDefault()}>YouTube (future)</a>
      </div>
    </section>
  )
}
