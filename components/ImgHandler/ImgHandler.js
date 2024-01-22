"use client";
import Image from "next/image";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
const ImgHandler = ({ item, styles, failImage }) => {
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => {
    setImageLoadError(true);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  styles = {
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.4s ease-in-out",
    ...styles, // Add a smooth transition for the scaling effect
  };

  return (
    <div style={{ alignItems: "center" }} className="flex justify-center">
      {imageLoadError ? (
        <Image
          src={failImage}
          alt={"error"}
          className="cursor-pointer rounded-xl mx-auto mb-2 w-full h-75 object-cover object-center"
          style={styles}
          width={250}
          height={1}
        />
      ) : (
        <Image
          src={item.image}
          alt={item.name}
          className="cursor-pointer rounded-xl mx-auto mb-2 w-full h-75 object-cover object-center"
          style={styles}
          onError={handleImageError}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          width={250}
          height={1}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ImgHandler;
