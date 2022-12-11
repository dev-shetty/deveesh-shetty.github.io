function TwoThird({ skill, children, reverse }) {
  return (
    <div
      className={`border-2 flex ${
        reverse ? "flex-row-reverse" : ""
      } h-[12rem] col-span-2 items-center`}
    >
      <div className="w-2/4">{children}</div>
      <div className="text-center w-2/4 text-3xl">
        <p>{skill}</p>
      </div>
    </div>
  )
}

export default TwoThird
