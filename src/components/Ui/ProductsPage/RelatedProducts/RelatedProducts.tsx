"use client";

import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import { IProduct } from "@/types";
import ProductCard from "../ProductCard/ProductCard";
import Image from "next/image";
import Link from "next/link";

const RelatedProducts = ({ productId }: { productId: string }) => {
  // get all products
  const {
    data: products,
    isLoading,
    error,
  } = useGetAllProductsQuery(undefined);

  // if found productId in products, filter out the current product
  const relatedProducts = (products?.data as IProduct[])?.filter(
    (product: IProduct) => product._id !== productId
  );

  // loading state
  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="font-sans tracking-wide p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto mx-auto">
      <h3 className="font-bold text-2xl my-5">Related Products</h3>
      {
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts?.map((product: IProduct) => (
            <div
              key={product._id}
              className=" w-[60%]   bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden border-2 border-[#f04336]"
            >
              <div className="p-6">
                <div className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    className="fill-gray-800 inline-block"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>

                <div className="w-full overflow-hidden mx-auto">
                  <Image
                    src={product.photos?.[0] ?? ""}
                    alt="Product 1"
                    className="w-full h-full object-cover"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="text-center bg-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500">{product.company}</p>
                <h5 className="text-lg text-gray-800 font-bold mt-6">
                  ৳{product.price}
                  <s className="text-gray-400 ml-2 font-medium">৳15</s>
                </h5>

                <Link
                  href={`/products/${product._id}`}
                  type="button"
                  className="w-full flex items-center justify-center gap-3 mt-6 px-3 py-3 bg-orange-600 text-base text-gray-100 font-semibold rounded-xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                      fill="white"
                    ></path>
                  </svg>
                  Add to cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default RelatedProducts;
