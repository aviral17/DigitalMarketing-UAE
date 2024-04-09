"use client";

import React, { useEffect, useState } from "react";
import S1 from "../public/S1.png";
import S2 from "../public/S2.png";
import S3 from "../public/S3.png";
import S4 from "../public/S4.png";
import S5 from "../public/S5.png";
import S6 from "../public/S6.png";
import S7 from "../public/S7.png";
import S8 from "../public/S8.png";
import S9 from "../public/S9.png";
import Image from "next/image";

const images = [S1, S2, S3, S4, S5, S6, S7, S8, S9];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <div className="slideshow-container" style={{ position: "relative" }}>
      {images.map((img, imgIndex) => (
        <div
          key={imgIndex}
          className={`slide ${index === imgIndex ? "active" : ""}`}
          style={{
            display: index === imgIndex ? "block" : "none",
            // width: "100%",
            // height: "100%",
          }}
        >
          <Image
            src={img}
            alt={`Slide ${imgIndex}`}
            layout="fill"
            // width={200} // Fixed width
            // height={300} // Fixed height
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
