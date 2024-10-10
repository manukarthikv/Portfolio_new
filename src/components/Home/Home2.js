import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm Manu Karthik! I'm a recent Computer Science graduate from 
              the Global Academy of Technology, Bengaluru, with a CGPA of 8.96. 
              I have hands-on experience in web development and machine learning.
              <br />
              <br />
              I am skilled in{" "}
              <i>
                <b className="purple">HTML, CSS, JavaScript, Java, Python</b>
              </i>{" "}
              and proficient in frameworks like{" "}
              <i>
                <b className="purple">React, Node.js, Express.js, and Next.js.</b>
              </i>
              <br />
              <br />
              My experience includes internships at Technofly Solutions as a 
              Data Science Intern and at TechCiti Software Consulting as a Web 
              Developer Intern. I’ve worked on projects like{" "}
              <b className="purple">Estate website</b>, 
              <b className="purple">Knee Osteoarthritis Detection</b>, and 
              <b className="purple">University Management System</b>.
              <br />
              <br />
              I am passionate about solving IT challenges and developing impactful 
              real-world solutions, especially in the fields of{" "}
              <i>
                <b className="purple">Web Technologies</b>
              </i>{" "}
              and{" "}
              <b className="purple">Machine Learning</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/manukarthikv"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/your-twitter-handle"  // Add your Twitter handle
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/manukarthikv/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/your-instagram-handle" // Add your Instagram handle
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
