function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row -md:mx-4 md:justify-between md:h-screen items-center">
      <div className="basis-1/2">
        <div className="flex flex-col text-center items-center justify-center my-2 -md:mt-12">
          <p className="text-xl md:text-2xl">
            Hello, <span className="text-accent">I'm</span>
          </p>
          <h1 className="text-2xl md:text-4xl mb-2 md:mb-4 text-accent">
            Deveesh Shetty
          </h1>
          <p className="md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius illum
            quos animi omnis, veritatis aut ducimus veniam eveniet vel illo
            recusandae officiis quo commodi neque.
          </p>
        </div>
      </div>
      <div className="flex justify-center basis-1/2 my-2 md:my-16">
        <img
          src="https://source.unsplash.com/random?nature"
          alt="Deveesh Shetty"
          className="md:w-3/4 aspect-square"
        />
      </div>
    </div>
  )
}

export default Home
