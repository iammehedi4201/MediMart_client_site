import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ProductSection from "@/components/Ui/ProductsPage/ProductSection/ProductSection";
import SideFilterSection from "@/components/Ui/ProductsPage/SideFilterSection/SideFilterSection";
import TopFilterSection from "@/components/Ui/ProductsPage/TopFilterSection/TopFilterSection";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | Products Page",
  description: " Find all the products you need for your pets at MediMart",
};

const ProductsPage = () => {
  return (
    <Box>
      <SectionHeader HeaderTitle="Products" />
      <Box
        className="px-8 bg-gray-50 font-poppins"
        style={{
          backgroundImage:
            "url('https://themebeyond.com/pre/petco-prev/petco-live/img/bg/adoption_shop_bg.jpg')",
          backgroundRepeat: "repeat",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <div className="px-4 py-4 mx-auto max-w-full lg:py-6 md:px-6">
          <div className="flex flex-wrap mb-24 -mx-3">
            {/* side filter feature */}
            {/* <SideFilterSection /> */}
            <div className="w-full px-3 lg:w-3/4 mx-auto">
              {/* top filter feature */}
              {/* <TopFilterSection /> */}
              {/* Pets Section */}
              <ProductSection />
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default ProductsPage;
