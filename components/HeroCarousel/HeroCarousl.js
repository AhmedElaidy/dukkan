"use client";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Container from "../Container/Container";
import { useMedia } from "react-use";
import Loader from "../Loader/Loader";

const HeroCarousel = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const slides = [
    "https://dukan.s3.me-south-1.amazonaws.com/assets/images/sliders/aYjcAYlfxjT6sgJdVwBe2uaSDsbxiNkjatVOsREA.webp",
    "https://dukan.s3.me-south-1.amazonaws.com/assets/images/sliders/s8aFVCa8xYxDWI6Jz9jTS2Y0gBuqGmmv7659x1GE.webp",
  ];
  const isSmallScreen = useMedia("(max-width: 769px)");

  const handleSlideClick = (index) => {
    window.location.href = `#`;
  };

  const aliceCarouselOptions = {
    mouseTracking: true,
    disableButtonsControls: true,
    autoPlay: true,
    autoPlayInterval: 5000,
    infinite: true,
    disableDotsControls: isSmallScreen,
  };

  const imgStyle = {
    maxHeight: "400px",
  };
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  if (!isPageLoaded) {
    // If the page is still loading, you can render a loading spinner or placeholder
    return <Loader/>;
  } else {
    return (
      <Container>
        <AliceCarousel {...aliceCarouselOptions}>
          {slides.map((slide, index) => (
            <div key={index} onClick={() => handleSlideClick(index)}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="cursor-pointer rounded-xl w-full"
                style={imgStyle}
              />
            </div>
          ))}
        </AliceCarousel>
      </Container>
    );
  }
};

export default HeroCarousel;
