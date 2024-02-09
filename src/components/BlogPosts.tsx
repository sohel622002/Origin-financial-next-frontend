import Image from "next/image";
import Link from "next/link";
import SuccessBorderedButton from "./(custom buttons)/SuccessBorderedButton";

const blogs = [
  {
    id: 1,
    title:
      "Common Pediatric illnesses and this is some long text that shold truncate",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
  },
  {
    id: 2,
    title: "Common Pediatric illnesses 101",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
  },
  {
    id: 3,
    title: "Common Pediatric illnesses 102",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
  },
  {
    id: 4,
    title: "Common Pediatric illnesses 103",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod explicabo eos ad hic placeat magni quibusdam deserunt non in id?",
  },
];

export default function BlogPosts({ homesection } : { homesection?: boolean} ) {
  return (
    <div>
      <div className="grid sm:grid-cols-2 min-[1600px]:grid-cols-3 sm:gap-4 gap-2 my-5">
        {blogs.map((b) => (
          <div className="p-5 bg-white shadow-xl rounded-xl" key={b.id}>
            <Image draggable={false}
              src="/Assets/blog_post_image_01.jpg"
              width={500}
              height={150}
              priority={true}
              alt="blog image"
              className="w-full h-[280px] object-cover rounded-xl"
            />
            <div className="mt-3 flex flex-col gap-2 items-start">
              <h2 className="text-xl font-semibold line-clamp-1">{b.title}</h2>
              <p className="text-gray-400 line-clamp-3">{b.desc}</p>
              <Link
                href={`/blog/${b.id}`}
                className="bg-[rgb(127,162,228)] hover:bg-[rgba(127,162,228,.8)] text-white px-5 py-3 rounded-full"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-7">
        {/* This button can take onclick func. as per need */}
        {homesection ? <SuccessBorderedButton extraclasses="border-none">
          See More
        </SuccessBorderedButton> : 
        <SuccessBorderedButton extraclasses="border-none">
          Load More
        </SuccessBorderedButton>
        }
      </div>
    </div>
  );
}
