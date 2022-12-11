function OneThird({ skill, children }) {
  return (
    <div className="min-h-[8rem] py-1">
      <div className="border-2 flex flex-col h-[12rem] items-center gap-4 p-2 justify-center">
        <div>{children}</div>
        <div className="text-center text-3xl">
          <p>{skill}</p>
        </div>
      </div>
    </div>
  )
}

export default OneThird
