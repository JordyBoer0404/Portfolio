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
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type ProjectProps = {
  project: Project;
};

const ProjectCardContent = (props: { project: Project }) => {
  return (
    <Card
      className={`${
        props.project.link && "transition-all duration-300 hover:-translate-y-4"
      } mx-1`}
    >
      <CardHeader>
        <CardTitle>{props.project.title}</CardTitle>
        <CardDescription>{props.project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 aspect-square justify-center">
        <div className="relative aspect-[16/9]">
          <Image
            fill
            className="rounded-2xl ring ring-offset-foreground/50 ring-offset-1 border-2 border-card"
            src={props.project.image}
            alt={props.project.title}
          />
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          {props.project.skills.map((skill) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="block lg:hidden">
        {props.project.link && <Button>Website</Button>}
      </CardFooter>
    </Card>
  );
};

const projectCard = ({ project }: ProjectProps) => {
  return (
    <>
      {project.link ? (
        <Link href={project.link} target="_blank">
          <ProjectCardContent project={project} />
        </Link>
      ) : (
        <ProjectCardContent project={project} />
      )}
    </>
  );
};

export default projectCard;
