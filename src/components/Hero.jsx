import React from "react";
import Typed from "react-typed";
import star from "../assets/img/star.png";
import profile from "../assets/img/result (2).png";
// import profile from "../assets/img/3d-graphic-designer 1.png";
import profil from "../assets/img/snapchat.jpg";
import starpu from "../assets/img/star pu.png";
import satagra from "../assets/img/sata gra.png";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdFacebook, MdOutlineArrowDownward } from "react-icons/md";

function Hero() {
  return (
    <>
      <div className="hty pt-16 md:pt-32 w-full max-w-[1440px] mx-auto h-full md:py-20 md:flex md:flex-row-reverse md:justify-around">
        <div className="relative">
          <div className="hidden w-full absolute md:block bg-gradient-to-t lg:absolute z-30 from-black h-full lg:w-[600px] lg:h-[600px] rounded-t-lg"></div>
          <img
            src={profile}
            alt="/"
            width={600}
            className=" hidden md:flex flex-shrink-0 lg:h-[600px]"
          />
          <img
            src={profil}
            alt="my profile picture"
            className="rounded-full border-8 border-[#00df9a] w-[400px] h-[400px] block md:hidden mx-auto animate-pulse"
          />
        </div>

        <div className="p-4 block">
          <div className="p-4 flex justify-center flex-col items-center  md:items-start">
            <h1 className="resume text-4xl md:text-4xl lg:text-5xl sm:text-5xl font-bold text-[#00df9a] uppercase text- md py-4">
              HELLO,
            </h1>
            <h2 className="text-center font-extrabold leading-10 text-4xl sm:text-4xl sm:text-left  lg:text-6xl text-slate-300 py-3">
              I'M ENUNWA EMMANUEL.
            </h2>

            <div className="text-gray-300 flex justify-center items-center font-bold pb-10 md:pb-0">
              <p className="typed hidden lg:block py-3 text-3xl md:text-4xl sm:text-3xl pr-3">
                {" "}
                A
              </p>
              <Typed
                className="typed text-3xl md:text-4xl sm:text-4xl"
                strings={["WEB-DEVELOPER", "YOUTUBER", "WRITER"]}
                typeSpeed={120}
                backSpeed={130}
                loop
              />
            </div>
            <p className="hidden lg:block md:w-full lg:w-[500px] xl:w-[600px] text-gray-300 leading-tight text-lg">
              I'm a Nigerian based web designer & front‑end web developer
              focused on crafting clean & user‑friendly experiences, I am
              passionate about building excellent software that will bring a
              solution to a problem .
            </p>
            <button className="group bg-[#00df9a] text-center text-black rounded py-3 px-3 font-semibold md:mt-10 text-lg w-full md:w-44 hover:shadow-[0_0_10px_#00df9a] ">
              <span className="px-2 group-hover:text-white">Lets Talk</span>
            </button>
          </div>
          <div className="text-white text-3xl flex justify-center md:justify-normal pt-20 md:pt-16">
            <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
              <MdFacebook className="h hover:shadow-[0_0_10px_#00df9a]" />
            </a>
            <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
              <AiFillInstagram className="hover:shadow-[0_0_10px_#00df9a]" />
            </a>
            <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
              <AiFillGithub className="hover:shadow-[0_0_10px_#00df9a]" />
            </a>
            <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
              <AiFillLinkedin className="hover:shadow-[0_0_10px_#00df9a]" />
            </a>
            <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
              <AiOutlineTwitter className="hover:shadow-[0_0_10px_#00df9a]" />
            </a>
            <a className="px-4 md:px-3   hover:scale-125 duration-300" href="">
              <AiFillYoutube className="h hover:shadow-[0_0_10px_#00df9a]" />
            </a>
          </div>
        </div>
        {/* <a href='#about' className='text-white border-4 border-[#00df9a] rounded-full p-3 animate-bounce mx-auto'><MdOutlineArrowDownward className='text-5xl' /></a> */}
      </div>
      <div className="border-b border-slate-800 mx-4 z-50"></div>
    </>
  );
}

export default Hero;
