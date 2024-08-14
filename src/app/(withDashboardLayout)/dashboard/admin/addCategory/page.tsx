
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import AddCategoryForm from "@/components/Ui/Dashboard/admin/AddCategory/AddCategoryForm";
import AddProductForm from "@/components/Ui/Dashboard/admin/AddProduct/AddProductForm";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediashop | Add Category",
  description: "Add Product Page for Admin",
};

const AddCategoryPage = () => {
  return (
    <Box>
      <SectionHeader HeaderTitle="Add Category" subTitle="Dashboard" />
      <div className="font-[sans-serif] text-[#333] my-10 ">
        <div className="mx-4 mb-4">
          {/* add product form */}
          <AddCategoryForm />
        </div>
      </div>
    </Box>
  );
};

export default AddCategoryPage;
