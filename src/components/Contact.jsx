import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaSuitcase } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { notifyError, notifySuccess } from "../utils/toast";

function Contact() {
  const [inputValue, setInputValue] = useState("");

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleSubmit = () => {
    if (!inputValue) {
      notifyError("inputs must be filled");
      return;
    }
    setInputValue("");
    notifySuccess("message sent successfully");
  };

  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto md:mt-20 py-4 px-4 border-t border-slate-700">
        <h1
          className="text-[#00df9a] text-center md:text-left text-4xl font-bold my-6 px-3"
          id="contact"
        >
          Contact Me
        </h1>

        <div className="block md:flex md:justify-between md:items-center space-y-3 px-4 sm:px-0">
          <div className="w-full mb-8">
            <h4 className="text-slate-400 text-xl font-bold py-4">
              I' ll be thrilled to have you connect with me!
            </h4>
            <form onSubmit={handleSubmit} className="w-full" autoComplete="off">
              <label htmlFor="name" className="text-slate-300 block py-1">
                Full_Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={inputValue.username || ""}
                onChange={handleChangeValue}
                required
                className="w-full md:w-7/12 py-2 rounded bg-transparent border-2 border-[#00df9a] focus:ring focus:ring-[#00df9a] text-white active:bg-transparent caret-[#00df9a] px-2 focus:outline-none"
              />
              <label htmlFor="email" className="text-slate-300 block py-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={inputValue.email || ""}
                onChange={handleChangeValue}
                required
                className="w-full md:w-7/12 py-2 rounded bg-transparent border-2 border-[#00df9a] focus:ring focus:ring-[#00df9a] text-white  active:bg-transparent caret-[#00df9a] px-2 focus:outline-none"
              />
              <label htmlFor="mesage" className="text-slate-300 block py-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={inputValue.message || ""}
                onChange={handleChangeValue}
                required
                className="w-full md:w-7/12 py-2 rounded bg-transparent border-2 border-[#00df9a] focus:ring focus:ring-[#00df9a] active:bg-transparent text-white caret-[#00df9a] px-2 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="text-black rounded w-full md:w-7/12 bg-[#00df9a] px-4 py-2 text-center font-bold mt-4 hover:bg-green-500"
              >
                Contact Me
              </button>
            </form>
          </div>

          <div className="block md:hidden lg:block py-8 shadow-[0_0_10px_#00df9a] px-4 sm:px-2 rounded-lg">
            <p className="flex items-center p-3 font-bold text-slate-300">
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

            <div className="text-white text-3xl flex justify-center md:justify-normal pt-2 md:pt-2">
              <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
                <MdFacebook className="h hover:shadow-[0_0_10px_#00df9a]" />
              </a>
              <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
                <AiFillInstagram className="hover:shadow-[0_0_10px_#00df9a]" />
              </a>
              <a
                className="px-4 md:px-3 hover:scale-125 duration-300"
                href="https://github.com/emmanuel2-s/"
                target="_blank"
              >
                <AiFillGithub className="hover:shadow-[0_0_10px_#00df9a]" />
              </a>
              <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
                <AiFillLinkedin className="hover:shadow-[0_0_10px_#00df9a]" />
              </a>
              <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
                <AiOutlineTwitter className="hover:shadow-[0_0_10px_#00df9a]" />
              </a>
              <a className="px-4 md:px-3 hover:scale-125 duration-300" href="">
                <AiFillYoutube className="h hover:shadow-[0_0_10px_#00df9a]" />
              </a>
            </div>
          </div>
        </div>
        {/* <div class="relative">
          <input
            type="text"
            id="floating_filled"
            class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="floating_filled"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Floating filled
          </label>
        </div> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default Contact;
