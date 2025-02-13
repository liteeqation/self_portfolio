import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import Arrowdown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/heroorbit";
import shourya_photograph from "@/assets/images/shourya_photograph_1_-removebg-preview(1).png";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-16 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <div className="size-[1420px] hero-ring"></div>
        <div className="size-[1620px] hero-ring"></div>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={900}
          rotation={-100}
          shouldOrbit
          orbitDuration="48s"
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="size-20 text-emerald-300 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={900}
          rotation={-130}
          shouldOrbit
          orbitDuration="48s"
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="size-22 text-emerald-300 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={900}
          rotation={-160}
          shouldOrbit
          orbitDuration="48s"
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="size-15 text-emerald-300 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={700}
          rotation={-140}
          shouldOrbit
          orbitDuration="48s"
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="size-20 text-emerald-300 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldspin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldspin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldspin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldspin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={-130}
          shouldOrbit
          orbitDuration="36s"
          shouldspin
          spinDuration="3s"
        >
          <SparkleIcon className="size-15 text-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldspin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="46s"
          shouldspin
          spinDuration="3s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit
          orbitDuration="34s"
          shouldspin
          spinDuration="3s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-15}
          shouldOrbit
          orbitDuration="42s"
          shouldspin
          spinDuration="3s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={-250}
          rotation={-5}
          shouldOrbit
          orbitDuration="42s"
          shouldspin
          spinDuration="3s"
        >
          <div className="size-4 rounded-full bg-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={-300}
          rotation={-10}
          shouldOrbit
          orbitDuration="42s"
          shouldspin
          spinDuration="3s"
        >
          <div className="size-4 rounded-full bg-emerald-300/20 border-red-500" />
        </HeroOrbit>
        <HeroOrbit
          size={810}
          rotation={-5}
          shouldOrbit
          orbitDuration="50s"
          shouldspin
          spinDuration="3s"
        >
          <div className="relative size-5 bg-green-200 rounded-full"></div>
        </HeroOrbit>
      </div>
      <div className="container w-[30%]">
        <div className="flex flex-col items-center">
          {/* Image Section */}
          <Image
            src={shourya_photograph}
            className="w-[50%] z-20 relative "
            alt="Person peeking from behind a laptop"
          />
          {/* Introduction Section */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="text-sm font-medium">
              {" "}
              Hi there! Open to new opportunities
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Turning Ideas Into Impactful Digital Solutions
          </h1>
          <p className="mt-4 text-center text-white/60 text-2xl md:text-lg">
            CS grad proficient in building full-stack applications, crafting
            responsive websites, designing intuitive front-end interfaces, and
            developing secure blockchain solutions for exceptional user
            experiences.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4 z-10">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-20 relative">
              <span className="font-semibold">Explore My Work</span>
              <Arrowdown className="size-4" />
            </button>
          </a>
          <a href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl z-20 relative">
              <span>👋</span>
              <span className="font-semibold ">Let&apos;s Connect</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
