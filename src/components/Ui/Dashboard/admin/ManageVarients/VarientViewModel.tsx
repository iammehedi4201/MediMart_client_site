import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import {
  useGetVarientByIdQuery,
  useUpdateVarientByIdMutation,
} from "@/redux/api/varients/varientsApi";
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

type VarientViewModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  selectedRow: any;
};

export default function VarientViewModal({
  open,
  setOpen,
  selectedRow,
}: VarientViewModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  //: Get Pet By Id
  const {
    data: varient,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetVarientByIdQuery(selectedRow?.id as string);

  //: update pet info handler
  const [updatedVariantData, { isLoading: isUpdateVariantDataLoading }] =
    useUpdateVarientByIdMutation();

  console.log("selectedRow", varient);

  //: Default Values
  const defaultValues = {
    name: varient?.data?.name,
    price: varient?.data?.price,
  };

  console.log("defaultValues", defaultValues);

  const handleUpdatePetInfo: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Updating Pet Info...");
    try {
      const updatedInfo = {
        id: selectedRow?.id,
        updatedInfo: {
          ...data,
          price: Number(data?.price),
        },
      };

      console.log("updatedInfo", updatedInfo);

      //: Update Category Info
      const response = await updatedVariantData(updatedInfo).unwrap();
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
                    name="price"
                    fullWidth={true}
                    label="Price*"
                    type="text"
                  />
                </div>
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
