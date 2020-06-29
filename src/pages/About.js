import React from "react";

import { Jumbotron, Container } from "react-bootstrap";
const About = () => {
  return (
    <Jumbotron className="about-ceo" fluid>
      <Container>
        <img src="cropped-biosoky.png" alt=""></img>
        <div>
          <h1>ABOUT THE BLOG </h1>
          <p>
            Festus west is the CEO of Biosoky Entertainment Ltd. It was
            established in the year 2012, His passion for entertainment gave
            birth to Naija got Entertainment buzz. This is a brain child of
            Biosoky Entertainment. He's a degree holder in management sciences
            from the university of PORT HARCOURT. He has a flair in
            entertainment such as Sports Music African Stories and Proverbs
            e.t.c He is happily married with thriving family.
          </p>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default About;
