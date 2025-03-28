import React from "react";
import Skill from "./ui/skill";

const skills = () => {
  const skills = [
    "JavaScript",
    "Typescript",
    "C#",
    "Java",
    "PHP",
    "Next.js",
    "React",
    "React Native",
    "Blazor",
    "Symfony",
    "Laravel",
    ".NET",
    "Unity",
    "HTML / CSS",
    "TailwindCSS",
    "GIT",
    "WordPress",
    "Databases (SQL)",
    "Scrum/Agile",
    "Onderzoek",
  ];

  return (
    <div className="flex flex-col py-8">
      <h2 className="text-center">Vaardigheden</h2>
      <div className="flex flex-row gap-2">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default skills;
