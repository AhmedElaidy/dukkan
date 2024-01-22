"use client";
import React, { useEffect, useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import Container from "../Container/Container";
import "react-alice-carousel/lib/alice-carousel.css";
import Loader from "../Loader/Loader";
import { decode } from "@/_utils/HelperFunctions";
import ImgHandler from "../ImgHandler/ImgHandler";

const CatalogCarousel = ({ data }) => {
  decode(data, "image");
  const carouselRef = useRef();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const aliceCarouselOptions = {
    mouseTracking: true,
    responsive: {
      0: { items: 3 },
      600: { items: 6 },
      1024: { items: 9 }, // Show 4 items on larger screens
    },
    disableButtonsControls: true, // Disable dots and arrows
    disableDotsControls: true,
    autoPlay: true,
    autoPlayInterval: 6000,
    infinite: true,
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const arrowStyles = {
    position: "absolute",
    top: "35%",
    transform: "translateY(-50%)",
    width: "30px", // Adjust the width of arrows as needed
    height: "30px", // Adjust the height of arrows as needed
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Set the background color of arrows
    borderRadius: "50%", // Make the arrows circular
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "18px", // Adjust the font size of arrows as needed
  };
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  if (!isPageLoaded) {
    // If the page is still loading, you can render a loading spinner or placeholder
    return <Loader />;
  } else {
    return (
      <Container styles={{ position: "relative" }}>
        <AliceCarousel {...aliceCarouselOptions} ref={carouselRef}>
          {data.map((item, index) => (
            <div
              key={index}
              className="text-center"
              style={{ flexShrink: 0 }} // Adjust the width and prevent shrinking
            >
              <ImgHandler
                item={item}
                styles={{ width: "88px", height: "88px" }}
                failImage="https://assets-global.website-files.com/64949e4863d96e26a1da8386/64b94c7e02162f5cc666b317_633604c562868a10ab4c7163_uMk2yhmH04IjjAHWzOeM_tATsEn6kaJHIXikeFABZPv7G2VpYt7NdACThY1yQcBUw7KQWXpOiDBqumo3FVIKMpqBNPWO_U-5gGreQMZ23EFrqbhAXMRWtPU-zY7XdyZ0HfsgQV7FcafaziA6lddfUYoOERc3k2_UJ9M90FcOpdC_iIDDZfAZqzWDmg.png"
              />

              <p className="text-sm">{item.name}</p>
            </div>
          ))}
        </AliceCarousel>
        <div
          style={{ ...arrowStyles, left: "20px", transform: "rotate(180deg)" }}
          className="hidden md:flex"
          onClick={handlePrevClick}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1333 29.2666L8.2666 27.3666L19.6999 15.9333L8.2666 4.49998L10.1333 2.59998L23.4666 15.9333L10.1333 29.2666Z"
              fill="#00A9A2"
            />
          </svg>
        </div>
        <div
          style={{ ...arrowStyles, right: "20px" }}
          className="hidden md:flex"
          onClick={handleNextClick}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1333 29.2666L8.2666 27.3666L19.6999 15.9333L8.2666 4.49998L10.1333 2.59998L23.4666 15.9333L10.1333 29.2666Z"
              fill="#00A9A2"
            />
          </svg>
        </div>
      </Container>
    );
  }
};

export default CatalogCarousel;
