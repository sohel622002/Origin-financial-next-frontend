import LoadingSkeleton from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function EventCard() {
  return (
    <div className="shadow-2xl py-5 px-3 sm:px-7 flex gap-5 lg:gap-14 bg-white flex-col lg:flex-row rounded-lg">
      <div className="min-h-[300px] w-full lg:w-[350px]">
        <Suspense fallback={<LoadingSkeleton />}>
          <Image draggable={false}
            src="/Assets/events-assets/event-01.jpg"
            width={900}
            height={350}
            loading="lazy"
            alt="events pic"
            className="object-cover min-h-[300px] w-full lg:w-[350px]"
          />
        </Suspense>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[rgb(23,15,74)]">
          WPD & Eventor Casual Pitch Meeting
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          veritatis, cum, libero a pariatur velit rem reprehenderit veniam illo
          ratione vitae ipsa. Culpa, vero architecto!
        </p>
        <div className="flex gap-3 flex-col sm:flex-row">
          <div className="flex flex-col sm:flex-row flex-1 gap-3">
            <span className="flex-1">
              <h4 className="text-lg font-semibold text-[rgb(23,15,74)]">
                Venue
              </h4>
              <p className="text-gray-500">Nice, France</p>
            </span>
            <span className="flex-1">
              <h4 className="text-lg font-semibold text-[rgb(23,15,74)]">
                Thursday
              </h4>
              <p className="text-gray-500">Aug 12, 2021</p>
            </span>
            <span className="flex-1">
              <h4 className="text-lg font-semibold text-[rgb(23,15,74)]">
                Time
              </h4>
              <p className="text-gray-500">12:00 AM</p>
            </span>
          </div>
          <span className="flex items-center sm:justify-center min-w-[151px]">
            <Link
              href="/events/detail event"
              className="bg-[rgb(23,15,74)] text-white px-6 py-2 pt-[10px] rounded-full hover:bg-[rgb(27,22,63)]"
            >
              Read More
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
