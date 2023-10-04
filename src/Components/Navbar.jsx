import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="sticky top-0 right-0 left-0 z-50 shadow-md shadow-slate-950 bg-[#1A0B2E] text-[#fff]  ">
      <div className="sm:py-3 sm:px-24 px-8 py-4 flex justify-between items-center">
        <h1 className="sm:flex-none flex-1 text-center">Logo</h1>
        <div className="sm:flex hidden flex-1  justify-end items-center gap-x-12 text-lg">
          <a href="#">Intro</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </div>
        <RxHamburgerMenu
          className="inline-block sm:hidden"
          onClick={() => setOpenMenu(true)}
        />
      </div>
      {openMenu && (
        <div className="fixed z-30 top-0 h-full w-full bg-[#1A0B2E] text-[#fff] flex flex-col justify-around text-xl items-center">
          <AiOutlineClose
            className="text-3xl absolute right-4 top-3"
            onClick={() => setOpenMenu(false)}
          />
          <a key="nv1" href="#" onClick={() => setOpenMenu(false)}>
            Intro
          </a>
          <a key="nv2" href="#" onClick={() => setOpenMenu(false)}>
            Portfolio
          </a>
          <a key="nv3" href="#" onClick={() => setOpenMenu(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
