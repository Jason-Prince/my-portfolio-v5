import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-100 dark:bg-black text-zinc-800 md:flex-row-reverse md:mt-10 ">
      <div className="w-[351px]">
        <Image
          className="rounded-full"
          src={"/me.jpg"}
          width={700}
          height={700}
          layout="intrinsic"
          alt="Jason Prince"
          objectFit="contain"
        />
      </div>
      <h1 className="dark rounded z-10 border-2 p-3 w-[351px] text-2xl text-center md:text-left md:translate-x-7 md:-translate-y-10 border-cyan-800 dark:border-gray-400  bg-gray-100 dark:bg-black  text-cyan-800 dark:text-gray-400  ">
        Hi, I&#39;m Jason Prince. <br />A Front-End Developer based in Utah.
        Available for freelance & collaborations.
      </h1>
    </section>
  );
};

export default Hero;
