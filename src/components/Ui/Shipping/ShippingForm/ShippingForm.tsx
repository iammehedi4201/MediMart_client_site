"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import { clearCart } from "@/redux/api/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/api/order/orderApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { getUserInfo } from "@/services/auth.services";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Login Validation Schema
const ShippingFormValidation = z.object({
  name: z.string().min(1, { message: "name is  required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  division: z.string().min(1, { message: "division is required" }),
  district: z.string().min(1, { message: "district is required" }),
  subDistrict: z.string().min(1, { message: "subDistrict is required" }),
  address: z.string().min(1, { message: "address is required" }),
});

interface DefaultValues {
  name: string;
  phone: string;
  division: string;
  district: string;
  subDistrict: string;
  address: string;
}

// Default Values
const defaultValues: DefaultValues = {
  name: "Mehedi Hasan",
  phone: "01775777038",
  division: "Dhaka",
  district: "Dhaka",
  subDistrict: "Comilla",
  address: "Dhaka, Comilla",
};

const ShippingForm = () => {
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const user = getUserInfo();
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);
  const [createOrder, { isLoading, isSuccess }] = useCreateOrderMutation();
  const dispatch = useAppDispatch();

  const products = cartItems.map((item) => ({
    product: item.productId,
    variant: item.variant ? (item.variant as any)._id : null,
    quantity: item.quantity,
    price: item.price,
  }));

  const hanldeOrder: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Placing Order...");

    try {
      const OrderInfo = {
        user: user?.id,
        products,
        shippingAddress: {
          ...data,
        },
        totalAmount: totalPrice,
        orderDate: new Date().toISOString().split("T")[0],
      };
      const response = await createOrder(OrderInfo).unwrap();
      if (response?.success) {
        toast.success(response?.message, { id: toastId, duration: 3000 });
        dispatch(clearCart());
      }
    } catch (error: any) {
      toast.error(error?.errorDetails, { id: toastId, duration: 3000 });
    }
  };
  return (
    <PForm
      onSubmit={hanldeOrder}
      defaultValues={defaultValues}
      className="p-5 w-[40%] mx-auto  shadow-md"
    >
      <h2 className="text-2xl font-extrabold text-gray-800">Payment Details</h2>
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
        type="submit"
        className="mt-8 text-sm px-4 py-3 w-full font-semibold tracking-wide bg-[#f04336] hover:bg-orange-600 text-white rounded-md"
      >
        Place Order
      </button>
    </PForm>
  );
};

export default ShippingForm;
