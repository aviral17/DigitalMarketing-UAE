// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Button,
// } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo";
// import Link from "next/link";

// export default function NavbarMenu({ onServicesClick }: any) {
//   return (
//     <Navbar
//       shouldHideOnScroll={true}
//       className="flex w-full justify-between items-center h-32"
//       isBlurred={true}
//       style={{
//         backdropFilter: "blur(10px)", // Apply a blur effect to the backdrop
//         backgroundColor: "rgba(15, 3, 3, 0.25)", // Use an RGBA color for a semi-transparent background
//       }}
//     >
//       <NavbarBrand className="lg:ml-20 -mt-3 ml-5">
//         <AcmeLogo />
//         {/* <p className="font-bold text-inherit">ACME</p> */}
//       </NavbarBrand>
//       <NavbarContent
//         className="hidden md:flex ml-5 gap-7 mr-10 text-2xl text-white"
//         justify="center"
//       >
//         <NavbarItem className="hover:text-[#994040]">
//           <Link color="foreground" href="#">
//             HOME
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive className="hover:text-[#994040]">
//           <div className="cursor-pointer" onClick={onServicesClick}>
//             SERVICES
//           </div>
//         </NavbarItem>
//         <NavbarItem className="hover:text-[#994040]">
//           <Link color="foreground" href="/clients">
//             CLIENTS
//           </Link>
//         </NavbarItem>
//         <NavbarItem className="hover:text-[#994040]">
//           <Link color="foreground" href="/about">
//             ABOUT
//           </Link>
//         </NavbarItem>
//         <NavbarItem className="hover:text-[#994040]">
//           <Link color="foreground" href="/contact">
//             CONTACT
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function NavbarMenu({ onServicesClick }) {
  const [visible, setVisible] = useState(false);

  const handleOpen = () => setVisible(true);
  const handleClose = () => setVisible(false);

  return (
    <>
      <Navbar
        shouldHideOnScroll={true}
        className="flex w-full justify-between items-center h-32"
        isBlurred={true}
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(15, 3, 3, 0.25)",
        }}
      >
        <NavbarBrand className="lg:ml-20 -mt-3 ml-5">
          <AcmeLogo />
        </NavbarBrand>
        <NavbarContent
          className="hidden md:flex ml-5 gap-7 mr-10 text-2xl text-white"
          justify="center"
        >
          {/* Desktop Menu Items */}
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
              ABOUT
            </Link>
          </NavbarItem>
          <NavbarItem className="hover:text-[#994040]">
            <Link color="foreground" href="/contact">
              CONTACT
            </Link>
          </NavbarItem>
        </NavbarContent>
        <div className="md:hidden flex items-center mr-5">
          <Button auto flat onClick={handleOpen}>
            <span className="material-icons">menu</span>
          </Button>
        </div>
      </Navbar>
      <Sheet isOpen={visible} onClose={handleClose}>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          {/* Mobile Menu Items */}
          <NavbarContent direction="column" className="items-start p-4">
            <NavbarItem className="hover:text-[#994040]">
              <Link color="foreground" href="#" onClick={handleClose}>
                HOME
              </Link>
            </NavbarItem>
            <NavbarItem className="hover:text-[#994040]">
              <div
                className="cursor-pointer"
                onClick={() => {
                  onServicesClick();
                  handleClose();
                }}
              >
                SERVICES
              </div>
            </NavbarItem>
            <NavbarItem className="hover:text-[#994040]">
              <Link color="foreground" href="/clients" onClick={handleClose}>
                CLIENTS
              </Link>
            </NavbarItem>
            <NavbarItem className="hover:text-[#994040]">
              <Link color="foreground" href="/about" onClick={handleClose}>
                ABOUT
              </Link>
            </NavbarItem>
            <NavbarItem className="hover:text-[#994040]">
              <Link color="foreground" href="/contact" onClick={handleClose}>
                CONTACT
              </Link>
            </NavbarItem>
          </NavbarContent>
        </SheetContent>
      </Sheet>
    </>
  );
}
