import Image from "next/image";
import React from "react";
import Slideshow from "./SlideShow";
import { Form } from "./Form";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Footer from "./Footer";
import Link from "next/link";

const Content = () => {
  return (
    <div className="dark_mode min-h-screen flex flex-col justify-center items-start">
      <div className="ml-40">
        <h2 className="text-3xl mt-40">CREATIVE MIND, CREATIVE WORKS.</h2>
        <h1 className="text-7xl mt-10">
          We Design beautiful <span className="text-[#13b597]">digital</span>{" "}
          <br />
          <span className="text-[#13b597]">products</span>,{" "}
          <span className="text-[#13b597]">brands</span> and{" "}
          <span className="text-[#13b597]">experiences</span>.
        </h1>
        <div className="group text-2xl mt-14 ml-3">
          <button className="">Get Started</button>
          <span className="cursor-pointer ml-3 inline-block transition-transform group-hover:translate-x-2 motion-reduce:transform-none text-black text-center font-bold bg-white rounded-[50%] w-8">
            -&gt;
          </span>
        </div>
        <h1 className="text-7xl ml-10 mt-48">
          ON YOUR MARKS. GET SET. <span className="text-[#13b597]">GROW</span>.
        </h1>

        <div className="flex justify-center items-center mt-24">
          <Image
            src="/meta_gif.gif"
            width={1000}
            height={1000}
            alt="GIF"
            style={{ width: "70vw" }}
          />
        </div>
        <div className="text-4xl flex flex-row justify-center items-center gap-40 mb-32">
          <h1>Strategise</h1>
          <h1>Execute</h1>
          <h1>Grow</h1>
        </div>
        <div
          id="services-section"
          className="flex justify-center items-center text-7xl mb-28"
        >
          OUR SERVICES
        </div>
        <div className="grid grid-cols-3 gap-10 justify-center items-center align-middle w-full mt-10 ml-12">
          <div className="flex flex-col gap-5 mb-20">
            <div className="flex flex-col justify-center items-center">
              <Image src="/G5.png" width={150} height={150} alt="image" />
              <h1 className="text-3xl mt-10 text-[#13b597]">
                Digital Strategy
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-5 mb-20">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/G6.png"
                width={150}
                height={150}
                alt="image"
                className="mb-20"
              />
              <h1 className="text-3xl mt-4 text-[#13b597]">
                Performance Marketing
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-5 mb-20">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/G4.png"
                width={150}
                height={150}
                alt="image"
                className="mb-20"
              />
              <h1 className="text-3xl mt-4 text-[#13b597]">Digital Design</h1>
            </div>
          </div>

          <div className="flex flex-col gap-5 mb-20">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/G3.png"
                width={150}
                height={150}
                alt="image"
                className="mb-12"
              />
              <h1 className="text-3xl text-[#13b597]">Digital Strategy</h1>
            </div>
          </div>

          <div className="flex flex-col gap-5 mb-20">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/G2.png"
                width={150}
                height={150}
                alt="image"
                className="mb-20"
              />
              <h1 className="text-3xl mt-4 text-[#13b597]">Web Development</h1>
            </div>
          </div>

          <div className="flex flex-col gap-5 mb-20">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/G1.png"
                width={150}
                height={150}
                alt="image"
                className="mb-12"
              />
              <h1 className="text-3xl text-[#13b597]">Influencer Marketing</h1>
            </div>
          </div>
        </div>

        <h1 className="text-6xl text-center ml-24 mb-60">OUR CLIENTS</h1>
        <h1 className="text-7xl text-center ml-24 mb-40">
          LET'S DIVE <span className="text-[#13b597]">DEEPER</span>.
        </h1>
        <div className="flex justify-center sm:justify-around">
          <div className="">
            <div className="text-5xl font-light mb-24 p-10 leading-[65px]">
              <h1>Mister Baker</h1>
              <h1>Warehouse Gym</h1>
              <h1>Cuppin's</h1>
              <h1>Carat Finder</h1>
              <h1>Project Ghar</h1>
              <h1>Krocus</h1>
              <h1>Calibre 88</h1>
              <h1>Pet Bae</h1>
              <h1>Xische & Co.</h1>
              <h1>Motorworks</h1>
              <h1></h1>
            </div>
          </div>
          <div className="mt-20">
            <Slideshow />
          </div>
        </div>
        <div className="flex">
          <div className="">
            <Image src="/V1.png" width={400} height={50} alt="vector" />
          </div>
          <Form />
          <div className="">
            <Image src="/V2.png" width={400} height={50} alt="vector" />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-10 mb-24">
          <div className="bg-white rounded-full w-16 h-16 text-black cursor-pointer hover:text-white hover:bg-black transition-all ease-in-out duration-300 delay-75">
            <Link
              href={
                "https://www.linkedin.com/company/meta-social-ae/posts/?feedView=all"
              }
            >
              {" "}
              <FaLinkedin className="w-[70%]  h-[70%] m-auto align-middle mt-3" />{" "}
            </Link>
          </div>
          <div className="bg-white rounded-full w-16 h-16 text-black cursor-pointer hover:text-white hover:bg-black transition-all ease-in-out duration-300 delay-75">
            <FaInstagram className="w-[70%]  h-[70%] m-auto align-middle mt-3" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Content;
