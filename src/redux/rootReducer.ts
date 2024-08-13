import { baseApi } from "./api/baseApi";
import cartReducer from "@/redux/api/cart/cartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persisConfig = {
  key: "Cart",
  storage,
};

const persistedCartReducer = persistReducer(persisConfig, cartReducer);

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  cart: persistedCartReducer,
};
