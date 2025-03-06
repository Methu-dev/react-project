import React from "react";
import TextChange from "../textChange/TextChange";

function Home() {
  return (
    <div className="flex w-full justify-between items-start p-10 md:p-20">
  <div className="md:w-2/4 md:pt-10">
    <h1 className="text-white text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
      <TextChange />
    </h1>
    <p className="text-white text-sm md:text-2xl tracking-tight">
      Name: Methu Islam Profession: MERN Stack Developer Language
      Preference: Bangla Relationship Status: Not in a relationship Places
      Visited: Chandpur, Mawa, Sadar Ghat, Meghna River, and Padma River
      Music Preference: Prefers listening to sad music when feeling down
    </p>
    <button className="mt-5 md:md-10 py-1 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] text-white">
      Contact Me
    </button>
  </div>
  <div className="flex justify-center items-center">
    <img className="w-2/4 rounded-2xl" src="https://i.ibb.co.com/TBj0xb8B/Methu-2.jpg" alt="Methu Image" />
  </div>
</div>

  );
}

export default Home;
