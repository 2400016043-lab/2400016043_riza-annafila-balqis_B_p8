import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Projects from './pages/projects'
import Contact from './pages/contact'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
