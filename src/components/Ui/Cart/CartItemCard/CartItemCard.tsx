import { addToCart, removeFromCart } from "@/redux/api/cart/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import Image from "next/image";
import { useState } from "react";

const CartItemCard = ({
  productId,
  name,
  price,
  quantity,
  totalProductQuantity,
}: any) => {
  const [qty, setQuantity] = useState(quantity);
  const dispatch = useAppDispatch();

  // Increment and decrement quantity
  const incrementQuantity = () => {
    if (qty < totalProductQuantity) {
      setQuantity((prevQuantity: number) => prevQuantity + 1);
      dispatch(addToCart({ productId, quantity: qty + 1, price }));
    }
  };

  // Decrement quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity: number) =>
      prevQuantity > 1 ? prevQuantity - 1 : 1
    );
    dispatch(addToCart({ productId, quantity: qty - 1, price }));
  };

  return (
    <div key={productId} className="grid grid-cols-3 gap-4">
      <div className="col-span-2 flex gap-4">
        <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
          <Image
            src="https://readymadeui.com/images/product14.webp"
            alt="Product Image"
            className="w-full h-full object-contain"
            width={100}
            height={100}
          />
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-800">{name}</h3>
          <button
            className="text-xs text-red-500 cursor-pointer mt-0.5"
            onClick={() => {
              dispatch(removeFromCart({ productId }));
            }}
          >
            Remove
          </button>

          <div className="flex  gap-6 mt-4">
            <div className="relative group">
              <button
                type="button"
                className="w-full flex p-2 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                 1 MG
              </button>
            </div>

            <div className="flex items-center">
              <button
                type="button"
                className="flex -center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
                onClick={decrementQuantity}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
              <span className="mx-2.5">{qty}</span>
              <button
                type="button"
                className={`flex -center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md ${
                  qty >= totalProductQuantity
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                onClick={incrementQuantity}
                disabled={qty >= totalProductQuantity}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {qty >= totalProductQuantity && (
            <p className="text-xs text-red-500 mt-4 font-bold">Stock Out</p>
          )}
        </div>
      </div>
      <div className="ml-auto">
        <h4 className="text-base font-bold text-gray-800">৳{price}</h4>
      </div>
    </div>
  );
};

export default CartItemCard;
