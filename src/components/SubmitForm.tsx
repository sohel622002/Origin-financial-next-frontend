"use client";

import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { SlideInFromLeft } from "./animations/animations";

export default function SubmitForm() {
  const [starState, setStarState] = useState<number>();

  function handleStarClick(e: React.MouseEvent<SVGElement>): void {
    const index = parseInt(e.currentTarget.dataset.index || "0", 10);
    if(index + 1 == starState) return;
    setStarState(index + 1)
  }

  return (
    <section className="bg-[rgb(247,247,245)] px-3 py-11 mt-10">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12">
        <SlideInFromLeft className="flex-1 flex flex-col gap-3">
          <p className="uppercase text-green-500 font-semibold text-lg">
            - submit you feedback
          </p>
          <h2 className="font-semibold text-4xl ">
            Fill the form to submit
            <br />
            you feedback
          </h2>
          <p className="max-w-[500px] text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            aliquam nemo, quae optio cupiditate autem voluptatem nulla laborum!
            Ratione, repellat.
          </p>
        </SlideInFromLeft>
        <div className="flex-1 bg-white p-3 py-4 lg:p-8 lg:py-10 rounded-3xl">
          <form action="">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col flex-1">
                  <label htmlFor="name" className="text-base lg:text-lg font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Carter"
                    className="p-2 px-5 text-base lg:text-lg shadow-xl rounded-full border border-gray-200"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="email" className="text-base lg:text-lg font-medium">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Email Address"
                    className="p-2 px-5 text-base lg:text-lg shadow-xl rounded-full border border-gray-200"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex flex-col flex-1">
                  <label htmlFor="phoneNumber" className="text-base lg:text-lg font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="(123) 456-7890"
                    className="p-2 px-5 text-base lg:text-lg shadow-xl rounded-full border border-gray-200"
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <label htmlFor="company" className="text-base lg:text-lg font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Company Name"
                    className="p-2 px-5 text-base lg:text-lg shadow-xl rounded-full border border-gray-200"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-base lg:text-lg font-medium">Your Services Rating</h3>
                <div className="flex gap-2 text-3xl text-gray-300">
                  {[...new Array(5)].map((_, index) => (
                    <FaStar
                      className={`cursor-pointer ${starState && index < starState && "text-green-500"}`}
                      key={index}
                      onClick={handleStarClick}
                      data-index={index}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="feedback" className="text-base lg:text-lg font-medium">
                  Additional feedback
                </label>
                <textarea
                  name="feedback"
                  id="feedback"
                  cols={30}
                  rows={8}
                  placeholder="If you have any additional feedback, please type it in here..."
                  className="border outline-1 focus:outline-slate-400 p-2"
                ></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="privacy-policy"
                  id="privacy"
                  className="border-gray-300 rounded h-4 w-4 mb-1"
                  style={{ accentColor: "green" }}
                />
                <label htmlFor="privacy" className="">
                  I have read and accept the{" "}
                  <Link href="/" className="text-green-500 underline">
                    Prvacy Policy
                  </Link>
                </label>
              </div>
              <div>
                <button className="p-4 pt-[18px] bg-green-500 text-white px-8 rounded-full hover:bg-green-600">
                  Submit feedback
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
