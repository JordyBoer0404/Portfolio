import React from "react";

const navbar = () => {
  return (
    <nav className="flex flex-row md:justify-between py-8">
      <div className="invisible md:visible">
        <p>Jordy Boer</p>
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
