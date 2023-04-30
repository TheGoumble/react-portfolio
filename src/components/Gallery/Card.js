import { Col, Card } from "../../utilis/Bootstrap.js"
import { Laptop, InfoCircleFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

import "./gallery.css"

export default function GalleryCard({
  data: { id, title, tech, language, website, style },
}) {
  return (
    <Col key={id} className="button-effect">
      <Card className={`${style}`}>
        <article className="card-body p-3 d-flex align-content-between justify-content-center flex-wrap projects">
          <header>
            <h2 className="d-flex justify-content-center">
              <a href={website} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h2>
            <div>
              <p className="mb-0 pb-0 author d-flex justify-content-center">
                {language}
              </p>
              <p className="mt-0 pt-0 prior text-center">
                <small>{tech}</small>
              </p>
            </div>
          </header>
          <div className="d-flex justify-content-around w-100">
            <Link to={`${website}`}>
              <Laptop size={27} /> Website
            </Link>
            <Link to={`/${title}`}>
              <InfoCircleFill size={27} /> about
            </Link>
          </div>
        </article>
      </Card>
    </Col>
  )
}
