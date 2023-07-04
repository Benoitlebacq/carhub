import { FC } from "react";

import { CustomFilterProps } from "@/models/CustomFilter.model";

const CustomFilter: FC<CustomFilterProps> = ({ title }) => {
  return (
    <div>
      <>{title}</>
    </div>
  );
};

export default CustomFilter;
