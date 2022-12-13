import React from "react"

function Card({ title, img, tech, description }) {
  return (
    <div className="flex flex-col gap-2 border-2 mx-6 lg:px-2 md:items-center py-2 my-4 -sm:min-w-[75%] cursor-pointer">
      <div className="mb-4">
        <div>
          <img
            src={img}
            alt={title}
            className="aspect-video p-4 min-w-[24rem] -md:min-w-[75%] mx-auto pointer-events-none"
          />
        </div>
        <p className="text-center text-2xl font-semibold font-playfair">
          {title}
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="flex flex-col gap-2 m-2 items-center">
            {/* <p className="text-xl font-semibold">Tech Stack</p> */}
            <div className="flex gap-2 flex-wrap justify-center -sm:text-xs">
              {tech &&
                tech.map((item, index) => (
                  <p className="tags" key={index}>
                    {item}
                  </p>
                ))}
            </div>
          </div>
        </div>
        <div className="flex m-2">
          <div className="flex flex-col items-center">
            {/* <p className="text-xl font-semibold">Description</p> */}
            <div className="mx-4 text-justify -sm:text-sm">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
