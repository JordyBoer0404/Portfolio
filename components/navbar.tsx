import React from "react";

const navbar = () => {
  return (
    <nav className="flex flex-row justify-between px-16 py-8">
      <div>
        <p>Portfolio van Jordy Boer</p>
      </div>
      <div className="flex flex-row gap-2">
        <a>Projecten</a>
        <a>Skills</a>
        <a>Opleidingen</a>
      </div>
    </nav>
  );
};

export default navbar;
