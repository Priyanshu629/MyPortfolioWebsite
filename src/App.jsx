import About from "./components/About"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  useEffect(()=>{
    Aos.init()
},[])

  return (
    <>

    <Navbar/>
    <About/>
    <Skills/>
    <Projects/>
    <Education/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
