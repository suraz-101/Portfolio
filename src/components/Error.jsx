import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="text-center py-12">
      <h1 className="font-serif font-bold text-textColor">Error</h1>
      <Link to="/"> Back to Home</Link>
    </div>
  );
};
