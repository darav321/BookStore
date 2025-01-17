import React from "react";
import bannerImg from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-11 items-center justify-around">

      <div className="w-full md:w-1/2 flex items-center md:justify-end md:mr-10">
        <img src={bannerImg} alt="" />
      </div>

      <div className="md:w-1/2 w-full pl-6 md:pl-20">
        <h1 className="md:text-5xl mt-10   text-4xl font-medium mb-7 font-primary">
          New Releases this Week
        </h1>
        <p className="mb-10 w-full md:w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          eaque dicta fugiat earum, fuga doloribus inventore debitis et facilis,
          rem ipsa, delectus aliquam iste est!
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>

    </div>
  );
};

export default Banner;
