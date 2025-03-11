import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiExpress ,
  SiTailwindcss,
  SiMongodb
} from "react-icons/si";
import { FaHtml5 , FaCss3Alt, FaBootstrap ,FaAws ,FaGitAlt   } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <GrMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaGitAlt />
      </Col>
    </Row>
  );
}

export default Techstack;
