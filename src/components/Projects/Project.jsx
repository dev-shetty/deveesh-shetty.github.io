import { useRef } from "react"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"
import ScrollContainer from "react-indiana-drag-scroll"
import Header from "../UIComponents/Header/Header"
import Card from "./Card"

function Project() {
  const project = useRef(null)
  const scroll = (scrollOffset) => {
    console.log(project.current.scrollLeft)
    if (!project.current.scrollLeft) project.current.scrollLeft = 0
    project.current.scrollLeft += scrollOffset
    console.log(scrollOffset)
  }
  return (
    <div id="projects">
      <Header
        heading="Projects"
        subHeading="From concept to completion, every project tells a story of dedication and skill."
      />
      <div className="relative select-none">
        <div
          className="md:hidden lg:block absolute top-1/2 -translate-y-1/2 z-10 right-2 rounded-full p-1 bg-accent opacity-80 animate-bounce-horizontal md:p-2 cursor-pointer scroll-smooth"
          onClick={() => {
            if (window.innerWidth <= 768) scroll(window.innerWidth - 100)
            else scroll(window.innerWidth / 3)
          }}
        >
          <FaAngleRight />
        </div>
        {/* <div
          className="absolute top-1/2 -translate-y-1/2 z-10 left-2 rounded-full p-1 bg-accent opacity-80 animate-bounce-horizontal md:p-2 cursor-pointer scroll-smooth"
          onClick={() => {
            if (window.innerWidth <= 768) scroll(-window.innerWidth + 100)
            else scroll(-window.innerWidth / 3)
          }}
        >
          <FaAngleLeft />
        </div> */}
        <ScrollContainer
          component="div"
          className="grid grid-cols-2 lg:grid-cols-3 cursor-grab lg:flex lg:overflow-x-scroll no-scroll -sm:flex -sm:overflow-x-scroll mb-6"
          ref={project}
        >
          <Card
            title="Expense Tracker"
            img="Projects/ExpenseTracker.png"
            tech={["MongoDB", "ExpressJS", "ReactJs", "NodeJS", "TailwindCSS"]}
            description="In this Expense tracker user can add his expenses and view all the expenses till date. Also on top of that there is a stocks section where user can keep track of how much they are holding in stocks."
            link="https://github.com/Deveesh-Shetty/Expense-Tracker"
          />
          <Card
            title="Clouds"
            img="Projects/Clouds.png"
            tech={["ReactJs", "CSS3"]}
            description="CLOUDS is an association of Computer Science Department in Sahyadri College of Engineering and Management. This website shows the details of office bearers representing clouds. The event tab it shows the upcoming events in our college"
            link="https://github.com/Deveesh-Shetty/Clouds"
          />
          <Card
            title="Project Phase"
            img="Projects/ProjectPhase.png"
            tech={["ReactJs", "CSS3", "Laravel"]}
            description="Project Phase is a portal which me and my friend Tejas made for college. It is to register the team of students for final year project and give marks to them. I did the frontend part and Tejas did the backend for it using PHP-Laravel"
          />
          <Card
            title="AYLN"
            img="Projects/AYLN.png"
            tech={["ReactJs", "CSS3"]}
            description="AYLN is an e-commerce for which I built the frontend using ReactJs. It was my first internship project at Startupreneur. It has Login, Homepage, Productpage and Orderpage."
          />
          <Card
            title="De Jeunesse"
            img="Projects/DeJenuesse.png"
            tech={["ReactJs", "CSS3"]}
            description="De Jeunesse is another e-commerce website which i built for Startupreneur as my internship project. I built the frontend for this and it has Homepage, Productpage and a Blog Page."
          />
          <Card
            title="API Forever"
            img="Projects/ApiForever.png"
            tech={["ReactJs", "CSS3", "Bunch of APIs"]}
            description="API Forever formerly known as API Fantasy was one of my first React Project. Here I used a bunch of public APIs as the name suggests. It uses Joke, Quotes, ISRO, Dictionary and Pincode API."
            link="https://github.com/Deveesh-Shetty/API-Forever"
          />
        </ScrollContainer>
      </div>
    </div>
  )
}

export default Project
