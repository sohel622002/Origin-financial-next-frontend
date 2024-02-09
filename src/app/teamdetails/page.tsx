import Testimonials from "@/components/(testimonials)/Testimonials";
import Header from "@/components/Header";
import SubmitForm from "@/components/SubmitForm";
import {
  SlideInFromLeft,
  SlideInFromRight,
} from "@/components/animations/animations";
import Image from "next/image";

export default function TestimoniolsPage() {
  return (
    <>
    <Header />
      <section className="mt-0 lg:mt-10">
        <div className="relative overflow-x-hidden after:block after:h-1/2 after:absolute after:w-full after:bottom-0 after:left-0 after:bg-white px-0 lg:px-5">
          <div className="absolute w-52 rounded-full -z-30 aspect-square bg-blue-100 left-0 top-1/2 -translate-y-1/2 -translate-x-[40px]"></div>
          <div className="absolute w-[450px] rounded-full -z-30 aspect-square bg-blue-100 right-0 top-1/2 -translate-y-1/2 translate-x-[100px]"></div>
          <div className="max-w-screen-xl bg-white border-0 lg:border-2 border-gray-100 rounded-2xl  mx-auto lg:p-20 my-10">
            <div className="relative z-10 flex-col py-3 lg:flex-row flex gap-10 items-center justify-center">
              <div>
                <SlideInFromLeft>
                  <Image
                    draggable={false}
                    src="/Assets/team details/doctor-vector-icon.jpg"
                    width={350}
                    height={350}
                    alt="doctor pic"
                    className="border rounded-3xl aspect-square object-cover"
                  />
                </SlideInFromLeft>
              </div>
              <SlideInFromRight className="px-3 lg:p-0">
                <h1 className="text-xl lg:text-3xl font-bold text-[rgb(23,15,74)]">
                  Dr. John Carter
                </h1>
                <p className="text-lg lg:text-xl font-semibold text-green-500">
                  Pediatric
                </p>
                <div className="flex flex-col gap-1 mt-3 text-base lg:text-lg text-[rgb(55,46,113)] font-semibold">
                  <p>Joined in 2008</p>
                  <p>Professional Qualifications:</p>
                  <p>Certificate in Financial Needs</p>
                  <p>Education:</p>
                  <p>Hobbies:</p>
                  <p>Tell us a little bit about yourself:</p>
                  <p>What does origins financial mean to you</p>
                </div>
              </SlideInFromRight>
            </div>
          </div>
        </div>
        <Testimonials />
        <SubmitForm />
      </section>
    </>
  );
}
