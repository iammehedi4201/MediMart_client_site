"use client";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import ProductCard from "../ProductCard/ProductCard";
import { IProduct } from "@/types";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

const ProductSection = () => {
  const [page, setPage] = useState(1);
  //get all products
  const { data: products, isLoading: isProductLoading } =
    useGetAllProductsQuery([
      {
        name: "page",
        value: page,
      },
      {
        name: "limit",
        value: 10,
      },
    ]);

  const meta = products?.meta;

  //loading spinner
  if (isProductLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-full max-w-lg md:max-w-full">
      <h2 className="text-4xl text-center font-extrabold text-gray-800 mb-12">
        MediMart Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products?.data.length > 0 ? (
          products?.data?.map((product: IProduct) => (
            <ProductCard key={product._id} {...product} />
          ))
        ) : (
          <div className="w-full md:px-0 h-screen flex items-center justify-center">
            <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
              <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-[#f04336]">
                404
              </p>
              <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
                Product Not Found
              </p>
              <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
                Sorry, the Product you are looking for could not be found.
              </p>
            </div>
          </div>
        )}
      </div>
      <Stack spacing={2} mt={4} justifyContent={"center"} alignItems={"center"}>
        <Pagination
          count={meta?.totalPages}
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={(event: React.ChangeEvent<unknown>, value: number) =>
            setPage(value)
          }
        />
      </Stack>
    </div>
  );
};

export default ProductSection;
