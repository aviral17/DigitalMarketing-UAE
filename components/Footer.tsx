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
      <div className="w-full">
        <div className="flex flex-col md:flex-row md:justify-between gap-28 md:gap-14 lg:gap-24 md:items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl">SERVICES</h1>
            <div className="cursor-pointer leading-loose text-xl">
              <p>○ Website Development</p>
              <p>○ Digital Strategy</p>
              <p>○ Social Media</p>
              <p>○ Branding/Awareness</p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl">QUICK LINKS</h1>
            <div className="cursor-pointer leading-loose ml-2 text-xl">
              <p className="">○ Home</p>
              <p>○ About Us</p>
              <p>○ Services</p>
              <p>○ Work</p>
              {/* <p>Contact Us</p>
            <p>Privacy Policy</p> */}
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl">CONTACT</h1>
            <div className="cursor-pointer leading-loose text-xl">
              <p>○ HD-21 In5 Media, Dubai</p>
              <p>○ +971 52 278 2047</p>
              <p>○ +999 52 999 9999</p>
              <p>○ info@metasocial.ae</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
