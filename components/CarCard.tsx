"use client";

import Image from "next/image";
import { FC, useState } from "react";

import { CarCardProps } from "@/models/CarCard.model";
import { calculateCarRent } from "@/utils";

import CustomButton from "./CustomButton";

const CarCard: FC<CarCardProps> = ({
  car: { year, city_mpg, make, model, transmission, drive },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span>{carRent}</span>
        <span className="self-start text-[14px] font-bold">€</span>
        <span className="self-start  text-[14px] font-medium ">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src="/hero.png"
          alt="car image"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            {drive.toUpperCase()}
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            {city_mpg} MPG
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            buttonName="View More"
            customClassName="w-full py-[16px] rounded-full bg-orange-500 text-white"
            handleClick={() => setIsOpen(true)}
            rightIcon="/right-arrow.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CarCard;
