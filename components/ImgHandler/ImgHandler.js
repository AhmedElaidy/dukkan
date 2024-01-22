"use client";
import React, { useState } from "react";
const ImgHandler = ({ item, styles, failImage }) => {
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => {
    console.log("img fail link is ", item.image);
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
    <div style={{alignItems:"center"}} className="flex justify-center"> 
      {imageLoadError ? (
        <img
          src={failImage}
          alt={"error"}
          className="cursor-pointer rounded-xl mx-auto mb-2 w-full h-75 object-cover object-center"
          style={styles}
        />
      ) : (
        <img
          src={item.image}
          alt={item.name}
          className="cursor-pointer rounded-xl mx-auto mb-2 w-full h-75 object-cover object-center"
          style={styles}
          onError={handleImageError}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
};

export default ImgHandler;
