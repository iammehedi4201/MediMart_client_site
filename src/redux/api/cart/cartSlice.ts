import { createSlice } from "@reduxjs/toolkit";

type TypeInitialState = {
  open: boolean;
  cartItems: CartItem[];
  totalPrice: number;
};

type CartItem = {
  productId: number;
  name: string;
  price: number;
  photos: string[];
  quantity: number;
  variant: string;
  totalProductQuantity?: number;
};

const initialState: TypeInitialState = {
  open: false,
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartDrawer: (state, action) => {
      state.open = action.payload;
    },

    addToCart: (state, action) => {
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (existingProductIndex !== -1) {
        // If product exists, update its quantity and price
        const existingProduct = state.cartItems[existingProductIndex];
        state.cartItems[existingProductIndex] = {
          ...existingProduct,
          quantity: action.payload.quantity,
          price: action.payload.price,
        };
      } else {
        // If product doesn't exist, add it to the cart
        state.cartItems.push(action.payload);
      }

      // Update total price
      state.totalPrice = state.cartItems?.reduce(
        (total, item) => total + item.price,
        0
      );
    },

    removeFromCart: (state, action) => {
      // Remove the item from the cartItems array based on productId
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload.productId
      );

      // Update total price after removing the item
      state.totalPrice = state.cartItems?.reduce(
        (total, item) => total + item.price,
        0
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
    },
  },
});

export const { toggleCartDrawer, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
