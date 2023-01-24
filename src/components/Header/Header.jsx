import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
            <a href="/" className="btn btn-ghost normal-case text-xl">Home</a>
        </div>
        <div className="navbar-center">
          <a href="/" className="btn btn-ghost normal-case text-xl">AWS Api Explore</a>
        </div>
        <div className="navbar-end">
            <a href="/" className="btn btn-ghost normal-case text-xl">About</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
