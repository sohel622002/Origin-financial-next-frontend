import BlogPosts from "@/components/BlogPosts";
import Header from "@/components/Header";

export default function Blog() {
  return (
    <>
    <Header />
      <div className="bg-[rgb(253,253,253)]">
        <section className="max-w-screen-lg mx-auto p-4 mt-10">
          <div className="flex flex-col text-center gap-3">
            <p className="text-green-500 font-semibold tracking-[8px]">BLOGS</p>
            <h1 className="text-3xl lg:text-5xl font-semibold">Our Featured Blogs</h1>
            <p className="text-gray-400 max-w-[700px] mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              nostrum tenetur mollitia! Fugiat voluptas odio ipsum eum
              reiciendis maiores, natus optio aliquid nobis aspernatur tenetur
              quis amet in! Debitis, hic.
            </p>
          </div>
          <BlogPosts />
        </section>
      </div>
    </>
  );
}
