import React from "react";
import { Separator } from "./ui/separator";

type Education = {
  title: string;
  school: string;
  time: string;
  status: string;
};

type EducationProps = {
  education: Education;
};

const education = ({ education }: EducationProps) => {
  return (
    <div className="flex flex-col items-center py-2 lg:w-1/2">
      <div className="w-fit space-y-1">
        <h4 className="text-c3">{education.title}</h4>
        <Separator />
        <div className="text-sm space-y-1">
          <div className="flex flex-row">
            <p>{education.school}</p>
            <hr className="border-1 border-border h-auto mx-2" />
            <p>{education.time}</p>
          </div>
          <p>{education.status}</p>
        </div>
      </div>
    </div>
  );
};

export default education;
