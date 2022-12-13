import { useRef } from "react"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa"
import ScrollContainer from "react-indiana-drag-scroll"
import Header from "../UIComponents/Header/Header"
import Art from "./Art"

function Gallery() {
  const gallery = useRef(null)
  const scroll = (scrollOffset) => {
    gallery.current.scrollLeft += scrollOffset
  }
  return (
    <div className="mb-12">
      <div>
        <Header
          heading="Art Gallery"
          subHeading="I may be a developer, but I also have a creative side as an artist."
        />
      </div>
      <div className="relative select-none">
        <div
          className="absolute top-1/2 -translate-y-1/2 z-10 right-2 rounded-full p-1 bg-accent opacity-80 animate-bounce-horizontal md:p-2 cursor-pointer scroll-smooth"
          onClick={() => {
            if (window.innerWidth <= 768) scroll(200)
            else scroll(500)
          }}
        >
          <FaAngleRight />
        </div>
        {/* <div
          className="absolute top-1/2 -translate-y-1/2 z-10 left-2 rounded-full p-1 bg-accent opacity-80 animate-bounce-horizontal md:p-2 cursor-pointer scroll-smooth"
          onClick={() => {
            if (window.innerWidth <= 768) scroll(-200)
            else scroll(-500)
          }}
        >
          <FaAngleLeft />
        </div> */}
        <ScrollContainer
          className="no-scroll flex gap-4 px-5 md:px-8 cursor-grab overflow-x-scroll py-8 overflow-y-hidden md:py-16"
          ref={gallery}
        >
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
        </ScrollContainer>
      </div>
    </div>
  )
}

export default Gallery
