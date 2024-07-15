import React from "react";
import { BentoGridDemo } from "./grid";
import Image from "next/image";
import profilePic from "/app/assets/image/profile-pic-fb.jpg";
import { FirstWork } from "./fundamentals";
import { PreModernComputing } from "./preModernComputing";
import { BTwo } from "./MechanicalCal";
import { ElectronicComputing } from "./electronicComputing";
import { VrAndAr } from "./vrandar";
import { GoogleNest } from "./GoogleNest";

const Hero = () => {
  return (
    <div className="pt-9 mt-9 max-w-6xl mx-auto">
      <div className="flex flex-col-reverse items-center lg:flex-row my-6 gap-8">
        <div className="lg:px-0 sm:px-4 gap-4">
          <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">
            Kim Subang
          </h1>
          <p className="text-xl sm:text-3xl mb-2">Web Developer in Training</p>
          <p className="text-lg sm:text-2xl">
            I create beautiful and functional websites. Check out my work below
            and get in touch!
          </p>
        </div>
        <Image
          className="rounded-full"
          src={profilePic}
          alt=" My Profile"
          width={400}
          height={400}
        />
      </div>
      {/* <hr className="border-y-4 bg-slate-100" />
      <div className="flex flex-col items-center">
        <h1 className="text-center font-semibold sm:text-2xl my-5">Skills</h1>
        <BentoGridDemo />
      </div> */}
      <hr className="border-y-4 bg-slate-100 mt-12" />
      <div className="flex flex-col items-center">
        <h1 className="text-center font-semibold sm:text-2xl mt-5">
          School Works
        </h1>
        <p className="semi-bold uppercase mt-5">Fundamental Concepts</p>
        <FirstWork />
      </div>
      <hr className="border-y-4 bg-slate-100 mt-12" />
      <div className="flex flex-col items-center">
        <p className=" semi-bold uppercase mt-5">
          Historical Evolution And MilesStone of IT
        </p>
        <div className="w-full uppercase my-4">
          <p className="bg-teal-600 p-3 inline-block rounded-md">
            Pre Modern Computing
          </p>
        </div>
        <PreModernComputing />
      </div>
      <hr className="border-y-4 bg-slate-100 mt-12" />
      <div className="flex flex-col items-center">
        <div className="w-full uppercase my-4">
          <p className="bg-teal-600 p-3 inline-block rounded-md">
            Mechanical Calculators and Early Computing Machines
          </p>
        </div>
        <BTwo />
      </div>
      <hr className="border-y-4 bg-slate-100 mt-12" />
      <div className="flex flex-col items-center">
        <div className="w-full uppercase my-4">
          <p className="bg-teal-600 p-3 inline-block rounded-md">
            Emergence of Electronic Computing
          </p>
        </div>
        <ElectronicComputing />
      </div>
      <hr className="border-y-4 bg-slate-100 mt-12" />
      <div className="flex flex-col items-center">
        <p className=" semi-bold uppercase mt-5">
          Virtual Reality and Augmented Realitity in Entertainment
        </p>
        <div className="w-full my-4">
          <p className="">
            Virtual Reality (VR) and Augmented Reality (AR) are two
            groundbreaking technologies reshaping the entertainment landscape.
            VR creates a fully immersive digital environment, transporting users
            into a virtual world, while AR overlays digital content onto the
            real world, enhancing the user's physical surroundings. Both
            technologies offer innovative ways to engage audiences, making them
            pivotal in the evolution of entertainment.
          </p>
        </div>
        <VrAndAr />
      </div>
      <hr className="border-y-4 bg-slate-100 mt-12" />
      <div className="flex flex-col items-center">
        <p className=" semi-bold uppercase mt-5">Google Nest</p>
        <GoogleNest />
      </div>
    </div>
  );
};

export default Hero;
