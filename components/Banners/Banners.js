import Image from "next/image";
import React, { lazy } from "react";
import Container from "../Container/Container";

const Banners = () => {
  return (
    <Container>
      <div className=" w-full justify-between gap-5 py-5 hidden md:flex">
        <a
          href="#"
          rel="noopener noreferrer"
          className="cursor-pointer block rounded-l w-full h-80 overflow-hidden"
        >
          <Image
            src="https://dukan.s3.me-south-1.amazonaws.com/assets/images/sliders/d9c2MoFDFTZFz3lkrHNI39nIPs2OE6LpDfLn281W.webp"
            alt="Slide 1"
            className="w-full h-full object-cover object-center"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </a>
        <a
          href="#"
          rel="noopener noreferrer"
          className="cursor-pointer block rounded-l w-full h-80 overflow-hidden"
        >
          <Image
            src="https://dukan.s3.me-south-1.amazonaws.com/assets/images/sliders/ZR7mMglOsYFPIyRWD8VFUioD3uSxzzd9qdLbNNdT.webp"
            alt="Slide 2"
            className="w-full h-full object-cover object-center"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </a>
      </div>
    </Container>
  );
};

export default Banners;
