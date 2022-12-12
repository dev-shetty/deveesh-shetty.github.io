function Art() {
  return (
    <div className="polaroid flex flex-col min-w-[33.33%] md:min-w-[20%] -sm:min-w-[45%] bg-primary-100 odd:rotate-6 even:-rotate-12 shadow-[#DDDDDD] shadow-lg rounded-lg">
      <div className="bg-primary-800 mx-2 mt-2 p-2 rounded-lg">
        <img src="React.svg" alt="React" />
      </div>
      <div className="text-accent py-4 text-center px-2 -sm:px-0.5">
        <p>Lorem ipsum dolor sit.</p>
      </div>
    </div>
  )
}

export default Art
