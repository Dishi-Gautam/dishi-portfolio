export default function MacWindow({ title = 'Window', children }) {
  return (
    <div className="mac-page">
      <div className="mac-window">
        <div className="window-bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="title">{title}</span>
          <nav className="bar-links">
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </div>
  )
}
