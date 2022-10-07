import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AboutMe from "./pages/AboutMe"
import Projects from "./pages/Projects"
import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/about" element={<AboutMe/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
