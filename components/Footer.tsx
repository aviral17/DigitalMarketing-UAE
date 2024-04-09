import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mb-32">
      <div className="mb-48">
        <Image
          width="258"
          height="101"
          src="https://metasocial.ae/wp-content/uploads/2022/11/Group-109.svg"
          className="attachment-large size-large hover:scale-125 transition-all ease-in-out duration-300 delay-100"
          alt=""
        />
      </div>
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-col">
          <h1 className="mb-5 text-4xl">SERVICES</h1>
          <div className="cursor-pointer leading-loose text-2xl">
            <p>Website Development</p>
            <p>Digital Strategy</p>
            <p>Social Media</p>
            <p>Branding/Awareness</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-10 text-4xl">QUICK LINKS</h1>
          <div className="cursor-pointer leading-loose ml-2 text-2xl">
            <p className="-mt-5">Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Work</p>
            {/* <p>Contact Us</p>
            <p>Privacy Policy</p> */}
          </div>
        </div>
        <div className="flex flex-col mb-16">
          <h1 className="mb-5 text-4xl">CONTACT</h1>
          <div className="cursor-pointer leading-loose text-2xl">
            <p>HD-21 In5 Media, Dubai</p>
            <p>+971 52 278 2047</p>
            <p>info@metasocial.ae</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
