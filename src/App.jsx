import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Footer from "./components/Footer";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDisplay from "./components/ProjectDisplay";
// import {useRef} from "react";
function App(){
    return (
    <div>
        <Navbar />
        <Hero />
        <Experience/>
        <Expertise/>
        <Projects/>


        {/* <Router>
            <Routes> 
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/project/:id" element={<ProjectDisplay />} />
            </Routes>
        </Router> */}


        <Contact/>    
        <Footer/>
    </div>
    );
    // const home=useRef(null);
    // const experience=useRef(null);
    // const projects=useRef(null);
    // const contact=useRef(null);
    // const scrollToSection=(elementRef)=>{
    //     window.scrollTo({
    //         top:elementRef.current.offsetTop,
    //         behavior:"smooth",
    //     });
    // };
    // return (
    // <nav className="nav">
    //     {/* <a href="/" className="site-title">Site Name</a>
    //         <ul>
    //             <li><a href="/about">Home</a></li>
    //             <li><a href="/experience">Experience</a></li>
    //             <li><a href="/projects">Projects</a></li>
    //             <li><a href="/moreProjects">Other Notable Projects</a></li>
    //             <li><a href="/contact">Contact</a></li>
    //         </ul> */}
           
    //         <div className="hero">
    //             <ul>
    //                 <li onClick={() => scrollToSection(home)} className="link">Hoome</li>
    //                 <li onClick={() => scrollToSection(experience)} className="link">Experience</li>
    //                 <li onClick={() => scrollToSection(projects)} className="link">Projects</li>
    //                 <li onClick={() => scrollToSection(contact)} className="link">Contact</li>
    //             </ul>
    //             <div ref={home} className="home">
    //             <h3>home</h3>
    //             </div>

    //             <div ref={experience} className="experience">
    //             <h3>Experience</h3>
    //             </div>

    //             <div ref={projects} className="projects">
    //             <h3>Projects</h3>
    //             </div>

    //             <div ref={contact} className="contact">
    //             <h3>Contact Info</h3>
    //             </div>
    //         </div>
    // </nav>
    // );

}
export default App;