const Timeline = () => {
  return (
    <div className="" id="timeline">
      <h1 className="text-center text-5xl">Timeline</h1>

      <div className="md:flex">
        <div className="mx-8 flex-1">
          <ol className="relative mt-8 border-r-4 border-dotted border-royal-blue">
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                Start
              </h2>
              <p className="mb-4 ml-auto w-fit">May 31st of 2022</p>
              <p className="my-4 ml-auto w-fit">
                Submit a challenge and apply to join the Edtech Hackthon
              </p>
            </li>
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                Deadline for challenge submission
              </h2>
              <p className="mb-4 ml-auto w-fit">August 01st of 2022</p>
              <p className="ml-auto w-fit py-4">
                Submit a challenge and apply to join the Edtech Hackthon
              </p>
            </li>
          </ol>
          <ol className="relative border-r-4 border-royal-blue">
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <h2 className="mb-2 ml-auto w-fit text-xl font-semibold">
                Edtech Hackthon - Day 01
              </h2>
              <p className="mb-4 ml-auto w-fit">XX/August</p>
              <p className="my-4 ml-auto w-fit">
                Learning, meeting & hacking - Pre-hack hands-on workshops on
                technologies Lunch Welcome words DWIH & introduction &
                challenges Thinking and tinkering + Pitches + Group forming
                Pizza dinner
              </p>
            </li>
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                Edtech Hackthon - Day 02
              </h2>
              <p className="mb-4 ml-auto w-fit">XX/August</p>
              <p className="my-4 ml-auto w-fit">
                Learning, meeting & hacking - Pre-hack hands-on workshops on
                technologies Lunch Welcome words DWIH & introduction &
                challenges Thinking and tinkering + Pitches + Group forming
                Pizza dinner
              </p>
            </li>
            <li className="mr-8 pb-10">
              <div className="absolute -right-3.5 h-6 w-6 rounded-full bg-royal-blue"></div>
              <h2 className="my-2 ml-auto w-fit text-xl font-semibold">
                Edtech Hackthon - Day 03
              </h2>
              <p className="mb-4 ml-auto w-fit">XX/August</p>
              <p className="my-4 ml-auto w-fit">
                Learning, meeting & hacking - Pre-hack hands-on workshops on
                technologies Lunch Welcome words DWIH & introduction &
                challenges Thinking and tinkering + Pitches + Group forming
                Pizza dinner
              </p>
            </li>
          </ol>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  )
}

export default Timeline
