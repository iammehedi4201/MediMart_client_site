import { Box } from "@mui/material";
import Image from "next/image";

const loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
    </div>
  );
};

export default loading;
