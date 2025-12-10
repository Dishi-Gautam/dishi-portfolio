import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const esc = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [onClose])
  if (!project) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>{project.title}</h3>
        <p>Case study coming soon. This modal will outline problem, approach, and outcome with metrics.</p>
        <button className="btn" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
