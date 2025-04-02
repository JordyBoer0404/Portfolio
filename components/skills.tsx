import React from "react";
import Skill from "./ui/skill";

const skills = () => {
  const vaardigheden = {
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
      <div className="flex flex-row flex-wrap py-2">
        {Object.entries(vaardigheden).map(([vaardigheid, skills]) => (
          <div
            key={vaardigheid}
            className="flex flex-col sm:w-1/1 md:w-1/2 xl:items-center md:px-4 gap-2 mb-6"
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
