import { Link } from "react-router-dom"
import { FaDownload } from "react-icons/fa"

function Navbar() {
  return (
    <nav className="md:absolute w-full flex items-center -sm:justify-between bg-primary-800">
      <ul className="w-[5rem] md:w-[6rem] -sm:hidden">
        <li className="py-4 pl-2 font-heading font-extrabold text-xl tracking-wider">
          <Link path="/">DEV</Link>
        </li>
      </ul>
      <ul className="flex gap-3 md:gap-12 mx-auto -sm:mx-0 -sm:gap-6">
        <li className="py-4 md:px-4">
          <a href="#skills">Skills</a>
        </li>
        <li className="py-4 md:px-4">
          <Link path="/projects">Projects</Link>
        </li>
        <li className="py-4 md:px-4">
          <Link path="/contact">Contact</Link>
        </li>
      </ul>
      <ul className="w-[5rem] md:w-[6rem] text-right md:mx-4">
        <li
          className="flex items-center justify-center gap-1
        px-1.5 md:px-1 bg-accent rounded-full py-1"
        >
          <Link>Resume</Link>
          <FaDownload />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
