import React from "react";

import ProjectSlider from "./sub-components/projectSlider";
import { projectsData } from "@/lib/projects";

const projects = () => {
  return (
    <div id="projects" className="flex flex-col py-12 items-center">
      <h3>Projecten</h3>
      <ProjectSlider projects={projectsData} />
    </div>
  );
};

export default projects;
