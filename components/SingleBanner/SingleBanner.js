import React from "react";
import Container from "../Container/Container";
const SingleBanner = ({ img }) => {
  return (
    <Container>
      <div className="flex w-full justify-between gap-5 py-5">
        <a
          href="#"
          rel="noopener noreferrer"
          className="cursor-pointer block rounded-l w-full overflow-hidden"
        >
          <img
            src={img}
            alt="Slide 1"
            className="w-full object-cover object-center"
          />
        </a>
      </div>
    </Container>
  );
};

export default SingleBanner;
