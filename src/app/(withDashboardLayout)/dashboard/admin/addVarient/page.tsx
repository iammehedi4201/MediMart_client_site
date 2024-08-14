import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import AddCategoryForm from "@/components/Ui/Dashboard/admin/AddCategory/AddCategoryForm";
import AddProductForm from "@/components/Ui/Dashboard/admin/AddProduct/AddProductForm";
import AddVarientForm from "@/components/Ui/Dashboard/admin/AddVarient/AddVarientForm";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mediashop | Add Varient",
  description: "Add Varient Page for Admin",
};

const AddCategoryPage = () => {
  return (
    <Box>
      <SectionHeader HeaderTitle="Add Varient" subTitle="Dashboard" />
      <div className="font-[sans-serif] text-[#333] my-10 ">
        <div className="mx-4 mb-4">
          {/* add product form */}
          <AddVarientForm />
        </div>
      </div>
    </Box>
  );
};

export default AddCategoryPage;
