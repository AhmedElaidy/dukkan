"use client";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Container from "../Container/Container";
import { useMedia } from "react-use";
import Loader from "../Loader/Loader";
import Image from "next/image";

const HeroCarousel = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const slides = [
    "https://i.ibb.co/j8F67gn/Ia-L1j8-Kc-Wc8-Yd9-Mf0e-Bv-EMju0le1-Z7-Dx6-UO0m3-PH.jpg",
    "https://i.ibb.co/ZMm7KDx/o-YWIfw-Hz-UDuin1ndg3c-Uw-Hb-Fb-PNy-UH1n5-E3og-Yq-F.webp",
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

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  if (!isPageLoaded) {
    // If the page is still loading, you can render a loading spinner or placeholder
    return <Loader />;
  } else {
    return (
      <Container>
        <AliceCarousel {...aliceCarouselOptions}>
          {slides.map((slide, index) => (
            <div
              key={index}
              onClick={() => handleSlideClick(index)}
              className="max-h-80"
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                className="cursor-pointer rounded-xl w-full"
                style={{ width: "100%", height: "100%", maxHeight: "400px" }}
                width={1000}
                height={1000}
                priority
              />
            </div>
          ))}
        </AliceCarousel>
      </Container>
    );
  }
};

export default HeroCarousel;
