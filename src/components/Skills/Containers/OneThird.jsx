function OneThird({ skill, children }) {
  return (
    <div className="min-h-[8rem] -sm:min-h-[0] py-1 -md:py-0">
      <div className="border-2 flex flex-col -md:flex-row h-[12rem] -sm:h-[6rem] items-center gap-4 p-2 justify-center">
        <div>{children}</div>
        <div className="text-center text-3xl -md:text-xl">
          <p>{skill}</p>
        </div>
      </div>
    </div>
  )
}

export default OneThird
