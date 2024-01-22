import React from "react";
import Container from "../Container/Container";
import Image from "next/image";
const   SingleBanner = ({ img }) => {
  return (
    <Container>
      <div className="flex w-full justify-between gap-5 py-1  md:py-5">
        <a
          href="#"
          rel="noopener noreferrer"
          className="cursor-pointer block rounded-l w-full overflow-hidden"
        >
          <Image
            src={img}
            alt="Slide 1"
            className="w-full object-cover object-center"
            width={1000}
            height={1000}
            loading="lazy"
          />
        </a>
      </div>
    </Container>
  );
};

export default SingleBanner;
