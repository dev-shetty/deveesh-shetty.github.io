import Gallery from "../components/Art/Gallery"
import Home from "../components/Home/Home"
import Project from "../components/Projects/Project"
import Skill from "../components/Skills/Skill"
import Testimonials from "../components/Testimonials/Testimonials"
import Footer from "../components/UIComponents/Footer/Footer"
import Work from "../components/Work/Work"

function HomePage() {
  return (
    <div>
      <Home />
      <Skill />
      <Project />
      <Work />
      <Gallery />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}

export default HomePage
