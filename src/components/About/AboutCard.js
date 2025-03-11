import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span style={{color: '#4682B4'}}>Shreyash Pawar </span>
            from <span  style={{color: '#4682B4'}}> Pune , India.</span>
            <br /> I'm a web developer weaving code into digital experiences, fueled by a fascination with  cloud innovations. Passionate about embracing tomorrow's tech trends, I dive deep to sculpt tomorrow's digital landscapes with flair and functionality! 
            <br />
            I am currently pursuing my MCA at Pune University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking & Travelling
            </li>
          </ul>

          <p style={{color: "rgba(173, 216, 230, 0.9)" }}>
            "Believe, persist, achieve"{" "}
          </p>
          <footer className="blockquote-footer">Shreyash..</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
