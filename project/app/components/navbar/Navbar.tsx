import React from "react";
import ThemeToggle from "../toggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex flex-col w-full items-center gap-12">
      <h1 className="font-parkinsans text-5xl font-medium ">
        Res<span className="text-[#9117E1]">ui</span>fy
      </h1>
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
