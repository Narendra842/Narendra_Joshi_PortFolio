import Home from "./components/Hero/Home.jsx";
import Skill from "./components/Skills/Skill.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Project from "./components/Projects/Project.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Layout from "./Layout/Layout.jsx";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="skill" element={<Skill />} />
        <Route path="project" element={<Project />} />
        <Route path="experience" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
