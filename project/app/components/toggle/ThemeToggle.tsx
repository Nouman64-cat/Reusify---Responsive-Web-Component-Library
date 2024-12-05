"use client";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggles the dark mode class and saves preference in localStorage
  const toggleTheme = (enabled: boolean) => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setIsDarkMode(enabled);
  };

  // Initialize theme on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <div className="flex gap-5 items-center ">
      <span className="font-parkinsans text-lg font-medium ">
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </span>
      <Switch
        checked={isDarkMode}
        onChange={toggleTheme}
        className={`${
          isDarkMode ? "bg-[#9117E1]" : "bg-gray-300"
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
      >
        <span
          className={`${
            isDarkMode ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
        />
      </Switch>
    </div>
  );
};

export default ThemeToggle;
