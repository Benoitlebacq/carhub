"use client";

import Image from "next/image";
import { FC } from "react";

import { CustomButtonProps } from "@/models/CustomButton.model";

const CustomButton: FC<CustomButtonProps> = ({
  buttonName,
  isDisabled = false,
  handleClick,
  customClassName,
  rightIcon,
}) => {
  return (
    <button
      disabled={isDisabled}
      type={"button"}
      className={`custom-btn ${customClassName}`}
      onClick={handleClick}
    >
      <span className="flex-1">{buttonName}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            className="object-contain"
            fill
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
