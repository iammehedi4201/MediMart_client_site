"use client";
import PForm from "@/components/Forms/PForm";
import PInput from "@/components/Forms/PInput";
import {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
} from "@/redux/api/user/userApi";
import { getUserInfo } from "@/services/auth.services";
import { Box, Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
const Profile = () => {
  // Get User Info
  const userInfo = getUserInfo();

  //: Get My Profile
  const {
    data: myProfile,
    isLoading: isProfileLoading,
    isFetching: isProfileFetching,
  } = useGetMyProfileQuery(userInfo?.email);

  //: Update Profile
  const [updateProfile] = useUpdateMyProfileMutation();
  const defaultValues = {
    name: myProfile?.data?.name || "",
    email: myProfile?.data?.email || "",
    photo: myProfile?.data?.photo || "",
  };

  const handleUpdateProfile: SubmitHandler<FieldValues> = async (data) => {
    const tostId = toast.loading("Updating Profile...");
    try {
      const updateInfo = {
        id: userInfo?.id,
        updateProfileInfo: data,
      };

      console.log("Update Info", updateInfo);
      const response = await updateProfile(updateInfo).unwrap();
      toast.success(response?.message, {
        id: tostId,
        duration: 3000,
      });
    } catch (error: any) {
      toast.error(error.message, { id: tostId, duration: 3000 });
    }
  };

  if (isProfileFetching) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <section className="py-5 my-auto">
        <div className="lg:w-[100%] md:w-[100%] xs:w-[96%] mx-auto flex gap-4 ">
          <div className="lg:w-[100%] md:w-[100%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center ">
            <div className="">
              <PForm
                onSubmit={handleUpdateProfile}
                defaultValues={defaultValues}
              >
                <div className="flex flex-col">
                  {/* <!-- Cover Image --> */}
                  <Image
                    width={1080}
                    height={720}
                    src="https://i.ibb.co/HKCQZCz/396365569-3668623856701108-5380981700298228761-n.jpg"
                    alt="User Cover"
                    className="w-full xl:h-[30rem] lg:h-[20rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]"
                  />

                  {/* <!-- Profile Image --> */}
                  <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
                    <Image
                      width={1080}
                      height={720}
                      src={
                        myProfile?.data?.photo ||
                        "https://i.ibb.co/7bGpY2g/IMG-20211010-131853.jpg"
                      }
                      alt="User Profile"
                      className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem]  relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]"
                    />

                    {/* <!-- FullName --> */}
                    <h1 className="w-full text-left my-4 sm:mx-4 xs:pl-4 text-black  lg:text-4xl md:text-3xl sm:text-3xl xs:text-xl font-serif font-bold">
                      {myProfile?.data?.name}
                    </h1>
                  </div>
                </div>

                <div className="flex items-center lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full">
                    <PInput
                      name="name"
                      label="Name"
                      type="text"
                      placeholder="First Name"
                      fullWidth={true}
                      size="medium"
                      sx={{}}
                    />
                  </div>
                  <div className="w-full">
                    <PInput
                      name="email"
                      label="Email"
                      type="text"
                      placeholder="Email Address"
                      fullWidth={true}
                      size="medium"
                      disabled={true}
                    />
                  </div>
                </div>

                <div className="rounded-lg mt-4 text-white text-lg font-semibold">
                  <Button type="submit" className="p-4">
                    Update Profile
                  </Button>
                </div>
              </PForm>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
