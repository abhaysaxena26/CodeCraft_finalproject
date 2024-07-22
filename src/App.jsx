import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"
import LandingPage from "./components/LandingPage"
import Error from "./components/Error"
import {BrowserRouter,Routes, Route} from "react-router-dom";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/" element={<LandingPage />}/>
          <Route exact path="/about" element={<About />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/experience" element={<Experience />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}
export default App
