import EventCard from "@/components/EventCard";
import Header from "@/components/Header";

export default function Events() {
  return (
    <>
    <Header />
      <section className="max-w-screen-xl mx-auto my-10 p-3">
        <h1 className="text-4xl font-semibold">Our Latest Events</h1>
        <div className="flex flex-col gap-6 mt-5">
          {[...new Array(3)].map((_, index) => (
            <EventCard key={index}/>
          ))}
        </div>
        <div className="mt-7 text-center">
          <button className="bg-[rgb(23,15,74)] text-white px-7 py-3 pt-[14px] rounded-full">
            Load more
          </button>
        </div>
      </section>
    </>
  );
}
