import { useAppDispatch } from "@/redux/hook";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartItemCard from "../CartItemCard/CartItemCard";
import { toggleCartDrawer } from "@/redux/api/cart/cartSlice";

const CartCard = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const totalPrice = useSelector((state: any) => state.cart.totalPrice);
  const dispatch = useAppDispatch();

  return (
    <div className="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
      <div className="md:col-span-2  p-4 rounded-md">
        <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
        <hr className="border-gray-300 mt-4 mb-8" />

        <div className="space-y-4">
          {cartItems.length > 0 ? (
            cartItems?.map((item: any) => (
              <CartItemCard key={item.productId} {...item} />
            ))
          ) : (
            <div className="text-gray-800 text-center">
              <h3 className="text-xl font-bold">No items in your cart</h3>
              <Link
                href="/"
                className="text-[#f04336] mt-4 text-lg font-semibold"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className=" rounded-md p-4 md:sticky top-0">
        <ul className="text-gray-800 mt-8 space-y-4">
          <li className="flex flex-wrap gap-4 text-base font-bold">
            Total <span className="ml-auto">৳{totalPrice}</span>
          </li>
        </ul>

        <div className="mt-8 space-y-2">
          <Link
            type="button"
            href={"/shipping"}
            className="text-sm px-4 py-2.5 w-full flex justify-center font-semibold tracking-wide bg-[#f04336] hover:bg-orange-400 text-white rounded-md"
            onClick={() => {
              dispatch(toggleCartDrawer(false));
            }}
          >
            Proceed To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
