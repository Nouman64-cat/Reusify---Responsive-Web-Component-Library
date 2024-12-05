"use client";
import React, { useState } from "react";
import Button from "../library/Button";
import Card from "../library/Card";
import { Dialog } from "@headlessui/react";
import { FiX, FiCopy } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast"; // Import toast library

const Showcase = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCode, setSelectedCode] = useState("");

  const openDialog = (code: string) => {
    setSelectedCode(code);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!"); // Show success toast
  };

  // Example code snippets
  const buttonCode = `
<button className="px-4 py-2 bg-[#9117E1] text-white rounded-lg font-parkinsans text-lg transition-all hover:bg-[#7e0ecb]">
  Primary Button
</button>
`;

  const cardCode = `
<div className="rounded-lg shadow-md bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark transition-colors p-4 max-w-sm">
  <h3 className="font-parkinsans text-xl font-bold">Sample Card</h3>
  <p className="font-parkinsans text-base mt-2">This is a reusable card component.</p>
</div>
`;

  return (
    <div className="p-6 bg-background-light text-foreground-light dark:bg-background-dark dark:text-foreground-dark transition-colors">
      {/* Toast Container */}
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              fontFamily: "parkinsans",
              background: "#9117E1",
              color: "#ffffff",
            },
          },
        }}
      />

      <h1 className="font-parkinsans text-4xl mb-6">Component Showcase</h1>

      {/* Button Showcase */}
      <section className="mb-8">
        <h2 className="font-parkinsans text-2xl mb-4">Buttons</h2>
        <div className="flex gap-4">
          <Button
            label="Primary Button"
            variant="primary"
            onClick={() => openDialog(buttonCode)}
          />
        </div>
      </section>

      {/* Card Showcase */}
      <section>
        <h2 className="font-parkinsans text-2xl mb-4">Cards</h2>
        <Card
          imageUrl="https://cdn.dribbble.com/userupload/9747194/file/original-73c490ed2df285b1aecc40eccf385c74.png?resize=1200x1132&vertical=center"
          title="Company-wide KPIs"
          dashboards={4}
          charts={12}
          isPublic={true}
          onClick={() => openDialog(cardCode)} // Trigger the dialog for the card
        />
      </section>

      {/* Dialog for Code Display */}
      <Dialog
        open={isDialogOpen}
        onClose={closeDialog}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg max-w-lg w-full z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-parkinsans">Component Code</h3>
            <button
              onClick={closeDialog}
              className="text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>
          </div>
          <pre className="bg-gray-800 text-white rounded-lg p-4 overflow-x-auto">
            {selectedCode}
          </pre>
          <button
            onClick={() => copyToClipboard(selectedCode)}
            className="mt-4 px-4 py-2 bg-[#9117E1] text-white rounded-lg hover:bg-[#7e0ecb] transition-all flex items-center gap-2 font-parkinsans"
          >
            <FiCopy /> Copy Code
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default Showcase;
