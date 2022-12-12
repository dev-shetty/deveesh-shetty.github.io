import { useRef } from "react"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"
import Header from "../UIComponents/Header/Header"
import Card from "./Card"

function Project() {
  const project = useRef(null)
  const scroll = (scrollOffset) => {
    project.current.scrollLeft += scrollOffset
  }
  return (
    <div id="projects">
      <Header
        heading="Projects"
        subHeading="From concept to completion, every project tells a story of dedication and skill."
      />
      <div className="relative">
        <div
          className="absolute top-1/2 -translate-y-1/2 z-10 right-2 rounded-full p-1 bg-accent opacity-80 animate-bounce-horizontal md:p-2 cursor-pointer scroll-smooth"
          onClick={() => {
            if (window.innerWidth <= 768) scroll(window.innerWidth - 100)
            else scroll(window.innerWidth / 3)
          }}
        >
          <FaAngleRight />
        </div>
        <div
          className="absolute top-1/2 -translate-y-1/2 z-10 left-2 rounded-full p-1 bg-accent opacity-80 animate-bounce-horizontal md:p-2 cursor-pointer scroll-smooth"
          onClick={() => {
            if (window.innerWidth <= 768) scroll(-window.innerWidth + 100)
            else scroll(-window.innerWidth / 3)
          }}
        >
          <FaAngleLeft />
        </div>
        <div
          className="grid grid-cols-2 lg:grid-cols-3 lg:flex lg:overflow-x-scroll no-scroll -sm:flex -sm:overflow-x-scroll mb-6"
          ref={project}
        >
          <Card
            title="Expense Tracker"
            img="React.svg"
            tech={["ReactJs", "ExpressJS", "MongoDB", "TailwindCSS", "NodeJS"]}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam alias rerum quibusdam, in unde nemo animi ipsa,
          expedita corrupti quod odit distinctio neque pariatur
          voluptas."
          />
          <Card
            title="Clouds"
            img="React.svg"
            tech={["ReactJs", "CSS3"]}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam alias rerum quibusdam, in unde nemo animi ipsa,
          expedita corrupti quod odit distinctio neque pariatur
          voluptas."
          />
          <Card
            title="Project Phase"
            img="React.svg"
            tech={["ReactJs", "CSS3", "Laravel"]}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam alias rerum quibusdam, in unde nemo animi ipsa,
          expedita corrupti quod odit distinctio neque pariatur
          voluptas."
          />
          <Card
            title="AYLN"
            img="React.svg"
            tech={["ReactJs", "CSS3"]}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam alias rerum quibusdam, in unde nemo animi ipsa,
          expedita corrupti quod odit distinctio neque pariatur
          voluptas."
          />
          <Card
            title="De Jeunesse"
            img="React.svg"
            tech={["ReactJs", "CSS3"]}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam alias rerum quibusdam, in unde nemo animi ipsa,
          expedita corrupti quod odit distinctio neque pariatur
          voluptas."
          />
          <Card
            title="API Forever"
            img="React.svg"
            tech={["ReactJs", "CSS3", "Bunch of APIs"]}
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam alias rerum quibusdam, in unde nemo animi ipsa,
          expedita corrupti quod odit distinctio neque pariatur
          voluptas."
          />
        </div>
      </div>
    </div>
  )
}

export default Project
