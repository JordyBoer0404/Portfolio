import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navbar = () => {
  return (
    <nav className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto md:px-8 flex flex-row justify-center ring-1 ring-orange-500 md:rounded-b-full items-center gap-4 h-20 bg-gradient-to-b from-transparent to-orange-500/5">
      <Link href="/">
        <Avatar className="rounded-full w-14 h-14">
          <AvatarImage src="https://github.com/shadcn.png" alt="Jordy Boer" />
          <AvatarFallback>Loading...</AvatarFallback>
        </Avatar>
      </Link>
      <Button variant="link">
        <Link href="#projects">Projecten</Link>
      </Button>

      <Button variant="link">
        <Link href="#skills">CV</Link>
      </Button>
    </nav>
  );
};

export default navbar;
