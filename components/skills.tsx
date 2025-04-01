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
      "Unity",
    ],
    "Software Development": [
      "HTML / CSS",
      "TailwindCSS",
      "GIT",
      "WordPress",
      "Databases (SQL)",
      "Scrum/Agile",
    ],
    Overig: ["Onderzoek"],
  };

  return (
    <div className="flex flex-col py-8 bg-background rounded-t-2xl px-6">
      <h3>Vaardigheden</h3>
      <div className="flex flex-row flex-wrap">
        {Object.entries(vaardigheden).map(([vaardigheid, skills]) => (
          <div
            key={vaardigheid}
            className="flex flex-col sm:w-1/1 md:w-1/2 md:items-center gap-2 mb-6"
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
