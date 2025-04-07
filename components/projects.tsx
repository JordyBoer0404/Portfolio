import React from "react";

import platinumDragonImg from "../public/platinumdragon.jpg";
import cyberGotchiImg from "../public/cybergotchi.jpg";
import routeplannerImg from "../public/routeplanner.jpg";

import { StaticImageData } from "next/image";

import ProjectSlider from "./projectSlider";

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
    <div id="projects" className="flex flex-col py-12 items-center">
      <h3>Projecten</h3>
      <ProjectSlider projects={projects} />
    </div>
  );
};

export default projects;
