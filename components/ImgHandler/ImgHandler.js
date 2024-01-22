"use client";
import React, { useState } from "react";
const ImgHandler = ({ item }) => {
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => {
    setImageLoadError(true);
  };

  return (
    <div>
      {imageLoadError ? (
        <img
          src={
            "https://assets-global.website-files.com/64949e4863d96e26a1da8386/64b94c7e02162f5cc666b317_633604c562868a10ab4c7163_uMk2yhmH04IjjAHWzOeM_tATsEn6kaJHIXikeFABZPv7G2VpYt7NdACThY1yQcBUw7KQWXpOiDBqumo3FVIKMpqBNPWO_U-5gGreQMZ23EFrqbhAXMRWtPU-zY7XdyZ0HfsgQV7FcafaziA6lddfUYoOERc3k2_UJ9M90FcOpdC_iIDDZfAZqzWDmg.png"
          }
          alt={"error"}
          className="cursor-pointer rounded-xl mx-auto mb-2 w-full h-75 object-cover object-center"
          style={{ width: "88px", height: "88px" }}
        />
      ) : (
        <img
          src={item.image}
          alt={item.name}
          className="cursor-pointer rounded-xl mx-auto mb-2 w-full h-75 object-cover object-center"
          style={{ width: "88px", height: "88px" }}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default ImgHandler;
