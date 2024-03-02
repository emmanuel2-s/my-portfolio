import React, { useEffect, useState } from "react";
import { dataImage } from "../portfolioWorks";
import { FaLink } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";

function Portfolio() {
  useEffect(() => {
    dataImage.forEach((data, index) => {
      const imgId = `myImg-${index}`;
      const modalId = `img-modal-${index}`;
      const imgElement = document.getElementById(imgId);
      const modal = document.getElementById(modalId);
      const modalImg = modal.querySelector(".modal-content");
      const captionText = modal.querySelector(`#caption-${index}`);
      const titleText = modal.querySelector(`#title-${index}`);
      imgElement.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        titleText.textContent = data.title;
        captionText.textContent = data.text;
      };
      modal.querySelector(".close").onclick = function () {
        modal.style.display = "none";
      };
    });
  }, []);

  return (
    <>
      <div className="text-slate-300 pt-8 text-center sm:text-left max-w-[1440px] mx-auto">
        <h1 className="text-[#00df9a] text-4xl font-bold">Portfolio/works</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-0 lg:gap-6">
          {dataImage.map((data, index) => (
            <div key={data.title}>
              <div className=" group w-full md:max-w-[350px] p-2 cursor-pointer relative hover:scale-105 duration-300 delay-100">
                <img
                  src={data.img}
                  alt={data.title}
                  id={`myImg-${index}`}
                  className="h-52 rounded w-full group-hover:border-4 group-hover:border-[#00df9a] group-hover:shadow-[0_0_10px_#00df9a]"
                />

                <div className=" bg-[#00df9a]/80 py-4 absolute w-full md:w-[325px] top-[148px] hidden group-hover:block">
                  <div className="flex justify-between items-center font-bold text-4xl px-8">
                    <a
                      href={data.link1}
                      target="_blank"
                      className="decoration-transparent text-white hover:text-[#00df9a]"
                    >
                      <FaLink className="" />
                    </a>
                    <a
                      href={data.link2}
                      target="_blank"
                      className="decoration-transparent text-white hover:text-[#00df9a]"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                </div>
              </div>
              {/* image modal display section */}
              <div
                id={`img-modal-${index}`}
                className="fixed hidden h-full w-full bg-black/90 top-0 left-0 z-[150] overflow-auto"
              >
                <span className="close text-5xl float-right mr-8 hover:text-[#00df9a] cursor-pointer font-bold text-white">
                  &times;
                </span>

                <img
                  className="modal-content w-full p-2 pt-44 max-w-[900px] md:w-[80%] mx-auto block md:pt-24 pb-3"
                  id={`img01-${index}`}
                />

                <div
                  id={`title-${index}`}
                  className="title w-[80%] max-w-[700px] mx-auto text-center block text-white text-xl uppercase underline"
                ></div>
                <div
                  id={`caption-${index}`}
                  className="caption w-[80%] max-w-[700px] mx-auto text-center p-4 block text-white text-lg"
                ></div>
                {/* mobile */}
                <div className=" md:hidden block w-[80%] max-w-[700px] mx-auto">
                  <a
                    href={data.link1}
                    target="_blank"
                    className="underline text-white hover:text-[#00df9a] flex items-center text-center"
                  >
                    <FaLink className=" text-white pr-2" size={30} />
                    {data.link1}
                  </a>
                  <a
                    href={data.link2}
                    target="_blank"
                    className="underline text-white hover:text-[#00df9a] flex items-center text-center"
                  >
                    <AiFillGithub className="text-white pr-2" size={30} />
                    {data.link2}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
