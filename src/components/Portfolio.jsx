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
      <div className="border-slate-700 border-t pt-8 text-center sm:text-left max-w-[1440px] w-full mx-auto px-3">
        <div className=""></div>
        <div className="flex justify-center sm:text-left">
          <h1
            className="text-[#00df9a] text-4xl md:text-5xl font-bold py-8"
            id="portfolio"
          >
            Portfolio/works
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 flex-shrink-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-6">
          {dataImage.map((data, index) => (
            <div key={data.title}>
              <div className=" group w-full flex-shrink-0 sm:w-11/12 lg:w-full inline-block p-2 cursor-pointer  hover:scale-110 duration-300 delay-100 relative">
                {/* <div className="bg-black/20 absolute w-full h-full top-0 left-0"></div> */}
                <img
                  src={data.img}
                  alt={data.title}
                  id={`myImg-${index}`}
                  title="Open in modal to view details"
                  className="h-auto md:h-52 w-full block rounded group-hover:border-4 group-hover:border-[#00df9a] group-hover:shadow-[0_0_10px_#00df9a] duration-300 delay-100"
                />

                <div className=" bg-[#00df9a]/80 transition ease-in-out duration-300 delay-100 py-4  overflow-hidden">
                  <div className="flex justify-between items-center font-bold text-4xl px-8">
                    <a
                      href={data.link1}
                      target="_blank"
                      title="Website"
                      className="decoration-transparent text-white hover:text-opacity-80"
                    >
                      <FaLink className="" />
                    </a>
                    <a
                      href={data.link2}
                      target="_blank"
                      title="Github"
                      className="decoration-transparent text-white hover:text-opacity-80"
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
                <div className="block md:hidden w-[80%] max-w-[700px] mx-auto">
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
