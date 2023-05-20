import { Container, Row, Col } from "../../utilis/Bootstrap.js";
import { Github } from 'react-bootstrap-icons';

export default function Footer() {
    const repoUrl = "https://github.com/thegoumble";

    return (
      <footer>
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center text-center">
            <Col md={6}>
              <a href={repoUrl} target="_blank" rel="noreferrer" >
                  <Github color="#ffff" size={27} />
                  <p><small>See Code in Github</small></p>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}
