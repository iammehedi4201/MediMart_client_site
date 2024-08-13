import { IProduct } from "@/types";

const ProductFeatues = ({description,metaKey,company}: IProduct) => {
  return (
    <div className="mt-6 max-w-2xl">
      <h3 className="text-xl font-bold text-gray-800">Product Features</h3>

      <ul className="grid sm:grid-cols-2 gap-3 mt-4">
        <li className="flex items-center text-sm text-gray-600 capitalize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            className="mr-4 bg-[#f04336] fill-white rounded-full p-[3px]"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
              data-original="#000000"
            />
          </svg>
         {company}
        </li>
        <li className="flex items-center text-sm text-gray-600 capitalize">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            className="mr-4 bg-[#f04336] fill-white rounded-full p-[3px]"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
              data-original="#000000"
            />
          </svg>
         {metaKey}
        </li>
      </ul>

      <div className="mt-6">
        <h3 className="text-xl font-bold text-gray-800">Product Description</h3>
        <p className="text-sm text-gray-600 mt-4 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductFeatues;
