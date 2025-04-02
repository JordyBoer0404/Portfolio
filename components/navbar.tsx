import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const navbar = () => {
  return (
    <nav className="flex flex-row justify-end md:justify-between py-8">
      <div className="invisible md:visible">
        <p>Jordy Boer</p>
      </div>
      <div className="flex flex-row">
        <Button variant="link">
          <Link href="#projects">Projecten</Link>
        </Button>
        <Button variant="link">
          <Link href="#skills">Vaardigheden</Link>
        </Button>
        <Button variant="link">
          <Link href="#education">Opleidingen</Link>
        </Button>
      </div>
    </nav>
  );
};

export default navbar;
