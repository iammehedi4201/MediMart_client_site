import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import CategoriesTable from "@/components/Ui/Dashboard/admin/ManageCategories/CategoriesTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | Manage Categories",
  description: "Manage Categories Page of MediMart",
};

const CategoriesPage = () => {
  return (
    <>
      <SectionHeader HeaderTitle="Manage Categories" subTitle="Dashboard" />
      <CategoriesTable />
    </>
  );
};

export default CategoriesPage;
