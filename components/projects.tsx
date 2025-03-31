import React from "react";

import stockImage from "../public/stock.jpg";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Skill from "./ui/skill";

const projects = () => {
  const projects = [
    {
      title: "Platinum Dragon",
      description: "Playstation trophy hunting webapp",
      type: "Persoonlijk project",
      image: stockImage,
      skills: ["Next.js", "Typescript", "React", "Tailwind", "Supabase"],
    },
    {
      title: "CyberGotchi",
      description: "Gamificatie-app voor veilig internetgebruik",
      type: "School project",
      image: stockImage,
      skills: ["React Native", "Firebase"],
    },
    {
      title: "Offline routeplanner",
      description: "Prototype voor een offline routeplanner",
      type: "School project",
      image: stockImage,
      skills: ["C#", "Blazor WebAssembly"],
    },
  ];

  return (
    <div className="flex flex-col py-8">
      <h3>Projecten</h3>
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
              className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4 aspect-square justify-center p-6">
                    <Image src={project.image} alt={project.title}></Image>
                    <div className="flex flex-row flex-wrap gap-2 ">
                      {project.skills.map((skill) => (
                        <Skill key={skill} skill={skill} />
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>{project.type}</CardFooter>
                </Card>
              </div>
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
