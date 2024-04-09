import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import Link from "next/link";

export default function NavbarMenu({ onServicesClick }: any) {
  return (
    <Navbar
      shouldHideOnScroll={true}
      className="flex w-full justify-between items-center h-32"
      isBlurred={true}
      style={{
        backdropFilter: "blur(10px)", // Apply a blur effect to the backdrop
        backgroundColor: "rgba(15, 3, 3, 0.25)", // Use an RGBA color for a semi-transparent background
      }}
    >
      <NavbarBrand className="ml-20 -mt-3">
        <AcmeLogo />
        {/* <p className="font-bold text-inherit">ACME</p> */}
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-7 mr-10 text-2xl text-white"
        justify="center"
      >
        <NavbarItem className="hover:text-[#994040]">
          <Link color="foreground" href="#">
            HOME
          </Link>
        </NavbarItem>
        <NavbarItem isActive className="hover:text-[#994040]">
          <div className="cursor-pointer" onClick={onServicesClick}>
            SERVICES
          </div>
        </NavbarItem>
        <NavbarItem className="hover:text-[#994040]">
          <Link color="foreground" href="/clients">
            CLIENTS
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-[#994040]">
          <Link color="foreground" href="/about">
            ABOUT US
          </Link>
        </NavbarItem>
        <NavbarItem className="hover:text-[#994040]">
          <Link color="foreground" href="/contact">
            CONTACT
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
