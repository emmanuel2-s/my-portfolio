import React from "react";
// import profil from "../assets/img/photo.jpg";
import profil from "../assets/img/snapchat.jpg";
import { AiFillProfile, AiOutlineDownload } from "react-icons/ai";

import {
  FaCalendar,
  FaCertificate,
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaPhone,
  FaSuitcase,
} from "react-icons/fa";

function About() {
  return (
    <>
      <div className="w-full py-8">
        <div className="max-w-[1440px] mx-auto" id="about">
          <h1 className="text-[#00df9a] text-center md:text-left text-4xl md:text-4xl font-extrabold px-3">
            About Me
          </h1>
          {/* <div className="border-b-4 border-black w-20"></div> */}
          <div className="grid md:flex md:justify-between py-10 shadow-sm mt-1">
            <div className=" md:px-6 py-4 px-3 w-full lg:w-3/5">
              <div className="flex justify-center items-center md:justify-start py-3">
                <AiFillProfile className="f text-[#00df9a]" size={30} />
                <h3 className="text-2xl md:text-2xl font-bold px-2 text-slate-400">
                  Key summary
                </h3>
              </div>
              <p className="f font-sans font-medium text-center text-slate-300 md:text-left flex flex-wrap leading-6 w-full">
                Detail-oriented and creative Front-End Developer with three
                years of hands-on experience in crafting visually appealing and
                responsive web applications. Proficient in HTML, CSS3,
                JavaScript, ReactJS, Tailwind, Typescript, Bootstrap and
                Node.js. Adept at translating design concepts into efficient,
                user-friendly interfaces.
              </p>
              <p className="font-sans text-center md:text-left font-medium text-slate-300 w-full pb-5">
                I'm a Nigerian based web designer & front‑end web developer
                focused on crafting clean & user‑friendly experiences, I am
                passionate about building excellent software that will bring a
                solution to a problem .
              </p>
              <div className="">
                <h3 className="font-bold border-b text-xl flex items-center py-2 text-slate-400">
                  <span className="px-2">
                    <FaGraduationCap className="text-[#00df9a]" size={25} />
                  </span>{" "}
                  Education
                </h3>
                <div className="block sm:flex sm:justify-between pt-1">
                  <p className="font-medium text-slate-300">
                    High School Diploma -{" "}
                    <span className="text-slate-300">
                      Christ The King Seminary School
                    </span>
                  </p>
                  <p className="text-slate-300">
                    2011 -2017 | Anambra State, Nigeria{" "}
                  </p>
                </div>
                <div className="pt-8 sm:pt-10">
                  <h3 className="font-bold border-b text-xl flex items-center py-2 text-slate-400">
                    <span className="px-2">
                      <FaCertificate className="text-[#00df9a]" />
                    </span>
                    Certificate
                  </h3>
                  <p className="font-medium bg-[#00df9a]/90 rounded text-black py-2 px-3 mt-3">
                    Udacity Front-end Web-Developer Nano Degree
                  </p>
                </div>
              </div>

              <button>
                <a
                  href="./assets/Enunwa-Emmanuel-Resume-2.pdf"
                  id="btn"
                  download="Emmanuel Resume.pdf"
                  className="group hover:shadow-[0_0_10px_#00df9a] text-slate-300 text-center border-4 border-[#00df9a] hover:text-[#00df9a] rounded py-3 px-3 font-semibold mt-10 text-lg flex justify-center items-center mx-auto md:mx-0"
                >
                  <AiOutlineDownload
                    className="group-hover:animate-bounce"
                    size={25}
                  />
                  <span className="px-2">Download Resume</span>
                </a>
              </button>
            </div>

            {/* profile */}
            <div className="hidden lg:block py-10 md:py-0 md:mr-8 shadow-[0_0_10px_#00df9a] h-[520px]">
              <div className="w-full bg-gradient-to-t lg:absolute z-50 from-black md:w-[400px] md:h-[250px] rounded-t-lg"></div>
              <img
                src={profil}
                alt="my profile picture"
                className=" w-full md:w-[400px] md:h-[250px] rounded relative"
              />

              <p className="flex items-center p-3 font-bold pt-8 text-slate-300">
                <span className="px-3">
                  <FaSuitcase className="text-[#00df9a]" size={20} />
                </span>
                Front-end Web Developer
              </p>

              <p className="flex items-center p-3 font-bold text-slate-300">
                <span className="px-3">
                  <FaHome className="text-[#00df9a]" size={20} />
                </span>
                Lagos, Nigeria
              </p>
              <p className="flex items-center p-3 font-bold text-slate-300">
                <span className="px-3">
                  <FaEnvelope className="text-[#00df9a]" size={20} />
                </span>
                cosmasemmanuel40@gmail.com
              </p>
              <p className="flex items-center p-3 font-bold text-slate-300">
                <span className="px-3">
                  <FaPhone className="rotate-90 text-[#00df9a]" size={20} />
                </span>
                +2347025769053 | +2349131941344
              </p>
              <button className="text-black rounded bg-[#00df9a] px-4 py-2 w-full text-center font-bold mt-4">
                Contact Me
              </button>
            </div>
          </div>

          {/* Work Experience */}
          <div className="my-8 py-8 px-6 shadow-sm w-full">
            <h3 className="font-bold text-xl sm:text-2xl text-slate-400 md:text-3xl capitalize flex items-center pb-4">
              <span className="px-3">
                <FaSuitcase className="text-[#00df9a]" size={30} />
              </span>
              Professional Experience
            </h3>
            {/* <div className="border-b-4 border-black w-20 mb-3"></div> */}

            <div className="block md:flex md:flex-row-reverse md:justify-between md:items-center gap-10">
              <div className="lg:w-[50%]">
                <p className="font-medium text-slate-300 text-xl">
                  <em>
                    Front-end Developer | Logiflex Tech, Ikeja, Lagos, Nigeria
                  </em>
                </p>
                <h5 className="flex items-center pt-3 font-bold text-lg py-2 text-[#00df9a]">
                  <span className="text-xl pr-4">
                    <FaCalendar />
                  </span>
                  April 2022 –{" "}
                  <b className="text-[#00df9a] ml-2 px-2 py-1 rounded bg-black font-mono">
                    present
                  </b>
                </h5>
                <ul className="pb-10 md:pb-0 font-medium text-gray-300">
                  <li className="py-2">
                    - Developed a responsive and user-friendly offline (P2P)
                    pharmaceutical retail app for pharmacies to easily sell
                    products and keep track of products sold.
                  </li>
                  <li className="py-2">
                    - Pioneered the adoption of Tailwind and Bootstrap,
                    streamlining the styling process and ensuring a consistent
                    and polished application aesthetic.
                  </li>
                  <li className="py-2">
                    - Converted a ReactJS web application into a mobile
                    application utilizing Capacitor JS.
                  </li>
                  <li className="py-2">
                    - Developed an offline web and mobile application{" "}
                  </li>
                  <li className="py-2">
                    - Developed a user-friendly movie web application utilizing
                    Next Js, Tailwind, and Firebase.
                  </li>
                </ul>
              </div>
              <div className="lg:w-[50%]">
                <p className="font-medium text-slate-300 text-xl">
                  <em>
                    Front-end Developer ( Intern ) | Netop Business Consulting
                    Limited, Ikeja, Lagos, Nigeria
                  </em>
                </p>
                <h5 className="flex items-center pt-3 font-bold text-lg py-2 text-[#00df9a]">
                  <span className="text-xl pr-4">
                    <FaCalendar />
                  </span>
                  Feb 2021 – Mar 2022
                </h5>
                <ul className="font-medium text-gray-300">
                  <li className="py-2">
                    - Worked closely with the development team to ensure a
                    smooth transition from web to mobile, gaining valuable
                    hands-on experience in web application development.
                  </li>
                  <li className="py-2">
                    - Engaged clients in a collaborative development process.
                  </li>
                  <li className="py-2">
                    - Built an e-commerce website where I designed, built, and
                    maintained code using Javascript, HTML, and CSS with
                    LocalStorage to store the data and publish it using Netlify.
                  </li>
                  <li className="py-2">
                    - Applied mastery of HTML and CSS3 to translate intricate
                    designs into pixel-perfect, aesthetically pleasing
                    interfaces.
                  </li>
                  {/* <li className="py-2">
                    - Contributed significantly to troubleshooting and
                    bug-fixing efforts during testing phases, showcasing
                    dedication and problem-solving acumen.
                  </li> */}
                </ul>
              </div>
              {/* <div className="home"></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-800 mx-4 z-50"></div>
    </>
  );
}

export default About;
