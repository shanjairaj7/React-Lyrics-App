import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-gray-800 p-3">
      <h1 className="font-hairline text-center text-xl text-white">
        <Link to="/">Lyric Finder</Link>
      </h1>
    </nav>
  );
}

export default Navbar;
