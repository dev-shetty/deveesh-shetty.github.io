import Header from "../UIComponents/Header/Header"
import Review from "./Template"

function Testimonials() {
  return (
    <div id="testimonials" className="mx-4 flex flex-col md:mt-8 mb-8">
      <Header heading="Testimonials" />
      <div className="mx-auto gap-2 flex flex-col md:flex-row">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  )
}

export default Testimonials
