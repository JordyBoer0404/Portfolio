import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  type: "Persoonlijk project" | "School project";
  mobile: boolean;
  image: StaticImageData;
  skills: string[];
  link: string | null;
};
