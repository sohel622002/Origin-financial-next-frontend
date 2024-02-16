"use client";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import ActionButton from "./(custom buttons)/ActionButton";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomeHeader({
  visibleSection,
}: {
  visibleSection: string;
}) {
  const [mobileNavOpne, setMobileNavOpne] = useState(false);

  useEffect(() => {
    setMobileNavOpne(false);
  }, []);

  return (
    <>
      <header className="px-5 p-3 flex items-center justify-between bg-white shadow-xl sticky top-0 z-50">
        <div className="h-12 lg:h-16">
          <Link href="/">
            <Image
              draggable={false}
              src="/Assets/site-logo.svg"
              width={250}
              height={50}
              alt="logo"
              className="object-contain h-full w-auto"
            />
          </Link>
        </div>
        <div className="flex items-center gap-[30px] font-semibold">
          <ul className="gap-5 hidden xl:flex">
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-green-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 ${
                visibleSection == "home-top-section"
                  ? "after:scale-x-100 text-green-500"
                  : ""
              }`}
            >
              <Link href="#home-top-section">Home</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-green-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 ${
                visibleSection == "home-our-mission"
                  ? "after:scale-x-100 text-green-500"
                  : ""
              }`}
            >
              <Link href="#home-our-mission">Our Mission</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-green-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 ${
                visibleSection == "home-our-partners"
                  ? "after:scale-x-100 text-green-500"
                  : ""
              }`}
            >
              <Link href="#home-our-partners">Our Partners</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-green-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 ${
                visibleSection == "home-testimonials"
                  ? "after:scale-x-100 text-green-500"
                  : ""
              }`}
            >
              <Link href="#home-testimonials">Testimonials</Link>
            </li>
            <li
              className={`Our-services-link relative after:absolute after:w-full after:h-[3px] after:bg-green-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 ${
                visibleSection == "home-our-services"
                  ? "after:scale-x-100 text-green-500"
                  : ""
              }`}
            >
              <Link href="#home-our-services">Our Services</Link>
              <div className="absolute top-full left-0 pt-3">
                <ul className="w-max bg-white shadow-md">
                  <li className="flex flex-col p-3 gap-2">
                    <Link href="/">Service 1</Link>
                    <Link href="/">Service 2</Link>
                    <Link href="/">Service 3</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-green-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 ${
                visibleSection == "home-our-team"
                  ? "after:scale-x-100 text-green-500"
                  : ""
              }`}
            >
              <Link href="#home-our-team">Our Teams</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-green-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 ${
                visibleSection == "home-our-blogs"
                  ? "after:scale-x-100 text-green-500"
                  : ""
              }`}
            >
              <Link href="#home-our-blogs">Blogs</Link>
            </li>
            <li
              className={`relative after:absolute after:w-full after:h-[3px] after:bg-green-500 after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 ${
                visibleSection == "home-faq"
                  ? "after:scale-x-100 text-green-500"
                  : ""
              }`}
            >
              <Link href="#home-faq">FAQ</Link>
            </li>
          </ul>
          <ActionButton extraclasses="px-10 hidden xl:block">
            Whatsapp Us
          </ActionButton>
          <span
            className="xl:hidden text-2xl"
            onClick={() => setMobileNavOpne(!mobileNavOpne)}
          >
            {mobileNavOpne ? <FaXmark /> : <FaBars />}
          </span>
        </div>
      </header>
      <section
        className={`flex fixed inset-0 z-40 bg-white text-[rgb(23,15,74)] w-full h-screen transition-transform duration-300 transform ${
          mobileNavOpne ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-[30px] font-semibold w-full pt-20">
          <ul className="gap-5 flex flex-col text-xl p-5">
            <li
              className={
                visibleSection == "home-top-section" ? "text-green-500" : ""
              }
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="#home-top-section"
              >
                Home
              </Link>
            </li>
            <li
              className={
                visibleSection == "home-our-mission" ? "text-green-500" : ""
              }
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="#home-our-mission"
              >
                Our Mission
              </Link>
            </li>
            <li
              className={
                visibleSection == "home-our-partners" ? "text-green-500" : ""
              }
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="#home-our-partners"
              >
                Our Partners
              </Link>
            </li>
            <li
              className={
                visibleSection == "home-testimonials" ? "text-green-500" : ""
              }
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="#home-testimonials"
              >
                Testimonials
              </Link>
            </li>
            <li
              className={`Our-services-link ${visibleSection == "home-our-services" ? "text-green-500" : ""}
              `}
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="#home-our-services"
              >
                Our Services
              </Link>
              <div className="absolute top-full left-0 pt-3">
                <ul className="w-max bg-white shadow-md">
                  <li className="flex flex-col p-3 gap-2">
                    <Link href="/">Service 1</Link>
                    <Link href="/">Service 2</Link>
                    <Link href="/">Service 3</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className={
                visibleSection == "home-our-team" ? "text-green-500" : ""
              }
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="#home-our-team"
              >
                Our Teams
              </Link>
            </li>
            <li
              className={
                visibleSection == "home-our-blogs" ? "text-green-500" : ""
              }
            >
              <Link
                onClick={() => setMobileNavOpne(false)}
                href="#home-our-blogs"
              >
                Blogs
              </Link>
            </li>
            <li
              className={visibleSection == "home-faq" ? "text-green-500" : ""}
            >
              <Link onClick={() => setMobileNavOpne(false)} href="#home-faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="rounded-full bg-[rgb(23,15,75)] text-white text-lg flex items-center gap-2 px-5 py-2"
              >
                <IoCall />
                <span className="mt-1">1300 TO BE SURE</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
