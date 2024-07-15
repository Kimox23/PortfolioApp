"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import dataInformation from "/app/assets/image/exploration.png";
import binaryInformation from "/app/assets/image/binary-code.png";
import hardwareAndSoftware from "/app/assets/image/software-developer.png";
import nueralNetwork from "/app/assets/image/neural.png";
import database from "/app/assets/image/database-management.png";

export function FirstWork() {
  const tabs = [
    {
      title: "Data and Information",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-300 to-purple-400">
          <p>Data and Information</p>
          <div>
            <Image
              className="float-left mx-3"
              src={dataInformation}
              alt=" Data and Information"
              width={200}
              height={200}
            />
            <p className="font-normal text-2xl mt-4">
              Data is made up of raw, unprocessed facts and figures, like
              numbers, dates, and text strings that, by themselves, don't hold
              much meaning. When this data is organized or structured in a way
              that makes sense, it becomes information. For instance, a list of
              sales figures turns into valuable information when you analyze it
              to spot trends and patterns. The quality of data—how accurate,
              complete, and reliable it is—determines how useful the information
              will be. Good data is crucial for making smart decisions in areas
              like business, healthcare, and education. In marketing, for
              example, analyzing customer data can reveal behaviors and
              preferences, helping companies tailor their strategies
              effectively.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Binary Representation",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-300 to-purple-400">
          <p>Binary Representation</p>
          <div>
            <Image
              className="float-right mx-3"
              src={binaryInformation}
              alt=" Data and Information"
              width={200}
              height={200}
            />
            <p className="font-normal text-2xl mt-4">
              Computers operate using the binary number system, which consists
              of only two digits: 0 and 1. This system is the foundation for all
              computing operations and data processing. A bit, short for binary
              digit, is the smallest unit of data in computing and can have a
              value of either 0 or 1. Eight bits together form a byte, which can
              represent a wide range of values and characters. Binary
              arithmetic, including operations such as addition, subtraction,
              multiplication, and division, is essential for computing tasks.
              Characters and symbols are encoded in binary using standards like
              ASCII and Unicode, which map binary values to specific characters.
              Understanding binary representation is crucial for comprehending
              how computers perform tasks, store information, and execute
              commands, as it is the language that computers inherently
              understand.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Hardware and Software",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-300 to-purple-400">
          <p>Hardware and Software</p>
          <div>
            <Image
              className="float-left mx-3"
              src={hardwareAndSoftware}
              alt=" Data and Information"
              width={200}
              height={200}
            />
            <p className="font-normal text-2xl mt-4">
              Hardware refers to the physical parts of a computer, such as the
              CPU, memory, storage devices, and input/output devices, which all
              work together to carry out computing tasks. Software is a
              collection of instructions that tells the hardware what to do. It
              includes system software like operating systems that manage the
              hardware and provide a user interface, and application software
              like word processors, games, and web browsers that perform
              specific tasks. The operating system is crucial as it manages both
              the hardware and software resources, allowing users to run
              applications and manage files. Software development involves
              writing programs using languages like Python, Java, and C++, which
              are then used to create applications tailored to various needs.
              The interaction between hardware and software enables computers to
              perform a vast range of functions, from simple tasks to complex
              simulations and applications.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Networking",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-300 to-purple-400">
          <p>Networking</p>
          <div>
            <Image
              className="float-right mx-3"
              src={nueralNetwork}
              alt=" Data and Information"
              width={200}
              height={200}
            />
            <p className="font-normal text-2xl mt-4">
              Networking involves linking multiple devices to share resources
              and information efficiently. Networks can be as small as a local
              area network or as extensive as a wide area network that covers
              large distances. Important components of a network include
              routers, which direct data traffic; switches, which connect
              devices within a network; modems, which convert signals for
              internet access; and access points, which provide wireless
              connectivity. Data can be transmitted through wired or wireless
              means, with protocols like TCP/IP controlling how data is sent and
              received. The internet is a global network of interconnected
              networks, and the World Wide Web is a collection of accessible
              resources and services. Network security is essential to protect
              data and resources from threats like viruses, malware, and
              unauthorized access, using tools like firewalls, encryption, and
              secure passwords.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Databases",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-r from-blue-300 to-purple-400">
          <p>Databases</p>
          <div>
            <Image
              className="float-left mx-3"
              src={database}
              alt=" Data and Information"
              width={200}
              height={200}
            />
            <p className="font-normal text-2xl mt-4">
              A database is an organized collection of data that can be easily
              accessed, managed, and updated. Databases store data in a
              structured format, often in tables. Different database models,
              such as hierarchical, network, relational, and object-oriented,
              provide various ways to organize data. Relational databases, which
              are common, use tables where rows represent records and columns
              represent fields. SQL is used to manage and query the data in
              these databases. Database Management Systems like MySQL,
              PostgreSQL, and MongoDB offer tools to create, maintain, and
              interact with databases, ensuring data integrity, security, and
              performance. Databases are vital for numerous applications, from
              simple contact lists to complex systems like customer relationship
              management (CRM) and data warehousing, facilitating efficient data
              storage, retrieval, and analysis.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
