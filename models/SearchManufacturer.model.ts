import { Dispatch, SetStateAction } from "react";

export type SearchManufacturerProps = {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
};

export type SearchParams = {
  manufacturer: string;
  fuel: string;
  year: number;
  limit: number;
  model: string;
};
