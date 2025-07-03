import React from "react";

import ProjectSlider from "./sub-components/projectSlider";
import { projectsData } from "@/lib/projects";

const projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col py-8 items-center gap-4 lg:py-16"
    >
      <div className="space-y-2">
        <h2>
          <span className="bg-gradient-to-br from-orange-400 to-orange-600 inline-block text-transparent bg-clip-text">
            Projecten
          </span>
        </h2>
        <p className="text-center text-sm md:text-lg">
          Ik ben altijd bezig met het ontwikkelen van software om mijn
          vaardigheden en kennis te verbeteren.
        </p>
        <p className="text-center text-sm md:text-lg">
          Hieronder is de mogelijkheid om mijn maatwerk en persoonlijke
          projecten te bekijken.
        </p>
      </div>
      <ProjectSlider projects={projectsData} />
    </div>
  );
};

export default projects;
