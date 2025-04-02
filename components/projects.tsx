import React from "react";

import platinumDragonImg from "../public/platinumdragon.jpg";
import cyberGotchiImg from "../public/cybergotchi.jpg";
import routeplannerImg from "../public/routeplanner.jpg";

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
              <div className="p-1">
                <Card>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  {project.mobile ? (
                    <CardContent className="flex flex-row aspect-square gap-4 items-center justify-center">
                      <Image
                        className="w-35 h-75 rounded-2xl"
                        src={project.image}
                        alt={project.title}
                      ></Image>
                      <div className="flex flex-col flex-wrap justify-end gap-2">
                        {project.skills.map((skill) => (
                          <Skill key={skill} skill={skill} />
                        ))}
                      </div>
                    </CardContent>
                  ) : (
                    <CardContent className="flex flex-col gap-4 aspect-square justify-center">
                      <Image
                        className="aspect-[16/9] rounded-2xl"
                        src={project.image}
                        alt={project.title}
                      ></Image>
                      <div className="flex flex-row flex-wrap gap-2 ">
                        {project.skills.map((skill) => (
                          <Skill key={skill} skill={skill} />
                        ))}
                      </div>
                    </CardContent>
                  )}

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
