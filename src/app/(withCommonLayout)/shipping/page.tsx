import PrivateRoute from "@/components/Hoc/WithAuth/WithAuth";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ShippingForm from "@/components/Ui/Shipping/ShippingForm/ShippingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | Shipping Page",
  description: " Shipping page for MediMart",
};

const ShippingPage = () => {
  return (
    <PrivateRoute>
      <div>
        <SectionHeader HeaderTitle="Shipping" />
        <div className="w-full my-10">
          <ShippingForm />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default ShippingPage;
