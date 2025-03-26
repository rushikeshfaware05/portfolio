import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/AboutMe';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const [showScrollTop, setShowScrollTop] = useState(false)
  const appRef = useRef(null)

  // Handle section changes and scrolling
  const handleSectionChange = (section) => {
    setActiveSection(section)
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Custom cursor effect
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = (e) => {
      if (e.target.closest('a, button, .clickable, input, textarea')) {
        setCursorVariant('hover')
      } else {
        setCursorVariant('default')
      }
    }
// Fix section detection logic in handleScroll
const handleScroll = () => {
  setShowScrollTop(window.scrollY > 300);
  
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const scrollPosition = window.scrollY + window.innerHeight / 2;

  sections.forEach(section => {
    const element = document.getElementById(section);
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
        setActiveSection(section);
      }
    }
  });
}

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleMouseEnter)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleMouseEnter)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      x: cursorPosition.x - 6,
      y: cursorPosition.y - 6,
      backgroundColor: '#3b82f6',
      mixBlendMode: 'difference',
      transition: { type: 'spring', damping: 20, stiffness: 300 }
    },
    hover: {
      width: 40,
      height: 40,
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      mixBlendMode: 'normal',
      transition: { type: 'spring', damping: 15, stiffness: 200 }
    },
    hidden: {
      opacity: 0,
      transition: { duration: 0.2 }
    }
  }

  return (
    <div className="app-container" ref={appRef}>
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        variants={cursorVariants}
        animate={cursorVariant}
        initial="default"
      />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />

      {/* Main Content */}
      <main className="main-content">
        <Home id="home" />
        <Projects id="projects" />
        <Skills id="skills" />
        <About id="about" />
        <Contact id="contact" />
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-button"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="terminal-footer">
        <div className="footer-content">
          <div className="footer-command">
            <span className="prompt">$</span>
            <span className="command">connect_with_me --social --networking</span>
            <span className="cursor">|</span>
          </div>

          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub className="social-icon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FiTwitter className="social-icon" />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email">
              <FiMail className="social-icon" />
            </a>
          </div>

          <div className="copyright">
            © {new Date().getFullYear()} — Maintained By <span className="tech">Darker</span> ^ <span className="tech"> Techno_-*-_ </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;