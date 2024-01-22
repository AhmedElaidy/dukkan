import React, { useState } from "react";

const DescriptionComponent = ({ desc: description }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedDescription = isTruncated
    ? description.slice(0, 50) + "..."
    : description;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: truncatedDescription }} />
      {description.length > 50 && (
        <button onClick={toggleTruncate}>
          {isTruncated ? "Show more" : "Show less"}
        </button>
      )}
    </div>
  );
};

export default DescriptionComponent;
