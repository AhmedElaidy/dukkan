"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "../Container/Container";
import ProductTemplate from "../ProductTemplate/ProductTemplate";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Loader from "../Loader/Loader";
import { decode } from "@/_utils/HelperFunctions";

const ProductsSectionTemplate = ({ sectionName, products = [] }) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  decode(products, "image");

  const carouselRef = useRef();
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

  const aliceCarouselOptions = {
    mouseTracking: true,
    responsive: {
      0: { items: 2 },
      600: { items: 2 },
      1024: { items: 4 }, // Show 4 items on larger screens
    },
    disableButtonsControls: true, // Disable dots and arrows
    disableDotsControls: true,
  };
  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  if (!isPageLoaded) {
    return <Loader />;
  } else {
    return (
      <Container>
        <div className="w-full">
          <div className="flex justify-between mx-auto w-full my-3">
            <h5 className="font-bold text-xl ">{sectionName}</h5>
            <div className="gap-5 hidden md:flex rtl:flex-row-reverse">
              <LeftIconSvg handlePrevClick={handlePrevClick} />
              <RightIconSvg handleNextClick={handleNextClick} />
            </div>
          </div>
          <div className="my-5 flex justify-between">
            <AliceCarousel {...aliceCarouselOptions} ref={carouselRef}>
              {products.map((product) => (
                <ProductTemplate key={product.id} {...product} />
              ))}
            </AliceCarousel>
          </div>
        </div>
      </Container>
    );
  }
};

const LeftIconSvg = ({handlePrevClick}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transform rotate-180 cursor-pointer"
      onClick={handlePrevClick}
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="3.25"
        stroke="#00A9A2"
        strokeWidth="1.5"
      />
      <g clipPath="url(#clip0_1_2595)">
        <path
          d="M17.1717 16L12.2217 11.05L13.6357 9.63599L19.9997 16L13.6357 22.364L12.2217 20.95L17.1717 16Z"
          fill="#00A9A2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2595">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const RightIconSvg = ({handleNextClick}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
      onClick={handleNextClick}
    >
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="3.25"
        stroke="#00A9A2"
        strokeWidth="1.5"
      />
      <g clipPath="url(#clip0_1_2595)">
        <path
          d="M17.1717 16L12.2217 11.05L13.6357 9.63599L19.9997 16L13.6357 22.364L12.2217 20.95L17.1717 16Z"
          fill="#00A9A2"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_2595">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(4 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProductsSectionTemplate;
