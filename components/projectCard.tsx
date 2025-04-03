import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Skill from "./ui/skill";
import Image, { StaticImageData } from "next/image";

type Project = {
  title: string;
  description: string;
  type: "Persoonlijk project" | "School project";
  mobile: boolean;
  image: StaticImageData;
  skills: string[];
};

type ProjectProps = {
  project: Project;
};

const projectCard = ({ project }: ProjectProps) => {
  return (
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
  );
};

export default projectCard;
