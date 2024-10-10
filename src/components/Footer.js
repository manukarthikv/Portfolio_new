import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-copywright">
          {/* You can add any footer content here if needed */}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
