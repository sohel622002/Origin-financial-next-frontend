import Header from "@/components/Header";
import RelatedBlogPost from "@/components/RelatedBlog";
import Image from "next/image";

export default async function IndiBlog() {
  return (
    <>
    <Header />
      <section className="max-w-screen-lg mx-auto mb-8 mt-8">
        <h3 className="text-2xl lg:text-4xl font-bold mb-5 ms-3">Navigation seasonal allergies:expert tips for relief</h3>
        <Image draggable={false}
          src="/Assets/blog_post_image_01.jpg"
          priority
          width={1200}
          height={500}
          alt="blog-post-image"
          className="max-h-[500px] object-cover object-top lg:rounded-3xl w-full"
        />

        <div className="shadow-2xl mt-5 p-3 lg:p-10 flex flex-col gap-5 ms-2 me-2 rounded-2xl">
          {/* This should replaced by .map() function */}
          <div>
            <h1 className="text-xl sm:text-3xl font-extrabold mb-3 text-[rgb(23,15,74)]">Understanding seasonal allergies: causes add triggers</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim fugit, quae magnam perferendis sed quam tempore architecto excepturi accusantium, optio dignissimos totam dolor consequuntur aliquam, praesentium recusandae nam incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim fugit, quae magnam perferendis sed quam tempore architecto excepturi accusantium, optio dignissimos totam dolor consequuntur aliquam, praesentium recusandae nam incidunt</p>
          </div>

          <div>
            <h1 className="text-xl sm:text-3xl font-extrabold mb-3 text-[rgb(23,15,74)]">Understanding seasonal allergies: causes add triggers</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim fugit, quae magnam perferendis sed quam tempore architecto excepturi accusantium, optio dignissimos totam dolor consequuntur aliquam, praesentium recusandae nam incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim fugit, quae magnam perferendis sed quam tempore architecto excepturi accusantium, optio dignissimos totam dolor consequuntur aliquam, praesentium recusandae nam incidunt</p>
          </div>

          <div>
            <h1 className="text-xl sm:text-3xl font-extrabold mb-3 text-[rgb(23,15,74)]">Understanding seasonal allergies: causes add triggers</h1>
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim fugit, quae magnam perferendis sed quam tempore architecto excepturi accusantium, optio dignissimos totam dolor consequuntur aliquam, praesentium recusandae nam incidunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo enim fugit, quae magnam perferendis sed quam tempore architecto excepturi accusantium, optio dignissimos totam dolor consequuntur aliquam, praesentium recusandae nam incidunt</p>
          </div>
        </div>

        <div className="mt-12 p-2">
          <h3 className="ps-2 pe-2 mb-12 font-extrabold text-xl sm:text-2xl text-[rgb(23,15,74)]">Related our other blog posts</h3>
          <div className="grid sm:grid-cols-3 gap-5">
            <RelatedBlogPost />
            <RelatedBlogPost />
            <RelatedBlogPost />
          </div>
        </div>
      </section>
    </>
  );
}
