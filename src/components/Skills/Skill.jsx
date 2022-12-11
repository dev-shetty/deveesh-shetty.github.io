import Header from "../UIComponents/Header/Header"
import OneThird from "./Containers/OneThird"
import TwoThird from "./Containers/TwoThird"

function Skill() {
  return (
    <div className="h-screen min-h-max" id="skills">
      <Header
        heading="My Skills"
        subHeading="Transforming ideas into reality with my skills and expertise."
      />
      <div className="grid grid-cols-3 -sm:grid-cols-2 gap-2 my-6 md:mx-16 items-center group">
        <TwoThird skill="ReactJs">
          <img
            src="React.svg"
            alt="React"
            className="p-3 animate-spin-slow motion-safe:animate-spin-slow -md:h-2/4 md:max-h-[10rem] -sm:h-48 mx-auto"
          />
        </TwoThird>
        <OneThird skill="CSS3">
          <img src="CSS3.svg" alt="CSS" className="h-24" />
        </OneThird>
        <OneThird skill="HTML">
          <img src="HTML.svg" alt="HTML" className="h-24" />
        </OneThird>
        <TwoThird skill="JavaScript" reverse>
          <img
            src="JavaScript.svg"
            alt="JavaScript"
            className="md:max-h-[10rem] mx-auto -sm:h-48"
          />
        </TwoThird>
        <OneThird skill="C++">
          <img src="C++.svg" alt="C++" className="h-24" />
        </OneThird>
        <OneThird skill="MongoDB">
          <img src="MongoDB.svg" alt="MongoDB" className="h-24" />
        </OneThird>
        <div className="-sm:col-span-2">
          <OneThird skill="Python">
            <img src="Python.svg" alt="Python" className="h-24" />
          </OneThird>
        </div>
      </div>
    </div>
  )
}

export default Skill
