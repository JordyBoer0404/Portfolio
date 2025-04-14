import { CVformat } from "@/types/cvformat";
import React from "react";
import Cvformat from "./sub-components/cvformat";

const experiences = () => {
  const experiences: CVformat[] = [
    {
      title: "Software engineer stagiair",
      place: "CityGIS BV",
      time: "november 2023 - april 2024",
      status: "Behaald",
    },
    {
      title: "Software developer stagiair",
      place: "42BV",
      time: "augustus 2021 - januari 2022",
      status: "Behaald",
    },
    {
      title: "Software/web developer stagiair",
      place: "Rubix marketing",
      time: "januari 2019 - augustus 2019",
      status: "Behaald",
    },
    {
      title: "Software/web developer stagiair",
      place: "Proud Innovations",
      time: "augustus 2017 - januari 2018",
      status: "Behaald",
    },
  ];

  return (
    <div id="experiences" className="flex flex-col py-8">
      <h3>Ervaring</h3>
      <div className="grid lg:grid-cols-2 lg:place-items-center gap-4 md:gap-0">
        {experiences.map((experience, index) => (
          <Cvformat key={index} cvformat={experience} />
        ))}
      </div>
    </div>
  );
};

export default experiences;
