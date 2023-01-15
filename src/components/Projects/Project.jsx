import Header from "../UIComponents/Header/Header"
function Project() {
  return (
    <div className="bg-[#DDD] pb-8">
      <div>
        <Header
          heading="Projects"
          subHeading="From concept to completion, every project tells a story of dedication and skill."
        />
      </div>
      <div className="flex items-center justify-center h-full">
        <div className="relative w-[75%] h-[75%]">
          <img
            src="Misc/laptop.png"
            alt="Laptop"
            className="relative w-full h-full z-10"
          />
          <div className="absolute inset-0 w-[75%] h-[85%] top-[5%] left-[12.5%] bg-primary-800">
            <div className="flex flex-col">
              <img
                src="Projects/Clouds.png"
                alt="Clouds"
                className="h-[100%]"
              />
              {/* <div>
                <p className="p-4">
                  CLOUDS is an association of Computer Science Department in
                  Sahyadri College of Engineering and Management. This website
                  shows the details of office bearers representing clouds. The
                  event tab it shows the upcoming events in our college
                </p>
                <div className="flex justify-center">
                  <p className="tags">ReactJs</p>
                  <p className="tags">CSS3</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
