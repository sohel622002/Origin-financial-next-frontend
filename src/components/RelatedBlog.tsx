import Image from "next/image";

export default function RelatedBlogPost() {
  return (
    <div className="shadow-2xl p-3 rounded-xl pb-5 flex flex-col gap-2">
      <Image draggable={false}
        src="/Assets/blog_post_image_01.jpg"
        width={650}
        height={320}
        alt="related blog post"
        className="object-contain rounded-xl"
      />
      <h3 className="font-bold text-xl text-[rgb(23,15,74)]">Common pediatric illness</h3>
      <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quae saepe culpa officiis laboriosam blanditiis praesentium.</p>
    </div>
  );
}
