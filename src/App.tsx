import Header from "./components/Header"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import Competence from "./components/Compétences"
import Project from "./components/Project"
import APP from "./components/APP"
import Footer from "./components/Footer"
import Copyright from "./components/Copyright"

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/header" element={<Header />}/>
        <Route path="/landingpage" element={<LandingPage />}/>
        <Route path="/competence" element={<Competence />}/>
        <Route  path="/project" element={<Project />}/>
        <Route  path="/app" element={<APP />}/>
        <Route  path="/footer" element={<Footer />}/>
        <Route  path="/copyright" element={<Copyright />}/>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
