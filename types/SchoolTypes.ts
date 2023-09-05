import { StaticImageData } from "next/image";

export type SchoolTypes = {
  name: string;
  logo: string;
  urlRouting: string,
  description: string,
  acronym: string;
  type: string;
  email: string;
  address: string;
  googleMap:string;
  website: string;
  phone: string;
  about: string;
  degree: Array<{
    name: string;
    path: Array<{ name: string }>;
  }>;
};
