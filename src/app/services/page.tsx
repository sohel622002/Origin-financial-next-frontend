import Header from "@/components/Header";
import ServicesCards from "@/components/ServicesCards";
import { SlideInFromLeft, SlideInFromRight } from "@/components/animations/animations";
import Image from "next/image";

export default function Services() {
  return (
    <>
    <Header />
      <section className="bg-[rgb(191,213,252)] py-20">
        <div className="max-w-screen-xl mx-auto flex gap-10 items-center px-5 flex-col lg:flex-row">
          <h1 className="flex-1 lg:text-4xl text-3xl font-semibold">
            Services1-Financial Advicer
          </h1>
          <p className="flex-1 font-semibold text-[rgb(32,30,80)] leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            vero, nemo natus maiores modi quia quas perferendis eum quibusdam
            harum id culpa soluta alias error adipisci laborum sint odit illo!
          </p>
        </div>
      </section>
      <div className="relative p-3 pt-0 before:block before:top-0 before:left-0 before:h-1/2 before:w-full before:-z-10 before:absolute before:bg-[rgb(191,213,252)]">
        <div className="max-w-screen-xl mx-auto">
          <Image draggable={false}
            src="/Assets/services-page-assets/services-hero.jpg"
            width={1280}
            height={500}
            alt="services hero image"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
      <section className="p-3 lg:px-10 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10 lg:gap-20 lg:flex-row lg:my-10">
          <div className="flex-1 flex flex-col">
            <SlideInFromLeft>
              <Image draggable={false}
                src="/Assets/services-page-assets/services-surgen.jpg"
                alt="surgen"
                width={600}
                height={800}
                className="rounded-3xl"
              />
            </SlideInFromLeft>
            <SlideInFromRight>
              <div className="mt-6">
                <h1 className="text-3xl font-semibold text-[rgb(23,15,74)]">
                  Your pathway to enhanced brain health
                </h1>
                <p className="mt-3 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Duis cursus, mi quis viverra
                  ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                  erat.
                </p>
              </div>
            </SlideInFromRight>
          </div>
          <div className="flex-1 flex flex-col lg:flex-col-reverse">
            <SlideInFromRight>
              <Image draggable={false}
                src="/Assets/services-page-assets/doc-4.jpg"
                alt="surgen"
                width={600}
                height={800}
                className="rounded-3xl"
              />
            </SlideInFromRight>
            <SlideInFromLeft>
              <div className="mt-6 mb-6 lg:mt-0">
                <h1 className="text-3xl font-semibold text-[rgb(23,15,74)]">
                  Your pathway to enhanced brain health
                </h1>
                <p className="mt-3 text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Duis cursus, mi quis viverra
                  ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                  erat.
                </p>
              </div>
            </SlideInFromLeft>
          </div>
        </div>
      </section>

      <section className="bg-[rgb(191,213,252)] py-20 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto text-[rgb(23,15,73)]">
          <div className="text-center px-3">
            <h1 className="text-3xl mb-3 font-semibold">
              Our guiding principles
            </h1>
            <p className="max-w-[850px] mx-auto">
              At Clinicx, our core values shape every aspect of our care,
              ensuring that your well-being remains at the heart of our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-12 px-3">
            <SlideInFromLeft>
              <div className="flex flex-col items-center gap-6">
                <Image draggable={false}
                  src="/Assets/services-page-assets/guidline01.svg"
                  alt="guidline one"
                  width={80}
                  height={80}
                />
                <h3 className="text-2xl font-semibold">Compassionate care</h3>
                <p className="text-center max-w-96">
                  We provide empathetic care, recognizing the unique needs and
                  concerns of each patient.
                </p>
              </div>
            </SlideInFromLeft>
            <SlideInFromRight>
              <div className="flex flex-col items-center gap-6">
                <Image draggable={false}
                  src="/Assets/services-page-assets/guidline02.svg"
                  alt="guidline one"
                  width={80}
                  height={80}
                  className="h-20"
                />
                <h3 className="text-2xl font-semibold">Collaborative approach</h3>
                <p className="text-center max-w-96">
                  By working closely with patients, families, and experts, we
                  create a shared journey towards optimal health.
                </p>
              </div>
            </SlideInFromRight>
            <SlideInFromLeft>
              <div className="flex flex-col items-center gap-6">
                <Image draggable={false}
                  src="/Assets/services-page-assets/guidline03.svg"
                  alt="guidline one"
                  width={80}
                  height={80}
                />
                <h3 className="text-2xl font-semibold">Unwavering excellence</h3>
                <p className="text-center max-w-96">
                  Driven by a commitment to the highest medical standards, we
                  strive for excellence in every service we offer.
                </p>
              </div>
            </SlideInFromLeft>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="my-20 max-w-screen-xl mx-auto p-5">
          <Image draggable={false}
            src="/Assets/patterns/s-patterns.svg"
            alt="s-pattern"
            width={200}
            height={500}
            className="absolute -z-10 right-0 top-1/2 -translate-y-1/2"
          />
          <h1 className="text-3xl font-extrabold">
            Find out more about our other services
          </h1>
          {/* If you do not want to add specific service pass that id here... */}
          <ServicesCards doNotAdd={101} />
        </div>
      </section>
    </>
  );
}
