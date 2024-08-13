import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import CartCard from "../CartCard/CartCard";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { toggleCartDrawer } from "@/redux/api/cart/cartSlice";

export default function CartViewDrawer() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.cart.open);
  const cartItem = useAppSelector((state) => state.cart.cartItems);

  console.log("cartItem", cartItem);
  

  return (
    <div>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => {
          dispatch(toggleCartDrawer(false));
        }}
      >
        <Box
          sx={{
            width: 500,
            padding: "1rem",
          }}
        >
          <CartCard />
        </Box>
      </Drawer>
    </div>
  );
}
