import { Routes, Route } from "react-router-dom"

import Footer from "./components/Footer"
// import { Routes, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/App.css"
import Home from "./pages/Home/Home"
import Info from "./pages/Info/Info"
import NotFound from "./pages/NotFound/NotFound"
import Background from "./components/Background/Background"

function App() {
  return (
    <>
      <Background />
      <div className="parent-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Info />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
