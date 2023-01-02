import React from "react";
import Image from "../assets/img/house.png";
import Search from "./Search";

const Poster = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg-ml-8 xl:ml-[135] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 ">
          <h1 className="text-4x1 lg:text-[58px] font-semibold leading-none mb-6 p-6">Find <span className="text-green-700">Real-Estate</span> Of Your Dream.
          </h1>
          <p className="max-w-[480px] mb-8 p-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta cupiditate placeat facere excepturi possimus qui, saepe cum adipisci ab quasi libero, nam, officia ad?
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt=""></img>
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Poster;
