"use client";

import Image from "next/image";

import CustomButton from "./CustomButton";

const HomePage = () => {
  const handleScroll = () => {
    return;
  };

  return (
    <div className="homepage">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="homepage__title">
          Discover, reserve, or lease a car - swiftly and easily !
        </h1>
        <p className="homepage__subtitle">
          Simplify your car rental experience with our seamless booking process
        </p>
        <CustomButton
          buttonName="Explore Cars"
          handleClick={handleScroll}
          customClassName="bg-orange-500 text-white rounded-full mt-10"
        />
      </div>
      <div className="homepage__image-container">
        <div className="homepage__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="homepage__image-overlay" />
      </div>
    </div>
  );
};

export default HomePage;
