import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const profile = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-0 py-2 md:flex-row md:py-16">
      <div className="md:w-1/2 md:max-w-1/2">
        <h1>Welkom!</h1>
        <h2>
          Mijn naam is <span className="text-[#eb5e28]">Jordy Boer.</span>
        </h2>
        <div className="flex flex-col gap-4">
          <h4>
            Ik ben een gemotiveerde junior software engineer met een passie voor
            ontwikkeling en technologie. Mijn doel is om mijn kwaliteiten en
            vaardigheden in te zetten in mijn persoonlijk en bedrijfs leven, om
            mijn ICT-gerelateerde kennis te vergroten en te verbeteren.
          </h4>
          <h4>
            Op deze website vind je mijn projecten, vaardigheden en informatie
            over mij. Neem gerust een kijkje en aarzel niet om contact op te
            nemen!
          </h4>
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 gap-4 items-center justify-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>Loading...</AvatarFallback>
        </Avatar>
        <div className="flex flex-row">
          <Button variant="link">
            <a href="https://www.linkedin.com/in/jordy-boer-326843187/">
              LinkedIn
            </a>
          </Button>
          <Button variant="link">
            <a href="https://github.com/JordyBoer0404">Github</a>
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
