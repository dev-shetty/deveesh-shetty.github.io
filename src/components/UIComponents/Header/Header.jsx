function Header({ heading, subHeading }) {
  return (
    <header className="font-playfair text-center mb-8">
      <div className="flex justify-center">
        <p className="text-4xl mb-2 font-bold pt-4 text-gradient w-fit py-2">
          {heading}
        </p>
      </div>
      <p className="text-md md:text-xl">{subHeading}</p>
    </header>
  )
}

export default Header
