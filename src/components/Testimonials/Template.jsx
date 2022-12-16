function Review() {
  return (
    <div className="flex flex-col gap-4 bg-gray-200 text-[#131313] px-4 py-8 -md:text-sm rounded-lg">
      <div className="flex items-center gap-4">
        <img
          src="https://source.unsplash.com/random?nature"
          alt="One"
          className="w-[2.5rem] rounded-full aspect-square"
        />
        <h3 className="-md:text-md font-bold">Deveesh Shetty</h3>
      </div>
      <p className="text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat quos
        quam sapiente odit eum,{" "}
        <span className="font-bold text-accent">aspernatur sit ab neque</span>{" "}
        autem cupiditate alias totam enim suscipit esse molestias voluptas
        soluta ipsum porro perspiciatis iusto ex? Reprehenderit ex error minima
        nam ratione, necessitatibus quos.{" "}
        <span className="font-bold text-accent">Quaerat aspernatur ipsum</span>{" "}
        fugit numquam voluptate et consequuntur nobis.
      </p>
    </div>
  )
}

export default Review
