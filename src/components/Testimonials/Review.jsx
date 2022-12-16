function Review({ name, img, content }) {
  return (
    <div className="flex w-full flex-shrink-0 flex-grow flex-col gap-4 bg-gray-200 text-[#131313] px-4 md:px-8 py-8 rounded-lg select-none">
      <div className="flex items-center gap-4">
        <img
          src={img}
          alt={name}
          className="w-[2.5rem] rounded-full aspect-square"
        />
        <h3 className="font-bold">{name}</h3>
      </div>
      <p className="text-justify">{content}</p>
    </div>
  )
}

export default Review
