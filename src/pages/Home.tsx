import React from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">
          React + Tailwind App for Aviyel
        </h1>
        <p className="text-base text-gray-700 leading-normal">
          Just a sub heading
        </p>
      </div>
      <br />
      <Link to="/demo" className="ml-6  text-blue-500">
        Demo page
      </Link>
    </div>
  );
};
