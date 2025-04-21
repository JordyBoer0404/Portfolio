import React from "react";
import Skill from "./sub-components/skill";

const skills = () => {
  type Skills = {
    [category: string]: string[];
  };

  const vaardigheden: Skills = {
    Programmeren: ["JavaScript", "TypeScript", "C#", "Java", "PHP"],
    "Frameworks & Libraries": [
      "Next.js",
      "React",
      "React Native",
      "Blazor",
      "Symfony",
      "Laravel",
      ".NET",
    ],
    "Software Development": [
      "HTML / CSS",
      "TailwindCSS",
      "GIT",
      "WordPress",
      "Databases (SQL)",
      "Scrum/Agile",
    ],
    Overig: ["Unity", "Onderzoek"],
  };

  return (
    <div id="skills" className="flex flex-col py-8">
      <h3>Vaardigheden</h3>
      <div className="grid lg:grid-cols-2 lg:place-items-center lg:items-start gap-4">
        {Object.entries(vaardigheden).map(([vaardigheid, skills]) => (
          <div
            key={vaardigheid}
            className="flex flex-col lg:w-[350px] md:px-4 gap-2 mb-6"
          >
            <h4 className="text-c3">{vaardigheid}</h4>
            <div className="flex flex-row flex-wrap gap-4">
              {skills.map((skill) => (
                <Skill key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default skills;
