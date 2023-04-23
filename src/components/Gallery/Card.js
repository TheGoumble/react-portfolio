import { Col, Card, Accordion, ListGroup } from "../../utilis/Bootstrap.js"
import { Laptop } from "react-bootstrap-icons"

import styles from "./gallery.module.css"

export default function GalleryCard({
  data: { id, title, tech, language, cover, content, website },
}) {
  return (
    <Col key={id} className="button-effect">
      <Card className={styles.card}>
        <figure>
          <a href={website} target="_blank" rel="noreferrer">
            <Card.Img src={cover} alt={title} className="rounded-0" />
          </a>
        </figure>

        <article className="card-body p-3">
          <header>
            <h2>{title}</h2>
            <p className="mb-0 pb-0 author">{language}</p>
            <p className="mt-0 pt-0 prior">
              <small>{tech}</small>
            </p>
          </header>

          <Accordion>
            <Accordion.Item eventKey={id}>
              <Accordion.Header>Get the Full Story</Accordion.Header>

              <Accordion.Body>
                <p>{content}</p>
                <ListGroup>
                  <ListGroup.Item action href={website}>
                    <Laptop color="#2ab2ae" size={27} /> Website
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </article>
      </Card>
    </Col>
  )
}
