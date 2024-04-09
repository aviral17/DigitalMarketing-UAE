"use client";

import React from "react";
import NavbarMenu from "../navbar/page";
import Content from "@/components/Content";

const Home = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <NavbarMenu onServicesClick={scrollToServices} />
        <video
          src="/web_video.mp4"
          autoPlay
          muted
          loop
          style={{
            position: "absolute",
            width: "100%",
            zIndex: -1,
            top: 0,
            height: "150vh", // Set the height to be full viewport height
            objectFit: "cover",
            backgroundColor: "black",
          }}
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={{ position: "relative", zIndex: 2, marginTop: "84vh" }}>
        <Content />
      </div>
    </>
  );
};

export default Home;
