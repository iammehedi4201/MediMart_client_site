"use client";
import { useGetAllCategoriesQuery } from "@/redux/api/category/categoryApi";
import { ICategory } from "@/types";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CategorySlider from "../../CategorySlider/CategorySlider";

const CategorySection = () => {
  // get all categories
  const {
    data: categories,
    error,
    isLoading,
  } = useGetAllCategoriesQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "30vh",
        padding: "20px",
        my: "50px",
      }}
    >
      <h1 className="font-bold text-2xl ml-28">Products Category</h1>

      <Container>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories?.map((category: ICategory) => (
            <SwiperSlide key={category._id}>
              <CategorySlider {...category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default CategorySection;
