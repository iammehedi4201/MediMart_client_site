import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | Manage Categories",
  description: "Manage Categories Page of MediMart",
};

const manageOrdersPage = () => {
  return (
    <>
      <SectionHeader HeaderTitle="Manage Orders" subTitle="Dashboard" />
    </>
  );
};

export default manageOrdersPage;
