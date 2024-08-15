"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import PMultipleSelect from "@/components/Forms/PMultipleSelect";
import { useGetAllCategoriesQuery } from "@/redux/api/category/categoryApi";
import { useCreateProductMutation } from "@/redux/api/product/productApi";
import { useGetAllVarientsQuery } from "@/redux/api/varients/varientsApi";
import { ICategory } from "@/types";

import { uploadImgToIMGBB } from "@/utils/uploadImgToIMGBB";
import { Box, Button, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// add product validation schema
const addProductValidationSchema = z.object({});

// type for product
type DefaultValues = {
  name: string;
  slug: string;
  metaKey: string;
  price: number;
  discount: number;
  company: string;
  quantity: number;
  categories: string[];
  variants: string[];
  description: string;
  photos: string[];
};

//: Default Values
const defaultValues: DefaultValues = {
  name: "",
  slug: "",
  metaKey: "",
  price: 0,
  discount: 0,
  company: "",
  quantity: 0,
  categories: [],
  variants: [],
  description: "",
  photos: [],
};
const AddProductForm = () => {
  // router
  const router = useRouter();

  //File state
  const [files, setFiles] = useState<any>([]);

  // create product
  const [createProduct] = useCreateProductMutation();

  // get all product categories
  const { data: categories, isLoading } = useGetAllCategoriesQuery(undefined);

  const productCategoryOptions = categories?.data?.map(
    (category: ICategory) => ({
      label: category.name,
      value: category._id,
    })
  );

  // get all variants
  const { data: variants } = useGetAllVarientsQuery(undefined) as { data: any };

  console.log("variants", variants);
  

  const productVariantOptions = variants?.data?.map((variant: any) => ({
    label: variant.name + " " + "MG",
    value: variant._id,
  }));

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  //: Handle Register
  const handleAddProduct: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Addingg Pet...");

    try {
      const { imgUrls } = await uploadImgToIMGBB(files);

      const productInfo = {
        name: data.name,
        slug: data.slug,
        metaKey: data.metaKey,
        price: Number(data.price),
        discount: Number(data.discount),
        company: data.company,
        quantity: Number(data.quantity),
        categories: {
          primary: data.categories[0],
          secondary: data.categories[1],
          tertiary: data.categories[2],
        },
        variants: data.variants,
        description: data.description,
        photos: imgUrls,
      };
      // Add Product
      const response = await createProduct(productInfo).unwrap();

      //: response is successful
      toast.success(response?.message, { id: toastId, duration: 3000 });

      // toast.error(response?.message, { id: toastId, duration: 3000 });
    } catch (error: any) {
      error?.data?.err?.name === "ZodError"
        ? toast.error(error?.data?.message, { id: toastId, duration: 3000 })
        : toast.error(error?.data?.errorDetails, {
            id: toastId,
            duration: 3000,
          });
    }
  };

  return (
    <PForm
      onSubmit={handleAddProduct}
      defaultValues={defaultValues}
      // resolver={zodResolver(addProductValidationSchema)}
      className="max-w-7xl mx-auto bg-white sm:p-8 p-4 rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
    >
      <div className="grid md:grid-cols-2 gap-y-7 gap-x-10">
        <Box>
          <PInput
            name="name"
            fullWidth={true}
            label="Product Name*"
            type="text"
          />
        </Box>
        <Box>
          <PInput name="slug" fullWidth={true} label="Slug*" type="text" />
        </Box>
        <Box>
          <PInput
            name="metaKey"
            fullWidth={true}
            label="MetaKey*"
            type="text"
          />
        </Box>
        <Box>
          <PInput name="price" fullWidth={true} label="Price*" type="text" />
        </Box>
        <Box>
          <PInput
            name="discount"
            fullWidth={true}
            label="Discount*"
            type="text"
          />
        </Box>
        <Box>
          <PInput
            name="company"
            fullWidth={true}
            label="Company*"
            type="text"
          />
        </Box>
        <Box>
          <PInput
            name="quantity"
            fullWidth={true}
            label="Quantity*"
            type="text"
          />
        </Box>
        <Box>
          <PMultipleSelect
            name="categories"
            fullWidth={true}
            label="Categories*"
            options={productCategoryOptions}
            multiple={true}
          />
        </Box>
      </div>
      <Box
        sx={{
          my: 3,
        }}
      >
        <PMultipleSelect
          name="variants"
          fullWidth={true}
          label="Variants*"
          options={productVariantOptions}
          multiple={true}
        />
      </Box>
      <Box
        sx={{
          my: 3,
        }}
      >
        <PInput
          name="description"
          fullWidth={true}
          label="Description*"
          type="text"
          size="medium"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Tooltip title="Upload more then one photo">
          <input
            onChange={(e) => setFiles(e.target.files)}
            type="file"
            multiple
            placeholder="Upload Image"
            name="photos"
          />
        </Tooltip>
      </Box>
      <Box className="!mt-10">
        <Button
          type="submit"
          sx={{
            backgroundColor: "#f04336",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
          //   disabled={files.length === 0 ? true : false}
        >
          Add Product
        </Button>
      </Box>
    </PForm>
  );
};

export default AddProductForm;
