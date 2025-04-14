import React from "react";
import Education from "./sub-components/cvformat";
import { CVformat } from "@/types/cvformat";

const educations = () => {
  const educations: CVformat[] = [
    {
      title: "HBO ICT Software Engineer",
      place: "De Haagse Hogeschool",
      time: "september 2019 - april 2024",
      status: "Behaald",
    },
    {
      title: "Applicatie & Media Ontwikkelaar",
      place: "MBO Rijnland",
      time: "augustus 2016 - juni 2019",
      status: "Behaald",
    },
  ];

  return (
    <div id="education" className="flex flex-col py-8">
      <h3>Opleidingen</h3>
      <div className="grid lg:grid-cols-2 lg:place-items-center gap-4 md:gap-0">
        {educations.map((education) => (
          <Education key={education.title} cvformat={education} />
        ))}
      </div>
    </div>
  );
};

export default educations;
