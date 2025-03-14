import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiEclipseide ,
  SiGooglecolab ,
  SiAmazons3 
} from "react-icons/si";

import { FaWindows,FaGithub,FaMailchimp   } from "react-icons/fa";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiEclipseide />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAmazons3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaMailchimp />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
