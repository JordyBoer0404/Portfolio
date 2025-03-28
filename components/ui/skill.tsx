import React from "react";

const skill = ({ skill }: { skill: any }) => {
  return (
    <div className="border-1 border-c1 px-1 rounded-md">
      <p className="text-sm text-foreground">{skill}</p>
    </div>
  );
};

export default skill;
