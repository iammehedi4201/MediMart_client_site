"use client";

import { ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "../Theme/Theme";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/es/integration/react";

const Loading = () => (
  <div className="min-h-screen w-full flex justify-center items-center">
    <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
  </div>
);

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={<Loading />} persistor={persistor}> */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  );
};

export default Providers;
