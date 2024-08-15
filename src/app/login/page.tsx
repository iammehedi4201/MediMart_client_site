"use client";

import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import { loginUser } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// Login Validation Schema
const loginValidationSchema = z.object({
  email: z.string().min(1, { message: "Email or userName is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

interface DefaultValues {
  email: string;
  password: string;
}

// Default Values
const defaultValues: DefaultValues = {
  email: "iammehedi296@gmail.com",
  password: "Hasan586258",
};

const LoginPage = () => {
  let text = "Not have an account?";
  const router = useRouter();

  const handleLogin: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in...");

    try {
      const userInfo = {
        email: data?.email,
        password: data?.password,
      };
      console.log("userInfo", userInfo);

      const response = await loginUser(userInfo);
      console.log("response", response);

      if (response?.success) {
        storeUserInfo(response?.data?.token);
        toast.success(response?.message, { id: toastId, duration: 3000 });
        router.push("/");
      } else {
        toast.error(response?.errorDetails, { id: toastId, duration: 3000 });
      }
    } catch (error: any) {
      toast.error(error?.errorDetails, { id: toastId, duration: 3000 });
    }
  };

  return (
    <Box>
      <div className="font-[sans-serif] text-[#333]">
        <div
          className={`text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[300px] sm:p-6 p-4 flex items-center justify-center`}
        >
          <h4 className="sm:text-4xl text-2xl  text-white font-extrabold">
            Login to your account
          </h4>
        </div>
        <div className="mx-4 mb-4 -mt-16">
          <PForm
            onSubmit={handleLogin}
            resolver={zodResolver(loginValidationSchema)}
            defaultValues={defaultValues}
            className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
          >
            <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
              <PInput
                name="email"
                fullWidth={true}
                label="Email*"
                placeholder="Enter Your Email"
              />
              <PInput
                name="password"
                fullWidth={true}
                label="Password*"
                placeholder="Enter Your Password"
                type="password"
              />
            </div>
            <Box className="!mt-10">
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#3c79e6",
                }}
              >
                LogIn
              </Button>
            </Box>
            <p className="text-sm mt-6 text-center">
              {text}{" "}
              <Link
                href="/register"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Register Now
              </Link>
            </p>
          </PForm>
        </div>
      </div>
    </Box>
  );
};

export default LoginPage;
