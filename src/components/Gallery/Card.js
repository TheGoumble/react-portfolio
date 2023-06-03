import { Col } from "../../utilis/Bootstrap.js"
import { Laptop, InfoCircleFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

import "./gallery.css"

export default function GalleryCard({
  data: { id, title, tech, language, website, style, svg },
}) {
  return (
    <Col key={id} className="button-effect">
      <div className="project-cards">
        <div className={`${style}`}>
          <h2 >
            <a href={website} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h2>
          <div className="body">
            <p className="mb-0 pb-0 author d-flex justify-content-center">
              {language}
            </p>
            <p className="mt-0 pt-0 prior text-center">
              <small>{tech}</small>
            </p>
          </div>

          <div id="btn-group" className="d-flex justify-content-around w-100">
            <Link to={`${website}`}>
              <Laptop size={27} target="_blank" rel="noreferrer" /> Website
            </Link>
            <Link to={`/${title}`}>
              <InfoCircleFill size={27} /> about
            </Link>
          </div>
        </div>
      </div>
    </Col>
  )
}
