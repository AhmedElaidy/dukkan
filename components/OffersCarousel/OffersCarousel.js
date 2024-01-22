"use client";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Container from "../Container/Container";
import { useMedia } from "react-use";
import Loader from "../Loader/Loader";
import Image from "next/image";

const OffersCarousel = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const slides = [
    "https://i.ibb.co/GkqMNz8/add-1.png",
    "https://i.ibb.co/jvrv35n/add.png",
  ];

  const handleSlideClick = (index) => {
    window.location.href = `#`;
  };

  const isSmallScreen = useMedia("(max-width: 769px)");

  const aliceCarouselOptions = {
    mouseTracking: true,
    disableDotsControls: true,
    disableButtonsControls: isSmallScreen,
    autoPlay: true,
    autoPlayInterval: 5000,
    infinite: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1024: { items: 3 },
    },
  };
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  if (!isPageLoaded) {
    // If the page is still loading, you can render a loading spinner or placeholder
    return <Loader/>;
  } else {
    return (
      <Container
        styles={{
          flexDirection: "column",
          gap: "10px",
          paddingTop: " 1.25rem",
          paddingBottom: "1.25rem",
        }}
      >
        <h2 className="font-bold text-2xl">This Week Offers</h2>
        <AliceCarousel {...aliceCarouselOptions}>
          {slides.map((slide, index) => (
            <div
              className="mx-2"
              key={index}
              onClick={() => handleSlideClick(index)}
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                className="cursor-pointer w-full max-h-96 object-cover object-center"
                width={1000}
                height={1000}
                loading="lazy"
              />
            </div>
          ))}
        </AliceCarousel>
      </Container>
    );
  }
};

export default OffersCarousel;
