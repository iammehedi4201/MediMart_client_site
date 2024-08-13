"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import { resendVerificationCode } from "@/services/actions/resendVerificationCode";
import { loginUser } from "@/services/actions/userLogin";
import { verifyEmail } from "@/services/actions/verifyEmail";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const verificationSchema = z.object({
  verificationCode: z.string().min(1, "Verification Code is required"),
});

type DefaultValues = {
  verificationCode: string;
};

//: Default Values
const defaultValues: DefaultValues = {
  verificationCode: "",
};

const VerfiyPage = () => {
  //: Get Email from Query Params
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router = useRouter();

  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  //: Handle verify Email
  const handleVerifyEmail: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Verifying...");
    try {
      const verfiyInfo = {
        email: email,
        verificationCode: data.verificationCode,
      };
      const response = await verifyEmail(verfiyInfo);
      console.log("response", response);
      
      // Check if response is successfu;
      if (response?.success) {
        setTimer(0);
        toast.success(response?.message, {
          id: toastId,
          duration: 3000,
        });
        router.push("/");
      } else {
        toast.error(response?.errorDetails, { id: toastId, duration: 3000 });
      }
    } catch (error: any) {
      toast.error(error?.errorDetails, { id: toastId, duration: 3000 });
    }
  };

  // resend code
  const handleResendCode = async () => {
    const toastId = toast.loading("Resending...");
    try {
      if (email) {
        console.log("email", email);

        const response = await resendVerificationCode(email);
        console.log("response", response);

        toast.success(response?.message, { id: toastId, duration: 3000 });
        setTimer(60);
      } else {
        throw new Error("Email is null");
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
            Verify Your Email
          </h4>
        </div>
        <div className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md">
          <PForm
            defaultValues={defaultValues}
            resolver={zodResolver(verificationSchema)}
            onSubmit={handleVerifyEmail}
          >
            <div className="my-4 text-lg font-semibold text-blue-600 text-center">
              {timer > 0 ? `Time remaining: ${timer}s` : "Time's up!"}
            </div>

            <div className="flex flex-col justify-center items-center">
              <PInput
                name="verificationCode"
                fullWidth={true}
                label="Code"
                type="text"
                size="medium"
              />
            </div>
            <Box className="!mt-10 flex justify-center">
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#3c79e6",
                }}
              >
                Verify Email
              </Button>
            </Box>
          </PForm>
          <p className="text-sm mt-6 text-center">
            Don&apos;t get the code?
            <button
              onClick={() => handleResendCode()}
              className="text-blue-600 font-semibold hover:underline ml-1"
            >
              Resend Code
            </button>
          </p>
        </div>
      </div>
    </Box>
  );
};

export default VerfiyPage;
