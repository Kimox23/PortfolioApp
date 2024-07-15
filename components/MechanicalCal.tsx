"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import MechanicalCal from "/app/assets/image/mechanical-calculator.jpg";
import EarlyComputing from "/app/assets/image/earlycomputing.jpg";
import Link from "next/link";

export function BTwo() {
  return (
    <div className="grid grid-cols-2 gap-4 items-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Mechanical Calculator
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Blaise Pascal and the Pascaline: Blaise Pascal, a French
            mathematician, created the Pascaline in 1642. This mechanical
            calculator could perform addition and subtraction using a system of
            gears and wheels. Despite its innovative design, the Pascaline had
            limitations, such as its inability to perform more complex
            calculations and its susceptibility to mechanical issues. However,
            it marked a significant step towards automated calculation.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={MechanicalCal}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Gottfried Wilhelm Leibniz and the Stepped Reckoner: In 1673,
              Gottfried Wilhelm Leibniz, a German polymath, developed the
              Stepped Reckoner. This device could handle addition, subtraction,
              multiplication, and division, thanks to its stepped drum
              mechanism. While more advanced than the Pascaline, it faced
              challenges due to its mechanical complexity and precision
              requirements. Nonetheless, it showcased the potential for more
              sophisticated mechanical calculators.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Early Computing Machines
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Charles Babbage and the Difference Engine: In 1822, Charles Babbage,
            an English mathematician, designed the Difference Engine to automate
            polynomial calculations. Although never completed due to financial
            and technological constraints, the Difference Engine demonstrated
            the potential for machines to perform complex calculations
            accurately.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={EarlyComputing}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Charles Babbage and the Analytical Engine: Babbage's Analytical
              Engine, conceptualized in 1837, was designed as a general-purpose
              computing machine. It featured key elements of modern computers,
              such as an arithmetic logic unit and memory. Ada Lovelace wrote
              algorithms for it, making her the first computer programmer.
              Although the machine was never built, it laid the foundation for
              programmable computers. Limitations and Potential: These early
              devices were limited by mechanical precision, complexity, and the
              technology of their time. They were often large, fragile, and
              difficult to maintain. However, they highlighted the possibility
              of automating complex calculations, paving the way for the
              development of modern computing technology. Innovators like
              Pascal, Leibniz, and Babbage set the stage for the transition to
              electronic computing, inspiring future advancements in the field.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
