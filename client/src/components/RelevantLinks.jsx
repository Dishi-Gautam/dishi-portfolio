export default function RelevantLinks() {
  return (
    <section id="links" className="links-section">
      <h2>Relevant Links</h2>
      <p className="section-lead">Additional places to explore my work and activity. This space can include tutorials, talks, contributions, interviews, or side experiments.</p>
      <ul className="link-list">
        <li><span className="link-label">GitHub Profile:</span> <a href="https://github.com/Dishi-Gautam" target="_blank" rel="noreferrer">github.com/Dishi-Gautam</a></li>
        <li><span className="link-label">Featured Repo (Air Quality):</span> <a href="#" onClick={e=>e.preventDefault()}>Impact summary coming soon</a></li>
        <li><span className="link-label">Security Tooling (CyberGuard):</span> <a href="#" onClick={e=>e.preventDefault()}>Case study coming soon</a></li>
        <li><span className="link-label">DevSpace Utility:</span> <a href="#" onClick={e=>e.preventDefault()}>Showcasing workflow polish</a></li>
      </ul>
    </section>
  )
}
