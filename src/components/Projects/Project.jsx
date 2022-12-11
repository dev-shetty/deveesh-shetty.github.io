import Header from "../UIComponents/Header/Header"
import Card from "./Card"

function Project() {
  return (
    <div id="projects" className="min-h-screen">
      <Header
        heading="Projects"
        subHeading="From concept to completion, every project tells a story of dedication and skill."
      />
      <div>
        <Card
          title="React"
          img="React.svg"
          tech={[
            "ReactJs",
            "ExpressJS",
            "MongoDB",
            "TailwindCSS",
            "NodeJS",
            "Redux",
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam alias rerum quibusdam, in unde nemo animi ipsa,
        expedita corrupti quod odit distinctio neque pariatur
        voluptas."
        />
        <Card
          title="React"
          img="React.svg"
          tech={[
            "ReactJs",
            "ExpressJS",
            "MongoDB",
            "TailwindCSS",
            "NodeJS",
            "Redux",
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam alias rerum quibusdam, in unde nemo animi ipsa,
        expedita corrupti quod odit distinctio neque pariatur
        voluptas."
        />
        <Card
          title="React"
          img="React.svg"
          tech={[
            "ReactJs",
            "ExpressJS",
            "MongoDB",
            "TailwindCSS",
            "NodeJS",
            "Redux",
          ]}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam alias rerum quibusdam, in unde nemo animi ipsa,
        expedita corrupti quod odit distinctio neque pariatur
        voluptas."
        />
      </div>
    </div>
  )
}

export default Project
