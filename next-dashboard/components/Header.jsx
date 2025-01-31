import React from "react";

const Header = () => {
  return (
    <header className="bg-purple-100 text-purple-800 shadow-md p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-lg font-light">Welcome Back</p>
      </div>
    </header>
  );
};

export default Header;
