"use client";
import { addToCart, toggleCartDrawer } from "@/redux/api/cart/cartSlice";
import { IProduct } from "@/types";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProductDetails = ({
  _id,
  name,
  price,
  variants,
  quantity,
  company,
  photos,
}: IProduct) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [qty, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [selectedVariant, setSelectedVariant] = useState<any | null>(null);

  const dispatch = useDispatch();

  // Increment and decrement quantity
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Decrement quantity
  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  // Calculate the total price whenever qty or selectedVariant changes
  useEffect(() => {
    if (selectedVariant) {
      setTotalPrice(selectedVariant.price * qty);
    } else {
      setTotalPrice(price * qty);
    }
  }, [price, qty, selectedVariant]);

  const handleVariantClick = (variant: any) => {
    setSelectedVariant(variant);
    setTotalPrice(variant.price * qty);
  };

  // handle add to cart
  const handleAddToCart = () => {
    const cartItem = {
      productId: _id,
      name,
      price: totalPrice,
      photos,
      quantity: qty,
      variant: selectedVariant,
      totalProductQuantity: quantity,
    };

    dispatch(addToCart(cartItem));
    setIsAddedToCart(true);
  };

  return (
    <div className="lg:col-span-2">
      <div className="flex flex-wrap items-start gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800 capitalize">
            {name} | <small>{company}</small>
          </h2>

          <div className="flex space-x-1 mt-4">
            {/* Rating stars */}
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                className="w-5 fill-orange-500"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
            <svg
              className="w-5 fill-[#CED5D8]"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center bg-slate-400 p-2 rounded ">
          <h3 className="text-xl font-bold text-gray-800 ">Stock</h3>
          <h3 className="text-gray-800 text-lg font-bold">:{quantity}</h3>
        </div>
      </div>

      <hr className="my-6" />

      <div>
        <h3 className="text-xl font-bold text-gray-800">Price</h3>
        <p className="text-gray-800 text-4xl font-bold mt-4">৳{totalPrice}</p>
      </div>

      <hr className="my-6" />

      {
        <div>
          <h3 className="text-xl font-bold text-gray-800">Select a MG</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {variants?.map((variant: any) => (
              <button
                key={variant._id}
                type="button"
                className={`size-10 text-white hover:bg-black rounded shrink-0 ${
                  selectedVariant?._id === variant._id
                    ? "bg-black"
                    : "bg-[#f04336]"
                }`}
                onClick={() => handleVariantClick(variant)}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>
      }

      <hr className="my-6" />

      <div>
        <h3 className="text-xl font-bold text-gray-800">Quantity</h3>

        <div className="flex divide-x border w-max mt-4 rounded overflow-hidden">
          <button
            type="button"
            className="bg-gray-100 w-12 h-10 font-semibold"
            onClick={decrementQuantity}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-current inline"
              viewBox="0 0 124 124"
            >
              <path
                d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                data-original="#000000"
              ></path>
            </svg>
          </button>
          <button
            type="button"
            className="bg-transparent w-12 h-10 font-semibold text-gray-800 text-lg"
          >
            {qty}
          </button>
          <button
            type="button"
            className="bg-gray-800 text-white w-12 h-10 font-semibold"
            onClick={incrementQuantity}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-current inline"
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

      <hr className="my-6" />

      <div className="flex flex-wrap gap-4">
        {isAddedToCart ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              dispatch(toggleCartDrawer(true));
              setIsAddedToCart(false);
            }}
          >
            View Cart
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
