import Image from "next/image";
import SuccessBorderedButton from "./(custom buttons)/SuccessBorderedButton";
import { SlideInFromLeft } from "./animations/animations";
import Link from "next/link";

const doctors = [
  {
    name: "John Caret 01",
    exprt: "dentist",
    img: "/Assets/doc images/doc-1.webp",
  },
  {
    name: "Elisa Mercier",
    exprt: "gynaecologist",
    img: "/Assets/doc images/doc-2.webp",
  },
  {
    name: "Sarah Beyar",
    exprt: "dentist",
    img: "/Assets/doc images/doc-3.webp",
  },
  {
    name: "Maria Cloud",
    exprt: "gynaecologist",
    img: "/Assets/doc images/doc-4.jpg",
  },
  {
    name: "Jessica Baileys",
    exprt: "dentist",
    img: "/Assets/doc images/doc-5.jpg",
  },
  {
    name: "Samantha Youn",
    exprt: "gynaecologist",
    img: "/Assets/doc images/doc-6.jpg",
  },
];

export default function OurTeam() {
  return (
    <>
      <SlideInFromLeft className="grid grid-cols-2 sm:grid-cols-3 min-[1600px]:grid-cols-4 gap-3 sm:gap-5 mt-5">
        {doctors.map((info) => (
          <Link
            href="/teamdetails"
            key={info.name}
            className="p-2 sm:p-5 shadow-2xl bg-white rounded-xl"
          >
            <div className="max-w-[350px] lg:max-w-none aspect-square overflow-hidden rounded-lg">
              <Image draggable={false}
                src={info.img}
                width={350}
                height={350}
                alt="doc image"
                className="w-full object-cover"
              />
            </div>
            <h2 className="text-center mt-3 font-bold text-sm sm:text-xl text-[rgb(23,15,74)]">
              {info.name}
            </h2>
            <p className="text-center text-green-600 uppercase font-bold tracking-[2px] text-xs sm:text-sm">
              {info.exprt.toUpperCase()}
            </p>
          </Link>
        ))}
      </SlideInFromLeft>
      <div className="mt-5 text-center">
        <SuccessBorderedButton>Load More</SuccessBorderedButton>
      </div>
    </>
  );
}
