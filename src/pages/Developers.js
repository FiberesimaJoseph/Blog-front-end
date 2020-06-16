import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container } from "react-bootstrap";

const devs = [
  {
    name: "Joseph Fiberesima",
    github: "https://github.com/FiberesimaJoseph",
    twitter: "https://twitter.com/JosephFiberesi1",
    linkedin: "https://www.linkedin.com/in/joseph-fiberesima-607777193/",
    gmail: "josephfiberesima@gmail.com",
    image:  "https://avatars1.githubusercontent.com/u/52601802?s=400&u=e75b956f9dcc7b9333132f81d53196396cbfe162&v=4",
  },
  {
    name: "Tekena Solomon",
    github: "https://github.com/Tekipeps",
    twitter: "https://twitter.com/tekipeps",
    linkedin: "https://www.linkedin.com/in/tekena-solomon-49668519b/",
    gmail: "tekena157@gmail.com",
    image: "https://avatars1.githubusercontent.com/u/45674928?s=400&u=d6d145e9d73ad380868bcbb5822c1593ea43662a&v=4",
  },
];

const Developers = () => {
  return (
    <Jumbotron fluid>
      <Container className="developers">
        <h1>About the Developers</h1>
          {devs.map((dev, i) => {
            return (
              <div key={i} className="developer-detail">
                <img src={dev.image} alt=""></img>
                <span>{dev.name}</span>
                <div>
                  Github:
                  <Link to={dev.github}>{dev.github}</Link>
                </div>
                <div> 
                  Twitter:
                  <Link to={dev.twitter}>{dev.twitter}</Link>
                </div>
                <div>
                  Linkedin:
                  <Link to={dev.linkedin}>{dev.linkedin}</Link>
                  </div>
                  <div>
                      Gmail:
                      <Link to={dev.gmail}>{dev.gmail}</Link>
                    </div>
              </div>
            );
          })}
      </Container>
    </Jumbotron>
  );
};

export default Developers;
