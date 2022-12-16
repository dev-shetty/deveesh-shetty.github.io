import { useEffect, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

function Carousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)
  const [touchPosition, setTouchPosition] = useState(null)

  const handleTouchStart = (event) => {
    const touchDown = event.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (event) => {
    const touchDown = touchPosition
    if (!touchDown) return

    const currentTouch = event.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) next()
    if (diff < -5) prev()

    setTouchPosition(null)
  }

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < length - 1) setCurrentIndex((prev) => prev + 1)
  }
  const prev = () => {
    if (currentIndex > 0) setCurrentIndex((prev) => prev - 1)
  }

  return (
    <div className="flex flex-col">
      <div className="flex relative">
        {currentIndex < length - 1 && (
          <div
            className="lg:hidden right-arrow absolute top-1/2 -translate-y-1/2 z-10 -right-4 rounded-full p-1 bg-accent opacity-80 md:p-2 cursor-pointer scroll-smooth"
            onClick={next}
          >
            <FaAngleRight />
          </div>
        )}
        <div
          className="overflow-x-hidden no-scroll h-full w-full  lg:py-16"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className="carousel-content no-scroll flex transition-all lg:w-[30%] lg:gap-4 lg:ml-[4%]"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {children}
          </div>
        </div>
        {currentIndex > 0 && (
          <div
            className="lg:hidden left-arrow absolute top-1/2 -translate-y-1/2 z-10 -left-4 rounded-full p-1 bg-accent opacity-80 md:p-2 cursor-pointer scroll-smooth"
            onClick={prev}
          >
            <FaAngleLeft />
          </div>
        )}
      </div>
    </div>
  )
}

export default Carousel
