import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import OrdersTable from "@/components/Ui/Dashboard/admin/ManageOrders/OrdersTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | Manage Categories",
  description: "Manage Categories Page of MediMart",
};

const manageOrdersPage = () => {
  return (
    <>
      <OrdersTable showSectionHeader={true} />
    </>
  );
};

export default manageOrdersPage;
