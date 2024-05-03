import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hongyi Tu </span>
            from <span className="purple"> Shanghai, China</span>
            <br />
            I am currently year 3 student study at King's College London(the UK).
            <br />
            I've proceeding my Bsc degree on computer science
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              🎮 Playing Games
            </li>
            <li className="about-activity">
              📚 Learn AI tech
            </li>
            <li className="about-activity">
              ✈️ Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
