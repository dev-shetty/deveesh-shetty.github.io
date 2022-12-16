function Art({ title, img }) {
  return (
    <div className="polaroid flex flex-col min-w-[33.33%] md:min-w-[16%] -sm:min-w-[45%] bg-primary-100 odd:rotate-6 even:-rotate-12 shadow-[#DDDDDD] shadow-lg rounded-lg -md:shadow-md border-2 border-gray-500 -md:even:-rotate-6">
      <div className="bg-primary-800 mx-2 mt-2 p-2 rounded-lg">
        <img src={img} alt={title} className="pointer-events-none" />
      </div>
      <div className="text-accent py-6 text-center px-2 text-xl lg:text-2xl -sm:px-0.5 -sm:text-sm">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Art
