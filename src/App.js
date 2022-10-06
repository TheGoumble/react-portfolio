import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={LandingPage} />
        <Route path="/projects" element={Projects} />
        <Route path="/about" element={AboutMe} />

      </Routes>
    </>
  )
}

export default App
