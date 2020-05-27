import React from "react";
import Slider from "react-slick";

const sliderContents = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png",
  },
];
const Carousel = () => {
  const settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {sliderContents.map((item, i) => (
          <div key={i}>
            <button>Travel</button>
            <h2>{item.title}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
