"use client";
import React from "react";

const Hero = () => {
  // Define an array of buttons for better maintainability
  const buttons = [
    {
      label: "Explore Components",
      href: "#components",
      styles: "bg-[#9117E1] text-white hover:bg-[#7e0ecb]",
    },
    {
      label: "Read Documentation",
      href: "#docs",
      styles: "border-2 border-[#9117E1] text-[#9117E1] dark:text-[#7e0ecb] hover:bg-[#9117E1] hover:text-white dark:hover:text-white",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark transition-colors duration-300 px-6">
      <div className="text-center">
        {/* Hero Heading */}
        <h1 className="text-6xl md:text-8xl font-parkinsans font-bold">
          Welcome to{" "}
          <span className="text-[#9117E1]">Res<span className="text-[#6D28D9]">ui</span>fy</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-4 text-xl md:text-2xl font-parkinsans">
          A collection of reusable, responsive UI components <br /> to speed up your development workflow.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`px-6 py-3 rounded-lg font-parkinsans text-lg shadow-md transition-all ${button.styles}`}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
