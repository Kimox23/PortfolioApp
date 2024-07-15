import Image from "next/image";
import elecComputing from "/app/assets/image/electronic-computing.jpg";

export function ElectronicComputing() {
  return (
    <div>
      <Image
        src={elecComputing}
        height={200}
        width={400}
        alt="Electronic Computing"
        className="float-right mx-5"
      />
      <p className="font-normal text-xl">
        The shift from mechanical to electronic computing, showcased by the
        Atanasoff-Berry Computer (ABC) and the Electronic Numerical Integrator
        and Computer (ENIAC), was accelerated by World War II. The ABC,
        developed by John Atanasoff and Clifford Berry in the late 1930s,
        pioneered electronic digital computing. While limited in functionality,
        it laid the groundwork for future electronic computers. The ENIAC,
        completed in 1945 by John Presper Eckert and John Mauchly, was the first
        fully electronic general-purpose computer. It played a crucial role in
        military applications during the war, demonstrating the potential of
        electronic computing for rapid calculations and data processing. World
        War II's demands for faster and more accurate computation drove the
        development of electronic computing technology, marking a significant
        milestone in technological advancement.
      </p>
    </div>
  );
}
