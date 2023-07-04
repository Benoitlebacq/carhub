"use client";
import Image from "next/image";
import Link from "next/link";

import CustomButton from "./CustomButton";

const Navbar = () => {
  const handleSignIn = () => {
    return;
  };
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440ps] mx-auto flex justify-between items-center sm-px-16 px-6 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt=""
            width={118}
            height={18}
            className="flex justify-center items-center"
          />
        </Link>

        <CustomButton
          buttonName="Sign In"
          customClassName="text-primary-black font-bold rounded-full bg-white min-w-[130px] shadow-md"
          handleClick={handleSignIn}
        />
      </nav>
    </header>
  );
};

export default Navbar;
