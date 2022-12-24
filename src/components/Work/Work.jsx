import Header from "../UIComponents/Header/Header"

function Work() {
  return (
    <div id="work" className="mb-16">
      <Header heading="What am I Doing Now" />
      <div className="flex gap-2 -md:flex-col">
        <div className="border-2 flex flex-col justify-between p-4 basis-1/3 gap-2">
          <p className="text-2xl -md:text-xl text-accent text-center">
            Student
          </p>
          <p className="my-auto">
            2nd year Computer Science and Engineering Student at Sahyadri
            College of Engineering and Management.
          </p>
        </div>
        <div className="border-2 flex flex-col justify-between p-4 basis-1/3 gap-2">
          <p className="text-2xl -md:text-xl text-accent text-center">
            Developer Intern
          </p>
          <p className="my-auto">
            Developer Intern at Startuprenuer, which is a company based in
            London, UK. I am working remote as a developer intern mainly as
            React Developer.
          </p>
        </div>
        <div className="border-2 flex flex-col justify-between p-4 basis-1/3 gap-2">
          <p className="text-2xl -md:text-xl text-accent text-center">
            Learning Full Stack Development
          </p>
          <p className="my-auto">
            Making my way daily bit by bit to learn MERN stack and build cool
            projects using it.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Work
