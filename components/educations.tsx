import React from "react";
import Education from "./ui/education";

const educations = () => {
  const educations = [
    {
      title: "HBO ICT Software Engineer",
      school: "De Haagse Hogeschool",
      time: "september 2019 - april 2024",
      status: "Behaald",
    },
    {
      title: "Applicatie & Media Ontwikkelaar",
      school: "MBO Rijnland",
      time: "augustus 2016 - juni 2019",
      status: "Behaald",
    },
  ];

  return (
    <div id="education" className="flex flex-col py-8">
      <h3>Opleidingen</h3>
      <div className="flex flex-row flex-wrap gap-4 md:gap-0">
        {educations.map((education) => (
          <Education key={education.title} education={education} />
        ))}
      </div>
    </div>
  );
};

export default educations;
