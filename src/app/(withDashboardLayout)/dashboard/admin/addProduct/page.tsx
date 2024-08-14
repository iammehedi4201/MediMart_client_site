import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import AddProductForm from "@/components/Ui/Dashboard/admin/AddProduct/AddProductForm";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediashop | Add Product",
  description: "Add Product Page for Admin",
};

const AddProductPage = () => {
  return (
    <Box>
      <SectionHeader HeaderTitle="Add Product" subTitle="Dashboard" />
      <div className="font-[sans-serif] text-[#333] my-10 ">
        <div className="mx-4 mb-4">
          {/* add product form */}
            <AddProductForm />
        </div>
      </div>
    </Box>
  );
};

export default AddProductPage;
