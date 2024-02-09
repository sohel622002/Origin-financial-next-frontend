"use client";

import OurTeam from "@/components/OurTeam";
import ServicesCards from "@/components/ServicesCards";
import ActionButton from "@/components/(custom buttons)/ActionButton";

import Image from "next/image";
import Testimonials from "@/components/(testimonials)/Testimonials";
import QueAnsAccord from "@/components/FQAccordion";
import PartnersLogos from "@/components/PartnersLogos";
import {
  SlideInFromLeft,
  SlideInFromRight,
} from "@/components/animations/animations";
import BlogPosts from "@/components/BlogPosts";
import HomeHeader from "@/components/HomeHeader";
import { useEffect, useState } from "react";

const sectionIds = [
  "home-top-section",
  "home-our-mission",
  "home-our-partners",
  "home-testimonials",
  "home-our-services",
  "home-our-team",
  "home-our-blogs",
  "home-faq",
];

export default function Home() {
  const [visibleSection, setVisibleSection] = useState(sectionIds[0]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries : any) => {
      entries.forEach((entry : any) => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          setVisibleSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    const observeElement = (id : string) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    };

    sectionIds.forEach((id) => {
      observeElement(id);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <HomeHeader visibleSection={visibleSection} />
      <section
        className="lg:w-4/5 mx-auto mt-10 p-4"
        id="home-top-section"
      >
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-[59px] font-bold tracking-tight mb-4">
            Best Financial{" "}
            <span className="italic text-green-500"> Advisor </span> On Your
            Side
          </h1>
          <p className="text-gray-400 max-w-[800px] mx-auto mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            officiis, adipisci aspernatur optio veritatis sequi labore provident
            ratione ipsum consequuntur ad illum dolorem maiores facilis
            explicabo, nihil iure quibusdam eius.
          </p>
          <ActionButton extraclasses="px-[70px] mt-8">About Us</ActionButton>
        </div>
        <div className="max-w-[500px] lg:max-w-[750px] mx-auto mt-10">
          <Image
            draggable={false}
            src="/Assets/main_avatars.svg"
            width={1000}
            height={0}
            alt="avatars"
          />
        </div>
      </section>

      <section
        id="home-our-mission"
        className="lg:w-4/5 overflow-x-hidden mx-auto flex flex-col-reverse lg:flex-row gap-12 px-5 mt-20"
      >
        <SlideInFromLeft className="flex-1 flex justify-center">
          <Image
            draggable={false}
            src="/Assets/about-us.svg"
            alt="about us avatar"
            width={600}
            height={0}
            className="w-full lg:max-w-none max-w-[500px]"
          />
        </SlideInFromLeft>
        <SlideInFromRight className="flex-1 flex flex-col gap-3 lg:max-w-none max-w-[600px] mx-auto">
          <p className="text-green-500 font-semibold tracking-[8px]">
            ABOUT US
          </p>
          <h3 className="text-[40px] font-bold tracking-tight leading-none">
            Our Mission <span className="italic text-green-500">&</span> Visions
          </h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            optio enim porro! Atque asperiores ut dolore porro, cumque ipsa
            consequuntur voluptatibus alias libero at reprehenderit adipisci
            fugit placeat assumenda recusandae?
          </p>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, et?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 ">
            <div className="flex items-center gap-4">
              <Image
                draggable={false}
                src="/Assets/tick-mark-icon.svg"
                width={24}
                height={24}
                alt="tick mark svg"
              />{" "}
              <span>Open 24/7</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                draggable={false}
                src="/Assets/tick-mark-icon.svg"
                width={24}
                height={24}
                alt="tick mark svg"
              />{" "}
              <span>Over 20 clinics</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                draggable={false}
                src="/Assets/tick-mark-icon.svg"
                width={24}
                height={24}
                alt="tick mark svg"
              />{" "}
              <span>Over 100 doctors</span>
            </div>
            <div className="flex items-center gap-4">
              <Image
                draggable={false}
                src="/Assets/tick-mark-icon.svg"
                width={24}
                height={24}
                alt="tick mark svg"
              />{" "}
              <span>Duty pharmacy</span>
            </div>
          </div>
        </SlideInFromRight>
      </section>

      <section id="home-our-partners" className="px-3">
        <div className="lg:w-4/5 bg-[rgb(23,15,74)] text-white mx-auto my-16 lg:my-24 py-7 px-5 lg:px-16 rounded-xl">
          <p className="text-center">
            Partnered with 90% of Australia's retail insurers
          </p>
          <div className="mt-5">
            <PartnersLogos />
          </div>
        </div>
      </section>

      <section id="home-testimonials">
        <Testimonials />
      </section>

      <section className="relative" id="home-our-services">
        <div className="my-20 lg:w-4/5 mx-auto p-5">
          <Image
            draggable={false}
            src="/Assets/patterns/s-patterns.svg"
            alt="s-pattern"
            width={200}
            height={500}
            className="absolute -z-10 right-0 top-1/2 -translate-y-1/2"
          />

          <h3 className="text-lg font-semibold text-green-500 tracking-[8px]">
            SERVICES
          </h3>
          <h1 className="text-3xl font-extrabold">
            Comprehensive services,
            <span className="italic text-green-500">tailored for you</span>
          </h1>
          <ServicesCards />
        </div>
      </section>

      <section className="relative">
        <Image
          draggable={false}
          src="/Assets/patterns/circle-arrow-pattern.svg"
          width={128}
          height={100}
          alt="rounded arrow svg"
          className="absolute right-3 -top-20"
        />
        <div className="flex overflow-x-hidden flex-col items-center lg:flex-row lg:w-4/5 mx-auto my-10 min-h-[500px] gap-10 mt-7 p-4">
          <SlideInFromLeft className="flex-1 flex items-center">
            {/* <div className="flex-1 flex items-center"> */}
            <Image
              draggable={false}
              src="/Assets/experience-illustration.svg"
              alt="experience illustration"
              width={800}
              height={0}
              className="w-full max-w-[800px]"
            />
            {/* </div> */}
          </SlideInFromLeft>
          <SlideInFromRight className="flex-1 flex items-start flex-col gap-5 justify-center">
            {/* <div className="flex-1 flex items-start flex-col gap-5 justify-center"> */}
            <h3 className="text-lg font-semibold text-green-500 tracking-[8px]">
              EXPERIENCE
            </h3>
            <h1 className="text-3xl sm:text-5xl font-extrabold">
              we've been looking{" "}
              <span className="italic text-green-500">afer you</span> for years
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Assumenda officiis, adipisci aspernatur optio veritatis sequi
              labore provident ratione ipsum consequuntur ad illum dolorem
              maiores facilis explicabo, nihil iure quibusdam eius.
            </p>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, autem?
            </p>
            {/* </div> */}
          </SlideInFromRight>
        </div>
      </section>

      <section className="relative w-100 py-[90px] px-3 bg-[rgb(23,15,74)] p-4">
        <div className="relative z-10 lg:w-4/5 mx-auto text-white flex flex-col sm:flex-row gap-5 sm:items-center p-4">
          <div className="flex-1">
            <h1 className="font-bold text-3xl mb-3">Make an appontment now</h1>
            <p>
              Make an appointment at our medical clinic and trust our
              professionals to take care <br /> of your health.
            </p>
          </div>
          <div className="flex gap-4 font-semibold flex-wrap">
            <button className="py-3 px-7 rounded-full bg-[rgb(127,162,228)]">
              Call Us
            </button>
            <button className="py-3 px-7 rounded-full bg-white text-[rgb(23,15,74)]">
              Write Us
            </button>
          </div>
        </div>
        <Image
          draggable={false}
          src="/Assets/patterns/white-paper-plane-illustration.svg"
          alt="white paper plane svg"
          width={324}
          height={360}
          className="absolute left-0 bottom-0"
        />
        <Image
          draggable={false}
          src="/Assets/patterns/white-s-pattern.svg"
          alt="white rounded line"
          width={600}
          height={225}
          className="hidden sm:block sm:absolute right-0 bottom-0"
        />
        <Image
          draggable={false}
          src="/Assets/patterns/small-paper-plane.svg"
          alt="Small paper plane"
          width={64}
          height={64}
          className="absolute right-9 top-5"
        />
      </section>

      <section className="lg:w-4/5 mx-auto p-4 my-10" id="home-our-team">
        <h3 className="text-lg font-semibold text-green-500 tracking-[8px]">
          OUR TEAM
        </h3>
        <h1 className="text-3xl font-extrabold">
          Our{" "}
          <span className="italic text-green-500">team of professionals</span>{" "}
          to assist you
        </h1>
        <OurTeam />
      </section>

      <section className="lg:w-4/5 mx-auto" id="home-our-blogs">
        <BlogPosts homesection={true} />
      </section>

      <section className="my-10 overflow-x-hidden" id="home-faq">
        <div className="lg:w-4/5 gap-10 lg:gap-24 flex flex-col lg:flex-row mx-auto p-4">
          <SlideInFromLeft className="flex-1">
            <Image
              draggable={false}
              src="/Assets/FQ-illustration.svg"
              alt="Frequently asked querstions illustration"
              width={600}
              height={400}
              className="hue-rotate-[280deg] mx-auto w-full max-w-[600px]"
            />
          </SlideInFromLeft>
          <SlideInFromRight className="flex-1 w-full mx-auto flex items-center">
            <QueAnsAccord />
          </SlideInFromRight>
        </div>
      </section>
    </>
  );
}
