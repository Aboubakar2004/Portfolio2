import Header from "./components/Header"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import APP from "./components/APP"

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/header" element={<Header />}/>
        <Route path="/landingpage" element={<LandingPage />}/>
        <Route path="/app" element={<APP />}/>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
