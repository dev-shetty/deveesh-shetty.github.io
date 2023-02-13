import TypeWriter from "typewriter-effect"

function Home() {
  return (
    <div
      className="flex flex-col-reverse md:flex-row -md:mx-4 md:justify-between h-screen min-h-max -md:mb-6 items-center -sm:mt-4"
      id="aboutMe"
    >
      <div className="basis-1/2">
        <div className="flex flex-col text-center items-center justify-center my-2 -md:mt-8">
          <p className="text-xl md:text-2xl font-playfair">
            Hello, <span className="font-bold text-gradient">I'm</span>
          </p>
          <h1 className="title text-2xl md:text-5xl font-playfair font-bold mb-2 text-gradient py-2">
            Deveesh Shetty
          </h1>
          <div className=" mb-2 md:mb-4 text-xl md:text-2xl">
            <TypeWriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Full Stack Developer Soon...",
                  "Artist",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="md:w-3/4">
            Enthusiastic React Developer making my way to Full Stack
            Development. Eager to learn new concepts and experiment with
            existing ones. Working bit by bit daily to build my skills and
            develop applications based on it.
          </p>
        </div>
      </div>
      <div className="flex justify-center basis-1/2 my-2">
        <img
          src="Misc/Deveesh.jpg"
          alt="Deveesh Shetty"
          className="md:w-5/12 -md:h-64 aspect-square my-auto rounded-full border-primary-000 border-8"
        />
      </div>
    </div>
  )
}

export default Home
