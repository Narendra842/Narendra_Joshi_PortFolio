function Project() {
  return (
    <>
      <main
        className="w-full h-auto
     flex flex-col tracking-widest leading-relaxed animate-fadeIn
      bg-[url('./assets/project.jpg')] bg-cover bg-no-repeat "
      >
        <div
          className="flex h-full flex-wrap items-center mt-5 xl:mt-0  
        animate__animated animate__zoomIn"
        >
          <div className="xl:flex w-full items-center">
            <div className="flex flex-col  mx-auto items-center px-3 ">
              <h1
                className="text-3xl font-extrabold tracking-wide text-center
               py-2 transition ease-out hover:translate-y-1 hover:scale-110  
               duration-150 cursor-pointer"
              >
                APG {"(Affinion Payment Gateway)"}
              </h1>
              <ul className="max-w-lg text-base text-pretty flex flex-col gap-3  ">
                <li>
                  • The Affinion Group, operating customer loyalty programs in
                  over twenty countries, is upgrading its APG system to support
                  recurring billing and subscriptions, transitioning from a
                  single payment model to a flexible, subscription-based
                  approach.
                </li>
                <li>
                  • This project enable the creation and updating of recurring
                  billing profiles, automate payment processes, integrate an
                  account updater to keep payment information current, and
                  manage chargebacks, refunds, retrievals, and mandates.
                </li>

                <li>
                  • Authorized users will access these features via APIs,
                  ensuring seamless integration with existing systems, enhancing
                  customer retention, operational efficiency, and regulatory
                  compliance, while generating consistent revenue streams and
                  providing an improved customer experience.
                </li>
                <h1 className="text-xl font-bold ">
                  Used Technology: Java 8, SpringBoot, Microservices, Kafka,
                  Hibernate, PostgresSQL{" "}
                </h1>
              </ul>
            </div>

            <div className="flex flex-col mx-auto items-center px-3 mt-5 xl:mt-0 ">
              <h1
                className="text-3xl font-extrabold tracking-wide 
              text-center  transition ease-out hover:translate-y-1 hover:scale-110
                duration-150 cursor-pointer"
              >
                ATS {"(Application Tracking System)"}
              </h1>
              <ul
                className="max-w-xl text-base  text-pretty 
              py-3 flex flex-col gap-3"
              >
                <li>
                  • Auto-Hire is designed to transform the candidate experience
                  by automating 30-40% of recruitment tasks, enhancing
                  efficiency and accuracy throughout the hiring process.
                </li>

                <li>
                  • It enables hiring managers to raise requisitions and secure
                  multi-level approvals, automates job postings across various
                  job boards, and manages employee referrals and vendor
                  submissions with duplicate checks.
                </li>

                <li>
                  • With calendar integrations, it streamlines the scheduling of
                  screenings and interviews, including support for video
                  interviews. Auto-Hire also automates offer management and
                  onboarding tasks, ensuring a smooth transition for new hires.
                  This comprehensive automation not only speeds up the
                  recruitment process but also improves the overall experience
                  for both recruiters and candidates.
                </li>
                <h1 className="text-xl font-bold ">
                  Used Technology: Java 8, Spring MVC, JSP, MySQL{" "}
                </h1>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Project;
