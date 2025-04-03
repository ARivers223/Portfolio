import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ManagementProjects from "./components/ManagementProjects";
import SoftwareProjects from "./components/SoftwareProjects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <ManagementProjects />
	  <SoftwareProjects />
      <Skills />
      <Contact />
    </main>
  );
}
