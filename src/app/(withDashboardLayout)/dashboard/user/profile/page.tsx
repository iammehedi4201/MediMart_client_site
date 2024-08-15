import Profile from "@/components/Ui/Dashboard/user/Profile/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MediMart | Profile",
  description: "MediMart is a medical store",
};

const ProfilePage = () => {
  return (
    <>
      <Profile />
    </>
  );
};

export default ProfilePage;
