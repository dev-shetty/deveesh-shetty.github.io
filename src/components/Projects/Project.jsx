import Header from "../UIComponents/Header/Header"
import Card from "./Card"

function Project() {
  return (
    <div id="projects" className="">
      <Header
        heading="Projects"
        subHeading="From concept to completion, every project tells a story of dedication and skill."
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:flex lg:overflow-scroll no-scroll -sm:flex -sm:overflow-scroll">
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
  )
}

export default Project
