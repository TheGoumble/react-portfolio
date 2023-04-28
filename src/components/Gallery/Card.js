import { Col, Card } from "../../utilis/Bootstrap.js"
import { Laptop, InfoCircleFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

import styles from "./gallery.module.css"

export default function GalleryCard({
  data: { id, title, tech, language, cover, content, website, info },
}) {
  return (
    <Col key={id} className="button-effect project-card">
      <Card>
        <article className={`card-body p-3 ${styles.projects}`}>
          <header>
            <h2 className="d-flex justify-content-center">
              <a href={website} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h2>
            <p className="mb-0 pb-0 author d-flex justify-content-center">{language}</p>
            <p className="mt-0 pt-0 prior d-flex justify-content-center">
              <small>{tech}</small>
            </p>
          </header>
          <div className="d-flex justify-content-around">
            <Link to={`${website}`}>
              <Laptop color="#2ab2ae" size={27} /> Website
            </Link>
            <a href={`/${title}`}>
              <InfoCircleFill color="#2ab2ae" size={27} /> about
            </a>
          </div>
        </article>
      </Card>
    </Col>
  )
}
