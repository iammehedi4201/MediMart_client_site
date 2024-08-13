import { ICategory } from "@/types";
import Image from "next/image";

const CategorySlider = ({ name, thumbnail }: ICategory) => {
  return (
    <div className="bg-white my-4 mx-4 p-3 shadow border-2 rounded  border-[#f04336]">
      <Image
        src={thumbnail}
        className="mx-auto text-center h-20 w-20 mb-4 object-cover"
        alt="profile-img"
        title="profile-img"
        width={50}
        height={50}
      />
      <h1 className="text-center text-gray-900 text-sm font-bold">{name}</h1>
    </div>
  );
};

export default CategorySlider;
