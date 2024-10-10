import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manu Karthik</span>
            from <span className="purple">Bengaluru, Karnataka.</span>
            <br />
            I am a recent Computer Science graduate from the Global Academy of Technology, Bengaluru, with hands-on experience in web development and machine learning.
            <br />
            I'm currently focused on building my technical skills and solving IT challenges.
            <br />
            <br />
            During my internship at Technofly Solutions as a Machine Learning Intern, I researched image processing algorithms and worked on a speech recognition project. I also gained web development experience as an intern at TechCiti Software Consulting, where I enhanced features for the MERN Estate Website and improved user engagement through data-driven solutions.
            <br />
            <br />
            I am skilled in Python, SQL, Java, React, MongoDB, and Firebase, with a passion for creating real-world impactful solutions. Recently, I’ve been working on projects like knee osteoarthritis detection using deep learning and a university management system to automate administrative tasks.
            <br />
            <br />
            Outside of work, I serve as the Vice President of Education at the Nagarabhavi Toastmasters Club, where I organize meetings and have won multiple public speaking contests.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manu Karthik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
