import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navbar = () => {
  return (
    <nav className="md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto p-0.5 mt-4 rounded-full h-20 bg-gradient-to-br from-orange-400 to-orange-600">
      <div className="bg-background w-full h-full rounded-full flex flex-row justify-center items-center gap-4">
        <Link href="/">
          <Avatar className="rounded-full w-14 h-14">
            <AvatarImage
              src="/avatar/jordy.jpg"
              className="object-contain scale-140"
              alt="Jordy Boer"
            />
            <AvatarFallback>Loading...</AvatarFallback>
          </Avatar>
        </Link>
        <Button variant="link">
          <Link href="#projects" className="text-lg">
            Projecten
          </Link>
        </Button>

        <Button variant="link">
          <Link href="#skills" className="text-lg">
            CV
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default navbar;
