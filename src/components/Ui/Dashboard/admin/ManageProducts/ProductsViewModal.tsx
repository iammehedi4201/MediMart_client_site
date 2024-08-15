import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { useGetAllCategoriesQuery } from "@/redux/api/category/categoryApi";
import {
  useGetProductByIdQuery,
  useUpdateProductByIdMutation,
} from "@/redux/api/product/productApi";
import { useGetAllVarientsQuery } from "@/redux/api/varients/varientsApi";
import { ICategory } from "@/types";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type ProductViewModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedRow: any;
};

export default function ProductViewModal({
  open,
  setOpen,
  selectedRow,
}: ProductViewModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  //: Get Pet By Id
  const {
    data: product,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetProductByIdQuery(selectedRow?.id as string);

  //: update pet info handler
  const [updateProductInfo, { isLoading: isUpdateProductInfoLoading }] =
    useUpdateProductByIdMutation();

  console.log("selectedRow", product);

  // get all product categories
  const { data: categories } = useGetAllCategoriesQuery(undefined);

  const productCategoryOptions = categories?.data?.map(
    (category: ICategory) => ({
      label: category.name,
      value: category._id,
    })
  );

  // get all variants
  const { data: variants } = useGetAllVarientsQuery(undefined) as { data: any };

  const productVariantOptions = variants?.data?.map((variant: any) => ({
    label: variant.name + " " + "MG",
    value: variant._id,
  }));

  //: Default Values
  const defaultValues = {
    name: product?.data?.name,
    metaKey: product?.data?.metaKey,
    price: product?.data?.price,
    discount: product?.data?.discount,
    company: product?.data?.company,
    quantity: product?.data?.quantity,
    categories: {
      primary: product?.data?.categories?.primary,
      secondary: product?.data?.categories?.secondary,
      tertiary: product?.data?.categories?.tertiary,
    },
    variants: product?.data?.variants?.map((variant: any) => variant._id),
    description: product?.data?.description,
  };

  console.log("defaultValues", defaultValues);

  const handleUpdateProductInfo: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating Pet Info...");
    try {
      const updatedInfo = {
        id: selectedRow?.id,
        updatedInfo: {
          ...data,
          quantity: Number(data.quantity),
          price: Number(data.price),
          discount: Number(data.discount),
        },
      };

      console.log("updatedInfo", updatedInfo);

      //: Update Pet Info
      const response = await updateProductInfo(updatedInfo).unwrap();
      toast.success(response?.message, { id: toastId, duration: 3000 });
      setOpen(false);
    } catch (error: any) {
      toast.error(error?.message, { id: toastId, duration: 3000 });
    }
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box>
          <SectionHeader
            HeaderTitle="Update Pet Info"
            subTitle={`Dashboard/${selectedRow?.id}`}
          />
          <div className="font-[sans-serif] text-[#333] my-10">
            <div className="mx-4 mb-4">
              <PForm
                onSubmit={handleUpdateProductInfo}
                defaultValues={defaultValues}
                className="max-w-6xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
              >
                <div className="grid md:grid-cols-2 gap-y-7 gap-x-10">
                  <PInput
                    name="name"
                    fullWidth={true}
                    label="Product Name*"
                    type="text"
                  />
                  <PInput
                    name="metaKey"
                    fullWidth={true}
                    label="MetaKey*"
                    type="text"
                  />
                  <PInput
                    name="price"
                    fullWidth={true}
                    label="Price*"
                    type="text"
                  />
                  <PInput
                    name="discount"
                    fullWidth={true}
                    label="Discount*"
                    type="text"
                  />
                  <PInput
                    name="company"
                    fullWidth={true}
                    label="Company*"
                    type="text"
                  />
                  <PInput
                    name="quantity"
                    fullWidth={true}
                    label="Quantity*"
                    type="text"
                  />

                  {/* <PMultipleSelect
                    name="categories"
                    fullWidth={true}
                    label="Categories*"
                    options={productCategoryOptions}
                    multiple={true}
                  />
                  <PMultipleSelect
                    name="variants"
                    fullWidth={true}
                    label="Variants*"
                    options={productVariantOptions}
                    multiple={true}
                  /> */}
                </div>
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
                <Box className="!mt-10">
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "#f04336",
                    }}
                  >
                    Update Pet Info
                  </Button>
                </Box>
              </PForm>
            </div>
          </div>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
