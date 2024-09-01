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
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150  "
              src={html5}
              alt="html5"
              />
              <span>HTML</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={css}
              alt="css"
              />
              <span>CSS</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={JavaScript}
              alt="JavaScript"
              />
              <span>JavaScript</span>
          </div>

          {/* icons div */}
          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Java}
              alt="Java"
              />
              <span>Java</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={mysql}
              alt="mysql"
              />
              <span>MYSQL</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Postgres}
              alt="Postgres"
              />
              <span>Postgres</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Tomcat}
              alt="Tomcat"
              />
              <span>TomCat</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Hibernate}
              alt="Hibernate"
              />
              <span>Hibernate</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Nestjs}
              alt="Nestjs"
              />
              <span>NestJS</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Nodejs}
              alt="NodeJS"
              />
              <span>NodeJS</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Spring}
              alt="Spring"
              />
              <span>Spring </span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={react_1}
              alt="React"
              />
              <span>React</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Gradle}
              alt="Gradle"
              />
              <span>Gradle </span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={ApacheMaven}
              alt="ApacheMaven"
              />
              <span>Apache</span>
          </div>

          {/* icons div */}

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={vs}
              alt="vs"
              />
              <span>VSCode</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={BitBucket}
              alt="BitBucket"
              />
              <span>BitBucket</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Eclipse}
              alt="Eclipse"
              />
              <span>Eclipse</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={GitHub}
              alt="GitHub"
              />
              <span>GitHub</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Jira}
              alt="Jira"
              />
              <span>Jira</span>
          </div>

          <div className="flex flex-col items-center text-center ">
            <img
              className="icon_size transition ease-out hover:translate-y-1 hover:scale-110  
              duration-150"
              src={Postman}
              alt="Postman"
              />
              <span>Postman</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default Skill;
