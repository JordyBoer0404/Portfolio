import React from "react";

type SkillProps = {
  skill: string;
};

const skill = ({ skill }: SkillProps) => {
  return (
    <div className="ring-1 ring-c1 px-1 rounded-md">
      <p className="text-sm text-foreground">{skill}</p>
    </div>
  );
};

export default skill;
