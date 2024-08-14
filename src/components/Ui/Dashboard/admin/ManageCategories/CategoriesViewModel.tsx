import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import {
  useGetCategoryByIdQuery,
  useUpdateCategoryByIdMutation,
} from "@/redux/api/category/categoryApi";
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

type CategoryViewModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedRow: any;
};

export default function CategoryViewModal({
  open,
  setOpen,
  selectedRow,
}: CategoryViewModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  //: Get Pet By Id
  const {
    data: category,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetCategoryByIdQuery(selectedRow?.id as string);

  //: update pet info handler
  const [updateCategoryData, { isLoading: isUpdatCategoryInfoLoading }] =
    useUpdateCategoryByIdMutation();

  console.log("selectedRow", category);

  //: Default Values
  const defaultValues = {
    name: category?.data?.name,
    slug: category?.data?.slug,
    thumbnail: category?.data?.thumbnail,
  };

  console.log("defaultValues", defaultValues);

  const handleUpdatePetInfo: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating Pet Info...");
    try {
      const updatedInfo = {
        id: selectedRow?.id,
        updatedInfo: {
          ...data,
        },
      };

      console.log("updatedInfo", updatedInfo);

      //: Update Category Info
      const response = await updateCategoryData(updatedInfo).unwrap();
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
                onSubmit={handleUpdatePetInfo}
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
                    name="slug"
                    fullWidth={true}
                    label="Slug*"
                    type="text"
                  />
                </div>
                <Box
                  sx={{
                    my: 3,
                  }}
                >
                  <PInput
                    name="thumbnail"
                    fullWidth={true}
                    label="Photo*"
                    type="text"
                    size="medium"
                    disabled={true}
                  />
                </Box>
                <Box className="!mt-10">
                  <Button
                    type="submit"
                    sx={{
                      backgroundColor: "#f04336",
                    }}
                  >
                    Update Category Info
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
