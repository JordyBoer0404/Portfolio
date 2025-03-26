import React from "react";
import { Avatar } from "@heroui/avatar";

const profile = () => {
  return (
    <div className="flex flex-row p-16">
      <div className="w-1/2 max-w-1/2">
        <h1>Welkom</h1>
        <div className="flex flex-col gap-4">
          <h4>
            Mijn naam is Jordy Boer. Ik ben een gemotiveerde junior software
            engineer met een passie voor ontwikkeling en technologie. Mijn doel
            is om mijn kwaliteiten en vaardigheden in te zetten in mijn
            persoonlijk en bedrijfs leven, om mijn ICT-gerelateerde kennis te
            vergroten en te verbeteren.
          </h4>
          <h4>
            Op deze website vind je mijn projecten, vaardigheden en informatie
            over mij. Neem gerust een kijkje en aarzel niet om contact op te
            nemen!
          </h4>
        </div>
      </div>
      <div className="flex flex-col w-1/2 gap-4 items-center justify-center">
        <Avatar
          className="w-40 h-40"
          showFallback
          isBordered
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
        <div className="flex flex-row gap-2">
          <a>Github</a>
          <a>Linkedin</a>
          <a>email</a>
        </div>
      </div>
    </div>
  );
};

export default profile;
