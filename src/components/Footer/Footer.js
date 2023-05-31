import { Container, Row, Col } from "../../utilis/Bootstrap.js"
import { Github } from "react-bootstrap-icons"
import "./footer.css"

export default function Footer() {
  const repoUrl = "https://github.com/TheGoumble/react-portfolio"
  // <Github color="#ffff" size={27} />
  return (
    <footer>
      <div className="sky"></div>
      <div className="floor"></div>
    </footer>
  )
}
