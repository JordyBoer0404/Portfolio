import React from "react";

import soullinkTeambuilderImg from "../public/soullinkteambuilder.jpg";
import platinumDragonImg from "../public/platinumdragon.jpg";
import cyberGotchiImg from "../public/cybergotchi.jpg";
import routeplannerImg from "../public/routeplanner.jpg";

import ProjectSlider from "./sub-components/projectSlider";
import { Project } from "@/types/project";

const projects = () => {
  const projects: Project[] = [
    {
      title: "Pokemon Soullink Team Builder",
      description: "Soullink teambuilder tool",
      type: "Persoonlijk project",
      mobile: false,
      image: soullinkTeambuilderImg,
      skills: ["Next.js", "Typescript", "React", "Tailwind"],
      link: "https://soullink-teambuilder.vercel.app/",
    },
    {
      title: "Platinum Dragon",
      description: "Playstation trophy hunting webapp",
      type: "Persoonlijk project",
      mobile: false,
      image: platinumDragonImg,
      skills: ["Next.js", "Typescript", "React", "Tailwind", "Supabase"],
      link: "",
    },
    {
      title: "CyberGotchi",
      description: "Gamificatie-app voor veilig internetgebruik",
      type: "School project",
      mobile: true,
      image: cyberGotchiImg,
      skills: ["React Native", "Firebase"],
      link: "",
    },
    {
      title: "Offline routeplanner",
      description: "Prototype voor een offline routeplanner",
      type: "School project",
      mobile: false,
      image: routeplannerImg,
      skills: ["C#", "Blazor WebAssembly"],
      link: "",
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
