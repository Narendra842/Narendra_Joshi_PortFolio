import mysql from "../../assets/mysql.svg";
import html5 from "../../assets/html5.svg";
import css from "../../assets/css.svg";
import vs from "../../assets/vs.svg";
import ApacheMaven from "../../assets/ApacheMaven.svg";
import BitBucket from "../../assets/BitBucket.svg";
import Eclipse from "../../assets/Eclipse.svg";
import GitHub from "../../assets/GitHub.svg";
import Jira from "../../assets/Jira.svg";
import Java from "../../assets/Java.svg";
import JavaScript from "../../assets/JavaScript.svg";
import Nodejs from "../../assets/Nodejs.svg";
import Postman from "../../assets/Postman.svg";
import Tomcat from "../../assets/Tomcat.svg";
import Nestjs from "../../assets/Nestjs.svg";
import Hibernate from "../../assets/Hibernate.svg";
import Postgres from "../../assets/Postgres.svg";
import Spring from "../../assets/Spring.svg";
import react_1 from "../../assets/react_1.svg";
import Gradle from "../../assets/Gradle.svg";

function Skill() {
  return (
    <>
      <main
        className=" relative  h-auto w-full flex flex-col justify-center
         mx-auto  bg-[url('./assets/skill.jpeg')] bg-no-repeat bg-cover"
      >
        <div
          className="grid grid-cols-4 sm:grid-cols-4 xl:grid-cols-5 md:grid-cols-5 md:gap-12 lg:gap-12 
              xl:gap-20 sm:gap-3 gap-2 w-full justify-items-center xl:px-10 xl:py-5 lg:py-5 lg:px-10 md:py-8 
              md:px-8 sm:py-1 sm:px-1 py-4 px-1  animate__animated animate__zoomIn "
        >
          <div className="flex flex-col items-center text-center  ">
            <span>HTML</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150  "
              src={html5}
              alt="html5"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>CSS</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={css}
              alt="css"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>JavaScript</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={JavaScript}
              alt="JavaScript"
            />
          </div>

          {/* icons div */}
          <div className="flex flex-col items-center text-center ">
            <span>Java</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Java}
              alt="Java"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>MYSQL</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={mysql}
              alt="mysql"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>Postgres</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Postgres}
              alt="Postgres"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>TomCat</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Tomcat}
              alt="Tomcat"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>Hibernate</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Hibernate}
              alt="Hibernate"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>NestJS</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Nestjs}
              alt="Nestjs"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>NodeJS</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Nodejs}
              alt="NodeJS"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>Spring </span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Spring}
              alt="Spring"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>React</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={react_1}
              alt="React"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>Gradle </span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Gradle}
              alt="Gradle"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>Apache</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={ApacheMaven}
              alt="ApacheMaven"
            />
          </div>

          {/* icons div */}

          <div className="flex flex-col items-center text-center ">
            <span>VSCode</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={vs}
              alt="vs"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>BitBucket</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={BitBucket}
              alt="BitBucket"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>Eclipse</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Eclipse}
              alt="Eclipse"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>GitHub</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={GitHub}
              alt="GitHub"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>Jira</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Jira}
              alt="Jira"
            />
          </div>

          <div className="flex flex-col items-center text-center ">
            <span>Postman</span>
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150"
              src={Postman}
              alt="Postman"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default Skill;
