import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const hero = () => {
  return (
    <div className="flex flex-col gap-8 xl:gap-0 py-8 xl:flex-row lg:py-16 mt-8">
      <div className="xl:w-8/12 xl:max-w-8/12">
        <h1 className="text-balance font-medium text-foreground text-5xl/tight md:text-7xl/tight mb-4">
          Welkom! Mijn naam is{" "}
          <span className="bg-gradient-to-br from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
            Jordy Boer
          </span>
        </h1>
        <div className="flex flex-col gap-4">
          <h4>
            Ik ben een gemotiveerde junior software engineer met een passie voor
            ontwikkeling en technologie. Mijn doel is om mijn kwaliteiten en
            vaardigheden in te zetten in mijn persoonlijk en bedrijfs leven, om
            mijn ICT-gerelateerde kennis te vergroten en te verbeteren.
          </h4>
          <h4>
            Op deze website vind je mijn projecten, vaardigheden en meer
            informatie over mij. Aarzel niet om contact op te nemen of mijn
            LinkedIn & Github te bekijken!
          </h4>
        </div>
      </div>
      <div className="flex flex-col xl:w-4/12 gap-4 items-center xl:items-end justify-center">
        <Avatar>
          <AvatarImage
            src="/avatar/jordy.jpg"
            className="scale-140 object-contain"
            alt="Jordy Boer"
          />
          <AvatarFallback>Loading...</AvatarFallback>
        </Avatar>
        <div className="flex flex-row ring-1 ring-c3 rounded-2xl p-1 bg-gradient-to-b from-transparent to-orange-500/10">
          <Button variant="link">
            <a
              href="https://www.linkedin.com/in/jordy-boer-326843187/"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button variant="link">
            <a href="https://github.com/JordyBoer0404" target="_blank">
              Github
            </a>
          </Button>
          <Button variant="link">
            <a href="mailto:jordy.boer.040400@gmail.com">Email</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default hero;
