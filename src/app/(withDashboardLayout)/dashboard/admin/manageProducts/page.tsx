import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ProductsTable from "@/components/Ui/Dashboard/admin/ManageProducts/ProductsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | Manage Products",
  description: "Manage Products Page of MediMart",
};

const ManageProductsPage = () => {
  return (
    <>
      <SectionHeader HeaderTitle="Manage Products" subTitle="Dashboard" />
      <ProductsTable />
    </>
  );
};

export default ManageProductsPage;
