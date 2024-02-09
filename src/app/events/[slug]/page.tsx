import Header from "@/components/Header";
import Image from "next/image";

export default function EventDetails({ params }: { params: { slug: string } }) {
  return (
    <>
    <Header />
    <section className="max-w-screen-xl mx-auto my-8">
      <div className="h-[350px] lg:h-[450px] relative">
        <Image draggable={false}
          src="/Assets/events-assets/event-01.jpg"
          alt="event main pic"
          width={1280}
          height={250}
          className="w-full h-full object-cover"
        />
        <div className="absolute left-8 bottom-8 bg-white text-[rgb(23,15,71)] font-semibold px-10 py-3 pt-[14px] text-lg lg:text-xl rounded">
          Paid
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-6 p-3">
        <div className="flex gap-2 text-rose-500 font-semibold text-xl">
          <span className="pe-2 border-e-[3px] border-rose-500">Date</span>
          <span className="pe-2 border-e-[3px] border-rose-500">Time</span>
          <span>Location</span>
        </div>
        <div className="flex lg:flex-row flex-col gap-6 lg:gap-10 items-start lg:items-center justify-between">
          <h3 className="text-3xl max-w-[750px] font-semibold tracking-wide">
            Founder Institute Dhaka Graduate Showcase & Networking Event
          </h3>
          <button className="bg-[rgb(23,15,74)] text-white px-12 py-[18px] pt-[20px] rounded-full">
            Join Now
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {[...new Array(10)].map((_, index) => (
            <span
              className="w-12 aspect-square rounded-full bg-slate-500"
              key={index}
            ></span>
          ))}
        </div>
        <p className="text-gray-500 text-lg lg:text-xl leading-[30px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          deserunt doloribus aut, ut quod veniam, laudantium quaerat libero
          perferendis labore nisi ipsa placeat praesentium? Dolorum, iure
          consequuntur ad nulla eos officia dignissimos, ea reiciendis beatae
          aliquam impedit, corrupti unde ut et vel optio illo atque officiis
          amet quo quas corporis!
        </p>
        <p className="text-gray-500 text-lg lg:text-xl leading-[30px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          deserunt doloribus aut, ut quod veniam, laudantium quaerat libero
          perferendis labore nisi ipsa placeat praesentium? Dolorum, iure
          consequuntur ad nulla eos officia dignissimos, ea reiciendis beatae
          aliquam impedit, corrupti unde ut et vel optio illo atque officiis
          amet quo quas corporis!
        </p>
      </div>
    </section>
    </>
  );
}
