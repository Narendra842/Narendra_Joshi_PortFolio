import Silicon_Stack from "../../assets/Silicon_Stack.jpg";
import KSJ from "../../assets/KSJ.jpg";
function Experience() {
  return (
    <>
      <main className="w-full h-auto animate-fadeIn bg-[url('./assets/experience.jpg')] bg-cover bg-no-repeat ">
        <div className="flex flex-col h-full flex-wrap xl:mt-0 py-3 animate__animated animate__zoomIn">
          <div className=" xl:flex w-full items-center h-full">
            <div
              className="flex flex-col mx-auto items-center 
            px-4 tracking-widest flex-wrap h-auto"
            >
              <h1
                className="text-xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-4xl
               font-extrabold tracking-wider transition ease-out hover:translate-y-1 hover:scale-110
                 duration-150 cursor-pointer "
              >
                Silicon Stack
              </h1>
              <a
                href="https://www.linkedin.com/company/silicon-stack/"
                target="_blank"
              >
                <img
                  src={Silicon_Stack}
                  alt="Silicon Stack"
                  className="w-20 h-16 transition ease-out hover:translate-y-1 
                hover:scale-110 duration-150 cursor-pointer"
                />
              </a>

              <span className="text-lg font-extrabold  text-gray-400 tracking-widest">
                (Austrax Technologies)
              </span>

              <h2 className="text-gray-400 font-bold tracking-wider">
                Associate Software Engineer
              </h2>
              <p className="font-bold text-gray-500 tracking-wider">
                August 2022 - Present | Pune
              </p>
              <ul className="text-base max-w-2xl text-justify flex flex-col gap-3 py-2 ">
                <li>
                  • Designed and developed robust Java applications using Spring
                  Boot and Hibernate, ensuring high performance and scalability.
                </li>
                <li>
                  • Implemented REST APIs and Microservices architecture,
                  enhancing system modularity and integration capabilities.{" "}
                </li>
                <li>
                  • Managed database operations, including writing complex
                  queries, stored procedures, and optimizing database
                  performance using Hibernate ORM.
                </li>
                <li>
                  • Participated in Agile methodologies, including Scrum
                  meetings, sprint planning, and retrospective sessions.
                </li>
                <li>
                  • Troubleshooted and resolved technical issues, providing
                  maintenance and support for existing applications.
                </li>
              </ul>
            </div>
            <div
              className="flex flex-col mx-auto  flex-wrap px-4 items-center
             tracking-widest mt-5 xl:mt-0"
            >
              <h2
                className="text-xl xl:text-4xl lg:text-3xl 
              md:text-2xl sm:text-4xl font-extrabold transition ease-out
               hover:translate-y-1 hover:scale-110  duration-150 cursor-pointer"
              >
                KSJ Technology
              </h2>
              <a
                href="https://www.linkedin.com/company/ksj-technology-pvt-ltd/"
                target="_blank"
              >
                <img
                  src={KSJ}
                  alt=""
                  className="w-20 h-16 transition ease-out 
              hover:translate-y-1 hover:scale-110 duration-150 cursor-pointer"
                />
              </a>

              <h1 className="text-gray-400 font-bold">Java Intern</h1>
              <p className="text-gray-500 font-bold">
                January 2022 - July 2022 | Pune
              </p>
              <ul className="text-base py-2 text-justify flex flex-col gap-3 max-w-2xl">
                <li>
                  • Developed and maintained Java applications, handling both
                  frontend and backend development tasks.
                </li>

                <li>
                  • Collaborated with senior developers on software design and
                  implementation, adhering to Java development best practices.
                </li>

                <li>
                  • Debugged and resolved software issues, improving application
                  performance and user experience.
                </li>

                <li>
                  • Assisted in developing and maintaining Java-based
                  applications, contributing to both frontend and backend
                  development.
                </li>

                <li>
                  • Attended team meetings and contributed to project planning
                  and status updates.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Experience;
