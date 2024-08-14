"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";

import { uploadImgToIMGBB } from "@/utils/uploadImgToIMGBB";
import { Box, Button, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// add product validation schema
const addVarientValidationSchema = z.object({});

// type for product
type Product = {};

// Default Values
type DefaultValues = {
  product: Product;
};

//: Default Values
const defaultValues: DefaultValues = {
  product: {},
};
const AddVarientForm = () => {
  //: router
  const router = useRouter();

  //:File state
  const [files, setFiles] = useState<any>([]);

  //: Handle add varient
  const handleAddVarient: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Addingg Varient...");

    try {
      const { imgUrls } = await uploadImgToIMGBB(files);

      const varientInfo = {
        name: data.name,
        price: data.price,
      };
      console.log("VarientInfo", varientInfo);
      //: Add Pet
      // const response = await addPet(petInfo).unwrap();
      //: Check if response is successful

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
      onSubmit={handleAddVarient}
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
          <PInput name="price" fullWidth={true} label="price*" type="text" />
        </Box>
      </div>

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
          Add Varient
        </Button>
      </Box>
    </PForm>
  );
};

export default AddVarientForm;
