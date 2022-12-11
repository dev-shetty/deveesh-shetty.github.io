function Header({ heading, subHeading }) {
  return (
    <header className="font-playfair text-center">
      <p className="text-3xl mb-2 font-bold text-accent pt-4">{heading}</p>
      <p className="text-md md:text-xl">{subHeading}</p>
    </header>
  )
}

export default Header
