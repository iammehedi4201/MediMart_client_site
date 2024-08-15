"use client";
import PHFileUploader from "@/components/Forms/PFileUploader";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import { registerUser } from "@/services/actions/register";
import { loginUser } from "@/services/actions/userLogin";
import { storeUserInfo } from "@/services/auth.services";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

//: Image Hosting Token
const img_hosting_token = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_TOKEN;

const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  photo: z.instanceof(File, {
    message: "Photo Picture is required",
  }),
});

type DefaultValues = {
  name: string;
  email: string;
  password: string;
  photo: string;
};

//: Default Values
const defaultValues: DefaultValues = {
  name: "Mehedi Hasan",
  email: "iammehedi805@gmail.com",
  password: "Hasan5862",
  photo: "",
};

const RegisterPage = () => {
  const router = useRouter();

  //: Image Hosting URL
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  //: Handle Register
  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Registering...");
    try {
      const formData = new FormData();
      formData.append("image", data.photo);
      const imgHostResponse = await axios.post(img_hosting_url, formData);
      console.log("response", imgHostResponse);

      if (imgHostResponse?.data?.success) {
        const userInfo = {
          name: data.name,
          email: data.email,
          password: data.password,
          photo: imgHostResponse?.data?.data?.url,
        };

        //: Register User
        const response = await registerUser(userInfo);

        // Check if response is successful
        if (response?.success) {
          storeUserInfo(response?.data?.token);
          toast.warning("Please verify your email to login", {
            id: toastId,
            duration: 3000,
          });
          router.push("/verifyemail" + `?email=${data.email}`);
        } else {
          toast.error(response?.errorDetails, { id: toastId, duration: 3000 });
        }
      }
    } catch (error: any) {
      toast.error(error?.errorDetails, { duration: 3000 });
    }
  };

  return (
    <Box>
      <div className="font-[sans-serif] text-[#333]">
        <div
          className={`text-center bg-gradient-to-r from-blue-800 to-blue-400 min-h-[300px] sm:p-6 p-4 flex items-center justify-center`}
        >
          <h4 className="sm:text-4xl text-2xl  text-white font-extrabold">
            Create your free account
          </h4>
        </div>
        <div className="mx-4 mb-4 -mt-16">
          <PForm
            onSubmit={handleRegister}
            defaultValues={defaultValues}
            resolver={zodResolver(registerSchema)}
            className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md"
          >
            <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
              <PInput
                name="name"
                fullWidth={true}
                label="Name*"
                placeholder="Enter Your Name"
                type="text"
              />
              <PInput
                name="email"
                fullWidth={true}
                label="Email*"
                placeholder="Enter Your Email"
                type="email"
              />
              <PInput
                name="password"
                fullWidth={true}
                label="Password*"
                placeholder="Enter Your Password"
                type="password"
              />
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <PHFileUploader
                  name="photo"
                  label="Upload Profile Pic"
                  sx={{
                    backgroundColor: "#3c79e6",
                    width: "100%",
                  }}
                />
              </Box>
            </div>
            <Box className="!mt-10">
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#3c79e6",
                }}
              >
                Sign up
              </Button>
            </Box>
            <p className="text-sm mt-6 text-center">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 font-semibold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </PForm>
        </div>
      </div>
    </Box>
  );
};

export default RegisterPage;
