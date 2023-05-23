import { Container, Row, Col } from "../../utilis/Bootstrap.js";
import { Github } from 'react-bootstrap-icons';

export default function Footer() {
    const repoUrl = "https://github.com/TheGoumble/react-portfolio";
    // <Github color="#ffff" size={27} />  
    return (
      <footer>
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center text-center">
            <Col md={6}>
              here
            </Col>
          </Row>
        </Container>
      </footer>
    )
}
