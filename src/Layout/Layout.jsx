import { useState, useEffect } from "react";
import SpinnerLoader from "../components/SpinnerLoader/SpinnerLoader.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some loading process
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="animate-fadeIn">
        {isLoading ? (
          <SpinnerLoader />
        ) : (
          <div className=" flex flex-col min-h-screen ">
            <header>
              <nav>
                <Navbar />
              </nav>
            </header>
            <main className="flex flex-1 shadow-sm shadow-white">
              <Outlet />
              <ToastContainer />
            </main>
            <footer className="h-16 w-full bg-slate-400-">
              <Footer />
            </footer>
          </div>
        )}
      </div>
    </>
  );
}

export default Layout;
