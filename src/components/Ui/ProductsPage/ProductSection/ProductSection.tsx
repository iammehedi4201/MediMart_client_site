"use client";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import ProductCard from "../ProductCard/ProductCard";
import { IProduct } from "@/types";

const ProductSection = () => {
  //get all products
  const { data: products, isLoading: isProductLoading } =
    useGetAllProductsQuery(undefined);

  //loading spinner
  if (isProductLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
      <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-12">
        MediMart Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.data?.map((product: IProduct) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
