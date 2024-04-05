import React from "react";

function Skill() {
  return (
    <>
      <div
        id="skill"
        className="text-white max-w-[1440px] mx-auto py-10 mt-20 box-border w-full px-3"
      >
        <h1 className="text-4xl text-[#00df9a] text-center sm:text-left">
          Skills
        </h1>
        <div className="grid gap-y-8 md:grid-cols-3 md:gap-10 mt-10 md:gap-y-0">
          <div className="border-4 border-[#00df9a] w-9/12 mx-auto shadow-[0_0_10px_#00df9a] rounded py-6 hover:scale-105 duration-500 delay-100">
            <div className="">
              <h4 className="text-gray-400 font-bold text-center text-2xl pb-10 capitalize">
                Programming Language
              </h4>
              <ul className="t list-none">
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  HTML
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  CSS
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  JAVASCRIPT
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  WORDPRESS
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  NODEJS
                </li>
              </ul>
            </div>
          </div>

          <div className="border-4 border-[#00df9a] w-9/12 mx-auto shadow-[0_0_10px_#00df9a] rounded py-6 hover:scale-105 duration-500 delay-100">
            <div className="">
              <h4 className="text-gray-400 font-bold text-center text-2xl pb-10 capitalize">
                Frameworks
              </h4>
              <ul className="t list-none">
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  REACTJS
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  NEXTJS
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  TYPESCRIPT
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  BOOTSTRAP
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  TAILWINDCSS
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  SCSS
                </li>
              </ul>
            </div>
          </div>

          <div className="border-4 border-[#00df9a] w-9/12 mx-auto shadow-[0_0_10px_#00df9a] rounded py-6 hover:scale-105 duration-500 delay-100">
            <div className="md:px-2">
              <h4 className="text-gray-400 font-bold text-center text-2xl pb-10">
                Version Controls & Tech Tool
              </h4>
              <ul className="t list-none">
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  GIT
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  GITHUB
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  VISUAL STUDIO CODE
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  NPM
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  YARN
                </li>
                <li className="text-slate-300 font-bold text-center text-base py-4">
                  BITBUCKET
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center flex-col">
          <h4 className="text-[#00df9a] text-lg sm:text-3xl pb-3 text-center">
            Miscellaneous
          </h4>
          <ul className="mis pl-6 flex flex-wrap justify-between items-start">
            <div>
              <li className="py-1">
                Strong teamwork, communication skills, Leadership Ability.
              </li>
              <li className="py-1">
                Fast learner, enthusiastic about personal growth and development
              </li>
            </div>
            <div>
              <li className="py-1">Great graphic design skills with Canva</li>
              <li className="py-1">
                Results-driven, consistently delivers and exceeds expectations
              </li>
            </div>
            <div>
              <li className="py-1">
                Proficient in microsoft excel and powerpoint.
              </li>
              <li className="py-1">Fluent in English</li>
            </div>
          </ul>
        </div>
      </div>

      {/* <div>
            <div className="py-2">
              <p>HTML</p>
              <div className="bg-gray-600 md:w-[90%] rounded-md">
                <div className="bg-[#00df9a] rounded-l w-[95%] text-right px-2">
                  95%
                </div>
              </div>
            </div>
            <div className="py-2">
              <p>CSS</p>
              <div className="bg-gray-600 md:w-[90%] rounded-md">
                <div className="bg-[#00df9a] rounded-l w-[95%] text-right px-2">
                  95%
                </div>
              </div>
            </div>
            <div className="py-3">
              <p>JavaScript</p>
              <div className="bg-gray-600 md:w-[90%] rounded-md">
                <div className="bg-[#00df9a] rounded-l w-[65%] text-right px-2">
                  65%
                </div>
              </div>
            </div>
            <div className="py-2">
              <p>React Js</p>
              <div className="bg-gray-600 md:w-[90%] rounded-md">
                <div className="b bg-[#00df9a] rounded-l md w-[75%] text-right px-2">
                  75%
                </div>
              </div>
            </div>
            <h4 className="text-[#00df9a] text-lg">
              Version Controls & Tech Tool
            </h4>
            <p>Git & GitHub, Visual Studio Code, NPM</p>
          </div>

          <div>
            <div className="py-2">
              <p>Bootstrap</p>
              <div className="bg-gray-600 md:w-[90%] rounded-md">
                <div className="bg-[#00df9a] rounded-l w-[95%] text-right px-2">
                  95%
                </div>
              </div>
            </div>
            <div className="py-2">
              <p>TailWind</p>
              <div className="bg-gray-600 md:w-[90%] rounded-md">
                <div className="bg-[#00df9a] rounded-l w-[95%] text-right px-2">
                  95%
                </div>
              </div>
            </div>

            <div className="py-2">
              <p>Node Js</p>
              <div className="bg-gray-600 md:w-[90%] rounded-md">
                <div className="bg-[#00df9a] rounded-l w-[15%] text-right px-2">
                  15%
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-[#00df9a] text-lg ">Miscellaneous</h4>
              <ul className="mis pl-6">
                <li className="py-1">
                  Strong teamwork, communication skills, Leadership Ability,
                  Fluent in English
                </li>
                <li className="py-1">
                  Fast learner, enthusiastic about personal growth and
                  development
                </li>
                <li className="py-1">Great graphic design skills with Canva</li>
                <li className="py-1">
                  Results-driven, consistently delivers and exceeds expectations
                </li>
              </ul>
            </div>
          </div> */}
    </>
  );
}

export default Skill;
