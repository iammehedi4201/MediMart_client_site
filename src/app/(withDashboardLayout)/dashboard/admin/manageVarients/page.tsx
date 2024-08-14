import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import VarientsTable from "@/components/Ui/Dashboard/admin/ManageVarients/VarientsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | Manage Varient",
  description: "Manege Varient Page of MediMart",
};

const ManageVarientPage = () => {
  return (
    <>
      <SectionHeader HeaderTitle="Manage Varients" subTitle="Dashboard" />
      <VarientsTable/>
    </>
  );
};

export default ManageVarientPage;
