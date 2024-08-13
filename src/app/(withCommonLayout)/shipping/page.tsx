"use client"
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

const ShippingPage = () => {
  const hanldeOrder: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in...");

    try {
    } catch (error: any) {
      toast.error(error?.errorDetails, { id: toastId, duration: 3000 });
    }
  };

  return (
    <div>
      <SectionHeader HeaderTitle="Shipping" />
      <div className="w-full my-10">
        <PForm
          onSubmit={hanldeOrder}
          defaultValues={{}}
          className="p-5 w-[40%] mx-auto  shadow-md"
        >
          <h2 className="text-2xl font-extrabold text-gray-800">
            Payment Details
          </h2>
          <div className="grid gap-4 mt-8">
            <div>
              <PInput
                name="name"
                fullWidth={true}
                label="Name*"
                placeholder="Enter Your Name"
              />
            </div>

            <div>
              <PInput
                name="phone"
                fullWidth={true}
                label="Phone*"
                placeholder="Enter Your Phone Number"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <PInput
                  name="division"
                  fullWidth={true}
                  label="Division*"
                  placeholder="Enter Your division"
                />
              </div>

              <div>
                <PInput
                  name="district"
                  fullWidth={true}
                  label="District*"
                  placeholder="Enter Your district"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <PInput
                  name="subDistrict"
                  fullWidth={true}
                  label="SubDistrict*"
                  placeholder="Enter Your subDistrict"
                />
              </div>

              <div>
                <PInput
                  name="address"
                  fullWidth={true}
                  label="Address*"
                  placeholder="Enter Your address"
                />
              </div>
            </div>
          </div>

          <ul className="text-gray-800 mt-8 space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">
              Subtotal <span className="ml-auto font-bold">$138.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Discount <span className="ml-auto font-bold">$0.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total <span className="ml-auto">$142.00</span>
            </li>
          </ul>

          <button
            type="button"
            className="mt-8 text-sm px-4 py-3 w-full font-semibold tracking-wide bg-[#f04336] hover:bg-orange-600 text-white rounded-md"
          >
            Make Payment{" "}
          </button>
        </PForm>
      </div>
    </div>
  );
};

export default ShippingPage;
