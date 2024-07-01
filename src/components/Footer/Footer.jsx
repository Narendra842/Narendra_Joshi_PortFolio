import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col mx-auto h-16 items-center justify-center shadow-sm shadow-white  bg-[#242424]">
      <div className="flex w-full items-center justify-center gap-8 mt-2 text-2xl">
        <a
          className="text-white hover:text-orange-500 duration-500 animate-fadeIn"
          href="https://github.com/Narendra842"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          className="text-white hover:text-orange-500 duration-500 animate-fadeIn "
          href="https://www.linkedin.com/in/narendra-joshi-650818205/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="text-white  text-sm  mt-2 animate-fadeIn">
        <p className="tracking-widest ">
          &copy; {new Date().getFullYear()} Narendra Joshi{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
