import React from "react"
import Header from "../UIComponents/Header/Header"
import Art from "./Art"

function Gallery() {
  return (
    <div className="mb-12">
      <div>
        <Header heading="Art Gallery" />
      </div>
      <div className="no-scroll gallery flex gap-4 px-5 overflow-x-scroll py-8 overflow-y-hidden md:py-16">
        <Art />
        <Art />
        <Art />
        <Art />
        <Art />
        <Art />
        <Art />
      </div>
    </div>
  )
}

export default Gallery
