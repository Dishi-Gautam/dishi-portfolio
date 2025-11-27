import './App.css'
import MacWindow from './components/MacWindow'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import CTA from './components/CTA'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <MacWindow title="Portfolio">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <Skills />
        <CTA />
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </MacWindow>
    </div>
  )
}

export default App
