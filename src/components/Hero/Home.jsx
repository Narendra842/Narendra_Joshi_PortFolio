import { Link } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <main
      className="w-full bg-[url('./assets/header.jpeg')]  bg-no-repeat  bg-cover
     flex flex-wrap flex-shrink duration-300  text-white "
    >
      <div className=" place-content-center mx-auto sm:text-left text-center">
        <div
          className="tracking-widest font-bold xl:leading-[3rem] lg:leading-10 
        md:leading-9 sm:leading-3 leading-5 gap-4 opacity-100"
        >
          <p className="text-3xl animate__animated animate__fadeInDown  ">
            Hello,
          </p>
          <p className="text-6xl animate__animated animate__fadeInDown  ">
            I Am <br />
            Naredra Joshi
          </p>
          <ReactTyped
            className="text-3xl font-extrabold text-center animate__animated animate__fadeInDown"
            strings={[
              "Java Developer",
              "2.6+ Years Experience",
              "Back End Developer",
            ]}
            typeSpeed={18}
            backSpeed={18}
            loop
          />
          <p className="text-xl animate__animated animate__fadeInDown ">
            I Look forward to working with You.
          </p>
          <button className=" mt-2 ">
            <Link
              to="https://drive.google.com/file/d/1C_sM9jmhvjoIVOae0yGjXFu0vhUcqBdi/view?usp=sharing" 
              className=" text-xl text-center px-8 py-2 duration-200 max-w-none 
                ring-2 ring-white  hover:ring-blue-500 hover:text-gray-500 
               rounded-xl font-extrabold  animate__animated animate__fadeInDown"
            >
              Resume
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Home;
