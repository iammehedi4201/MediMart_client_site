import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import MyOrdersTable from "@/components/Ui/Dashboard/user/MyOrders/MyOrderTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | My Orders",
  description: "My Orders page",
};

const MyOrdersPage = () => {
  return (
    <>
      <MyOrdersTable showSectionHeader={true} />
    </>
  );
};

export default MyOrdersPage;
