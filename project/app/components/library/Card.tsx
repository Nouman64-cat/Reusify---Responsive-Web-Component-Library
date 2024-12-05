import React from "react";
import { FiGrid, FiBarChart2, FiUser } from "react-icons/fi";

interface CardProps {
  title: string;
  imageUrl?: string;
  dashboards: number;
  charts: number;
  isPublic: boolean;
  onClick?: () => void; // Add onClick prop
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  dashboards,
  charts,
  isPublic,
  onClick,
}) => {
  return (
    <div
      onClick={onClick} // Attach click handler
      className="max-w-sm rounded-2xl shadow-lg bg-white dark:bg-[#1E1E2E] text-gray-800 dark:text-gray-200 transition-colors duration-300 overflow-hidden cursor-pointer hover:shadow-xl hover:scale-[1.02] transform"
    >
      {imageUrl && (
        <div className="relative w-full h-40">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold font-parkinsans">{title}</h3>
        <div className="flex items-center mt-2 space-x-4">
          <div className="flex items-center space-x-2">
            <FiGrid className="text-blue-600" size={18} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {dashboards} dashboards
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <FiBarChart2 className="text-yellow-500" size={18} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {charts} charts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
