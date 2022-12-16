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
    <div className="mb-12" id="gallery">
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
          className="no-scroll flex gap-4 px-5 md:px-8 cursor-grab overflow-x-scroll py-8 overflow-y-hidden md:py-16 -md:gap-0"
          ref={gallery}
        >
          <Art title="Lal Baug Cha Raja" img="Arts/LalBaugChaRaja.jpg" />
          <Art title="Yakshagana" img="Arts/Yakshagana.jpg" />
          <Art title="AdiYogi" img="Arts/AdiYogi.jpg" />
          <Art title="Tiger Roar" img="Arts/TigerRoar.jpg" />
          <Art title="Joker" img="Arts/Joker.jpg" />
          <Art title="Sai Baba" img="Arts/SaiBaba.jpg" />
          <Art title="Infinity Guantlet" img="Arts/InfinityGuantlet.jpg" />
          <Art title="Goku" img="Arts/Goku.jpg" />
          <Art title="Spiderman" img="Arts/Spiderman.jpg" />
          <Art title="Kapil Dev" img="Arts/KapilDev.jpg" />
          <Art title="Thanos" img="Arts/Thanos.jpg" />
        </ScrollContainer>
      </div>
    </div>
  )
}

export default Gallery
