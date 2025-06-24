"use client";

import React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import ProjectCard from "./projectCard";
import { Project } from "@/types/project";

type ProjectProps = {
  projects: Project[];
};

const ProjectSlider = ({ projects }: ProjectProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(projects.length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollToIndex = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <>
      <Carousel
        setApi={setApi}
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
              className="md:basis-1/2 xl:basis-1/3 py-5"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-c3" : "bg-c1"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSlider;
