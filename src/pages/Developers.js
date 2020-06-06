import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container } from "react-bootstrap";

const devs = [
  {
    name: "Joseph Fiberesima",
    github: "https://github.com/FiberesimaJoseph",
    image:
      "https://avatars1.githubusercontent.com/u/52601802?s=400&u=e75b956f9dcc7b9333132f81d53196396cbfe162&v=4",
  },
  {
    name: "Tekena Solomon",
    github: "https://github.com/Tekipeps",
    image:
      "https://avatars1.githubusercontent.com/u/45674928?s=400&u=d6d145e9d73ad380868bcbb5822c1593ea43662a&v=4",
  },
];

const Developers = () => {
  return (
    <Jumbotron fluid>
      <Container className="developers">
        <h1>Developers</h1>
        <div>
          {devs.map((dev, i) => {
            return (
              <div key={i} className="developer-detail">
                <img src={dev.image} alt=""></img>
                <span>{dev.name}</span>
                <div>
                  Github
                  <Link to={dev.github}>{dev.github}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Developers;
