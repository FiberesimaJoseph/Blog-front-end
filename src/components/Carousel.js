import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", setWidth(window.innerWidth));
  }, [width]);
  const sliderContents = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: `https://picsum.photos/${width}/300`,
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: `https://picsum.photos/${width}/300`,
    },
  ];
  return (
    <Carousel>
      {sliderContents.map((item, i) => {
        return (
          <Carousel.Item key={i}>
            <img src={item.image} alt={item.title} width={width} />
            <Carousel.Caption>
              <button className="px-3">{item.button}</button>
              <h3 className="item-title">lorem ispum</h3>
              <p className="item-description">{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
