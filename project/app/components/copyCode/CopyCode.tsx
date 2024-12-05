import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";

const CopyCode: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <pre className="bg-gray-800 text-white rounded-lg p-4 overflow-x-auto">{code}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-[#9117E1] text-white px-3 py-1 rounded-md hover:bg-[#7e0ecb] transition-all"
      >
        {copied ? "Copied!" : <FiCopy />}
      </button>
    </div>
  );
};

export default CopyCode;
