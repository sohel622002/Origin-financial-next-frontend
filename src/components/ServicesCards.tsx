import Image from "next/image";
import Link from "next/link";

import { FaChevronRight } from "react-icons/fa";
import { ScaleAnimation } from "./animations/animations";

const cardDetails = [
  {
    id: 101,
    img: "/Assets/services/Neurology-Services-icon.svg",
    title: "Neurology Services",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero dolor cum est quidem asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero dolor cum est",
  },
  {
    id: 102,
    img: "/Assets/services/Orthopedic-Services-icon.svg",
    title: "Orthopedic Services",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero dolor cum est quidem asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  },
  {
    id: 103,
    img: "/Assets/services/Pediatric-Care-icon.svg",
    title: "Pediatric Care",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero dolor cum est quidem asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  },
  {
    id: 104,
    img: "/Assets/services/Primary-Healthcare-icon.svg",
    title: "Primary Healthcare",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero dolor cum est quidem asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  },
  {
    id: 105,
    img: "/Assets/services/Gynecology-Services-icon.svg",
    title: "Gynecology Services",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero dolor cum est quidem asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. ",
  },
  {
    id: 106,
    img: "/Assets/services/Dental-Care-icon.svg",
    title: "Dental Care",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit Nostrum libero dolor cum est quidem asperiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum libero dolor",
  },
];

export default function ServicesCards({ doNotAdd }: { doNotAdd?: number }) {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5">
      {cardDetails.map((card) => {
        if (card.id == doNotAdd) return;
        return (
          <div
            key={card.id}
          >
            <div className="rounded-xl p-5 shadow-xl bg-white flex items-start flex-col gap-3">
              <Image draggable={false} src={card.img} alt={card.title} width={48} height={48} />
              <h3 className="text-lg font-bold text-[rgb(23,15,74)]">
                {card.title}
              </h3>
              <p className="text-gray-400 line-clamp-5">{card.desc}</p>
              <Link
                href="/services"
                className="px-5 py-4 bg-green-500 text-white rounded text-sm transition-all flex items-center justify-center gap-3 leading-none hover:scale-x-105 origin-left"
              >
                Learn More{" "}
                <span>
                  <FaChevronRight />
                </span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
