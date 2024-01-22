import React from "react";
const Container = ({children,styles}) => {
  return (
    <section
      className={`xl:px-20 lg:px-12 px-5 flex justify-between mx-auto max-w-screen-2xl items-center my-2`}
      style={styles}
    >
      {children}
    </section>
  );
};

export default Container;
