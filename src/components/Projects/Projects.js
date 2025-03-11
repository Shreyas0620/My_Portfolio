import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import blog from "../../Assets/Projects/blog.png";
import audio from "../../Assets/Projects/audio.png";
import movies from "../../Assets/Projects/movies.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong style={{color: '#4682B4'}}>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audio}
              isBlog={false}
              title="E-Commerce "
              description="The E-Commerce Site for Audio Devices is a specialized platform tailored for audio enthusiasts. By leveraging React and other modern web technologies, the project aims to deliver a high-quality shopping experience, robust functionality, and a secure environment for purchasing audio products."
              ghLink="#"
              demoLink="#"              
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Management "
              description="The Blog Management Site is a comprehensive platform tailored for bloggers and readers. By utilizing technologies like Java, Servlets, JSP, and MySQL, the project aims to deliver a high-quality user experience, robust functionality, and a vibrant community for content creators."
              ghLink="#"
              demoLink="#"              
              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movies Rating & Review"
              description="The Movie Ratings and Reviews Website is a comprehensive platform for movie lovers. By combining technologies like React, Node.js, Express, Firebase, and MongoDB, it aims to deliver a high-quality user experience, robust functionality, and a vibrant community for movie enthusiasts."
              ghLink="#"
              demoLink="#"              
            />
          </Col>

           

         

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
