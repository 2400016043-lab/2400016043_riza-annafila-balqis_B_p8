import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-pink-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">My Portfolio</h1>
        <nav className="space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
          <Link to="/projects" className="hover:text-yellow-200 transition">Projects</Link>
          <Link to="/contact" className="hover:text-yellow-200 transition">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
