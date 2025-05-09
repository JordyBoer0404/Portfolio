import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const profile = () => {
  return (
    <div className="flex flex-col gap-8 xl:gap-0 py-2 xl:flex-row lg:py-16">
      <div className="xl:w-8/12 xl:max-w-8/12">
        <h1 className="text-center md:text-left font-medium text-c3 text-5xl md:text-7xl mb-4">
          Welkom! <span className="text-foreground">mijn naam is </span> Jordy
          Boer.
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
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Loading...</AvatarFallback>
        </Avatar>
        <div className="flex flex-row ring-1 ring-c3 rounded-2xl p-1">
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

export default profile;
