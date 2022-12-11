import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="md:absolute w-full flex items-center">
      <ul className="w-[5rem]">
        <li className="py-4 pl-2">Dev</li>
      </ul>
      <ul className="flex gap-3 md:gap-12 mx-auto">
        <li className="py-4 md:px-4">
          <Link path="/">Home</Link>
        </li>
        <li className="py-4 md:px-4">
          <Link path="/gallery">Projects</Link>
        </li>
        <li className="py-4 md:px-4">
          <Link path="/resume">Resume</Link>
        </li>
      </ul>
      <ul className="w-[5rem] text-right md:mx-4">
        <li className="py-4 pr-2">Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
