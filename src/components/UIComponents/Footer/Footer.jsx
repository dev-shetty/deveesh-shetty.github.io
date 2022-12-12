import { FaDev, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { SiTailwindcss, SiReact, SiVite, SiGithub } from "react-icons/si"
import { AiOutlineCopyrightCircle } from "react-icons/ai"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="flex flex-col border-t-2 my-8 px-8" id="contact">
      <div className="flex justify-between my-8 -sm:grid -sm:grid-cols-2 -sm:place-items-center -sm:gap-2">
        <ul className=" -sm:col-span-2">
          <li className="py-4 -sm:py-2 pl-2 font-monospace font-extrabold text-xl tracking-wider">
            <Link path="/">DEV</Link>
          </li>
        </ul>
        <ul className="-sm:col-span-2 -sm:flex -sm:gap-8">
          <li>
            <a href="#aboutMe">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
        <div>
          <p>Built Using</p>
          <ul className="flex justify-between my-2">
            <li>
              <a href="https://reactjs.org/" target="_blank">
                <SiReact className="scale-125" />
              </a>
            </li>
            <li>
              <a href="https://vitejs.dev/" target="_blank">
                <SiVite className="scale-125" />
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com/" target="_blank">
                <SiTailwindcss className="scale-125" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Hosted on</p>
          <ul className="flex justify-center my-2">
            <li>
              <a href="https://github.com/" target="_blank">
                <SiGithub className="scale-125" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-around border-t-2 mx-16 -sm:flex-col -sm:mx-8">
        <div className="flex items-center gap-2 -sm:mt-4">
          <p>
            <AiOutlineCopyrightCircle />
          </p>
          <p>Deveesh - 2022</p>
        </div>
        <ul className="flex gap-4 my-8">
          <li>
            <a href="https://github.com/Deveesh-Shetty" target="_blank">
              <FaGithub className="scale-125 cursor-pointer" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/deveesh-shetty-908539214/"
              target="_blank"
            >
              <FaLinkedinIn className="scale-125 cursor-pointer" />
            </a>
          </li>
          <li>
            <a href="https://dev.to/deveeshshetty1209" target="_blank">
              <FaDev className="scale-125 cursor-pointer" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ShettyDeveesh" target="_blank">
              <FaTwitter className="scale-125 cursor-pointer" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
