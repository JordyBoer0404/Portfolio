import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Skill from "./skill";
import Image from "next/image";
import { Button } from "../ui/button";
import { Project } from "@/types/project";

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
            className="w-30 h-65 lg:w-35 lg:h-75 rounded-2xl ring ring-offset-foreground/50 ring-offset-1 border-2 border-card"
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
            className="aspect-[16/9] rounded-2xl ring ring-offset-foreground/50 ring-offset-1 border-2 border-card"
            src={project.image}
            alt={project.title}
          ></Image>
          <div className="flex flex-row flex-wrap gap-2">
            {project.skills.map((skill) => (
              <Skill key={skill} skill={skill} />
            ))}
          </div>
        </CardContent>
      )}

      <CardFooter className="justify-between">
        <p>{project.type}</p>
        {project.link && (
          <Button className="-my-2" size={"sm"}>
            <a href={project.link} target="_blank">
              Website
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default projectCard;
