import React from "react";

import platinumDragonImg from "../public/platinumdragon.jpg";
import cyberGotchiImg from "../public/cybergotchi.jpg";
import routeplannerImg from "../public/routeplanner.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { StaticImageData } from "next/image";

import ProjectCard from "./projectCard";

const projects = () => {
  type Project = {
    title: string;
    description: string;
    type: "Persoonlijk project" | "School project";
    mobile: boolean;
    image: StaticImageData;
    skills: string[];
  };

  const projects: Project[] = [
    {
      title: "Platinum Dragon",
      description: "Playstation trophy hunting webapp",
      type: "Persoonlijk project",
      mobile: false,
      image: platinumDragonImg,
      skills: ["Next.js", "Typescript", "React", "Tailwind", "Supabase"],
    },
    {
      title: "CyberGotchi",
      description: "Gamificatie-app voor veilig internetgebruik",
      type: "School project",
      mobile: true,
      image: cyberGotchiImg,
      skills: ["React Native", "Firebase"],
    },
    {
      title: "Offline routeplanner",
      description: "Prototype voor een offline routeplanner",
      type: "School project",
      mobile: false,
      image: routeplannerImg,
      skills: ["C#", "Blazor WebAssembly"],
    },
  ];

  return (
    <div id="projects" className="flex flex-col py-8 items-center">
      <h3 className="w-fit bg-background/95 px-4 py-2 rounded-2xl">
        Projecten
      </h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem
              key={project.title}
              className="md:basis-1/2 xl:basis-1/3"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default projects;
