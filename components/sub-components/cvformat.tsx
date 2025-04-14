import React from "react";
import { Separator } from "../ui/separator";
import { CVformat } from "@/types/cvformat";

type CvformatProps = {
  cvformat: CVformat;
};

const cvformat = ({ cvformat }: CvformatProps) => {
  return (
    <div className="flex flex-col py-2 lg:w-[350px]">
      <div className="w-fit space-y-1">
        <h4 className="text-c3">{cvformat.title}</h4>
        <Separator />
        <div className="text-sm space-y-1">
          <div className="flex flex-row">
            <p>{cvformat.place}</p>
            <hr className="border-1 border-border h-auto mx-2" />
            <p>{cvformat.time}</p>
          </div>
          <p>{cvformat.status}</p>
        </div>
      </div>
    </div>
  );
};

export default cvformat;
