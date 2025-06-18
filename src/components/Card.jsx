import React from "react";

const Card = ({ img, title, desc, site, code }) => {
  return (
    <div className="max-w-sm bg-[#0b1120] border border-[#1e293b] rounded-3xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-cyan-400">
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt={title}
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-white mb-2">
          {title}
        </h2>
        <p className="text-gray-400 text-sm mb-4">
          {desc}
        </p>
        <div className="flex space-x-3">
          {site && (
            <a
              href={site}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-cyan-500 hover:text-cyan-500 hover:bg-transparent hover:border-cyan-500 hover:border text-white text-sm font-medium rounded-md transition">Visit Site</button>
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white text-sm font-medium rounded-md transition">View Code</button>

            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
