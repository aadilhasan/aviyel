import React from "react";
import { Link } from "react-router-dom";
export const Demo = () => {
  return (
    <div>
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight">DEMO PAGE</h1>
        <p className="text-base text-gray-700 leading-normal">
          Another sub heading
        </p>
      </div>
      <br />
      <br />
      <Link to="/" className="ml-6  text-blue-500">
        Home
      </Link>
    </div>
  );
};
