import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ReviewItems from "./ReviewItems";
import { SlideInFromLeft } from "../animations/animations";

export default function Testimonials() {
  return (
    <section className="mx-auto px-5">
      <SlideInFromLeft className="flex flex-col gap-3 mb-9 lg:w-4/5 p-3 mx-auto">
        {/* <div className="flex flex-col gap-3 mb-9 max-w-screen-xl p-3 mx-auto"> */}
        <p className="text-green-500 tracking-[8px] font-semibold">
          TESTIMONIALS
        </p>
        <h1 className="text-3xl font-bold">What our clients say</h1>
        <p className="max-w-[500px] text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          et a distinctio, pariatur cumque nemo!
        </p>
        {/* </div> */}
      </SlideInFromLeft>

      <div className="overflow-x-hidden">
        <Carousel className="w-[90%] lg:w-4/5 mx-auto">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent>
                      <ReviewItems />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="sm:flex hidden shadow-2xl" />
          <CarouselNext className="sm:flex hidden" />
        </Carousel>
      </div>
    </section>
  );
}
