import Carousel from "../UIComponents/Carousel/Carousel"
import Header from "../UIComponents/Header/Header"
import Review from "./Review"

function Testimonials() {
  return (
    <div id="testimonials" className="mx-4 flex flex-col md:mt-8 mb-8 md:mb-16">
      <Header heading="Testimonials" />
      <Carousel>
        <Review
          name="Deveesh Shetty"
          img="https://source.unsplash.com/random?nature"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illopraesentium odit voluptas animi a vel. Ex blanditiis cumque assumenda
          soluta reiciendis temporibus odio eaque deleniti autem unde dolore id
          quibusdam nostrum aspernatur rerum, similique possimus hic distinctio
          delectus expedita. Esse ratione tempore quam voluptatem nobis. Sit
          accusamus corporis repellendus ex."
        />
        <Review
          name="Gowrish Shetty"
          img="https://source.unsplash.com/random?nature"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illopraesentium odit voluptas animi a vel. Ex blanditiis cumque assumenda
          soluta reiciendis temporibus odio eaque deleniti autem unde dolore id
          quibusdam nostrum aspernatur rerum, similique possimus hic distinctio
          delectus expedita. Esse ratione tempore quam voluptatem nobis. Sit
          accusamus corporis repellendus ex."
        />
        <Review
          name=" Shetty"
          img="https://source.unsplash.com/random?nature"
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illopraesentium odit voluptas animi a vel. Ex blanditiis cumque assumenda
          soluta reiciendis temporibus odio eaque deleniti autem unde dolore id
          quibusdam nostrum aspernatur rerum, similique possimus hic distinctio
          delectus expedita. Esse ratione tempore quam voluptatem nobis. Sit
          accusamus corporis repellendus ex."
        />
      </Carousel>
    </div>
  )
}

export default Testimonials
