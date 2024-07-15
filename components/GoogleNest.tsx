"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import FunctionalityImage from "/app/assets/image/functionality-image.jpeg";
import InterfaceImage from "/app/assets/image/interface-image.png";
import EncryptionImage from "/app/assets/image/encryption-image.png";
import VulnerabilityImage from "/app/assets/image/vulnerability-image.jpg";

export function GoogleNest() {
  return (
    <div className="grid grid-cols-2 gap-4 items-start">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            What are the primary functionalities of this tool?
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={FunctionalityImage}
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
              Nest is a brand of smart home products that include a thermostat,
              smoke detectors, security cameras, doorbells, and alarm systems.
              These gadgets provide a system for technological innovations for
              the home by allowing users to connect to the internet and control
              them through the mobile app or voice assistants.
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
            What do you find most intuitive or difficult about the interface?
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={InterfaceImage}
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
              The most intuitive of all the design features that the Nest
              Interface possesses is the mobile app for general use, which gives
              users the control and monitoring of all the connected devices from
              one platform. Users love the simple and smooth interface and the
              possibility to get the updates instantly. Still, there are some
              customers, for example, who need to connect Nest products to smart
              home ecosystems of other companies apart from Google as well as
              experience a learning curve in case they have no previous
              knowledge of smart home technology.
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
            What encryption and access control mechanisms are in the place?
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={EncryptionImage}
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
              Nest products ensure data exchange security by using the latest
              encryption protocols. They use HTTPS for internet data and TLS
              (Transport Layer Security) for communication. Besides, access
              control is done using the user account password and two-factor
              authentication (2FA) mechanisms that only allow the authorized
              users to control the devices through the devices web interface.
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
            Are there any reported security incidents or vulnerabilities
            associated with the tool?
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={VulnerabilityImage}
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
              Although so far all products from Nest are very safe, some cases
              of security insufficiencies have been reported in the past. For
              instance, in 2019, some people had their improper access to their
              Nest cameras through hackers who hacked their passwords. If the
              combination of their own passwords had been compromised the people
              involved would not have had the problem. Google has taken a set of
              measures for improved security among which are the mandatory 2FA
              and the enhanced password requirements that are to be scrupulously
              followed to prevent the above-mentioned incidents. Regular uploads
              of software updates and security patches are also available with
              the purpose of dealing with developing vulnerabilities.
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
