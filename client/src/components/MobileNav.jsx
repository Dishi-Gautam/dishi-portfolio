export default function MobileNav() {
  return (
    <nav className="mobile-nav" aria-label="Mobile Navigation">
      <a href="#home" className="mobile-item" aria-label="Home">
        <span className="mi-icon" aria-hidden="true">🏠</span>
        <span className="mi-label">Home</span>
      </a>
      <a href="#about" className="mobile-item" aria-label="About">
        <span className="mi-icon" aria-hidden="true">👤</span>
        <span className="mi-label">About</span>
      </a>
      <a href="#projects" className="mobile-item" aria-label="Projects">
        <span className="mi-icon" aria-hidden="true">🗂️</span>
        <span className="mi-label">Projects</span>
      </a>
      <a href="#contact" className="mobile-item" aria-label="Contact">
        <span className="mi-icon" aria-hidden="true">✉️</span>
        <span className="mi-label">Contact</span>
      </a>
    </nav>
  )
}
