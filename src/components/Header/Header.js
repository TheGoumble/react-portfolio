import { Container, Row, Col, Navbar, Nav } from "../../utilis/Bootstrap.js"

export default function Header() {
  return (
    <header>
      <Container className="mb-4">
        <Row className="text-center">
          <Col>
            <h1>Javier Andres Vargas</h1>
            <p>Full Stack Engineer & Game Developer</p>
            <p >
              As a full-stack developer, I am passionate about contributing to
              the digital world through my expertise in coding. Whether it's a
              fun little project or a comprehensive full-stack application, I
              enjoy starting from scratch and building something innovative and
              functional. With a keen eye for detail and a strong foundation in
              coding languages, I am confident in my ability to create impactful
              solutions that meet the needs of clients and users alike.
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  )
}
