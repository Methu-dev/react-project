import React from "react";
import image from "../../assets/About.png";
import { IoArrowForward } from "react-icons/io5";
function About() {
  return (
    <div id="About" className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={image} alt="about_image" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  MERN Stack Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Hello! I'm Methu Islam, a passionate MERN Stack Developer. I
                  specialize in developing full-stack web applications using
                  MongoDB, Express.js, React.js, and Node.js. With hands-on
                  experience in building scalable and efficient applications, I
                  strive to write clean, maintainable, and scalable code. I am
                  committed to providing high-quality solutions that solve
                  real-world problems.
                </p>
              </span>
            </div>


            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Development:
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a MERN Stack Developer, I am well-versed in the backend development using Node.js and Express.js, which form the backbone of many web applications I’ve built. Below are the key skills I bring to backend development:
                </p>
              </span>
            </div>


            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database Development:
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  As a MERN Stack Developer, I am skilled in working with both SQL and NoSQL databases. I design, implement, and optimize databases to store and manage application data efficiently. I focus on choosing the right database structure depending on the application requirements, such as MongoDB for flexible NoSQL data models or PostgreSQL/MySQL for relational data.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
