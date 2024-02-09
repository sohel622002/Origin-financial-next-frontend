import { FaStar } from "react-icons/fa";

export default function ReviewItems() {
  return (
    <div className="px-2 pt-8 pb-0">
      <div className="flex gap-1 text-xl">
        <FaStar className="text-green-500" />
        <FaStar className="text-green-500" />
        <FaStar className="text-green-500" />
        <FaStar className="text-green-500" />
        <FaStar className="text-green-500" />
      </div>
      <p className="text-gray-500 mt-4 line-clamp-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
          repudiandae perferendis aut facere ducimus, officiis totam voluptate
          dignissimos ex assumenda quidem velit molestiae qui eum aperiam fugiat
          neque porro placeat.
      </p>
      <h4 className="text-xl font-bold mt-6">Sphia Moore</h4>
      <p className="text-green-500">Head of Marketing</p>
    </div>
  );
}
