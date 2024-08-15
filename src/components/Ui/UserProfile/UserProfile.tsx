import { useGetMyProfileQuery } from "@/redux/api/user/userApi";
import { getUserInfo, removeUser } from "@/services/auth.services";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UserProfile = () => {
  const userInfo = getUserInfo();
  const router = useRouter();

  console.log("userInfo", userInfo);

  //:get user Profile
  const { data: profile, isLoading } = useGetMyProfileQuery(userInfo?.email);

  console.log("profile", profile);

  const [isUSerMenuOpen, setIsUserMenuOpen] = useState(false); //for profile menu toggle

  //loading
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleOpenUserMenu = () => {
    setIsUserMenuOpen(!isUSerMenuOpen);
  };

  return (
    <>
      <Box>
        {userInfo?.email && (
          <IconButton
            onClick={handleOpenUserMenu}
            sx={{
              display: "flex",
              mx: 2,
              borderColor: "red",
              textDecoration: "none",
              backgroundColor: "gray.800",
              borderRadius: "50%",
              "&:focus": {
                ring: 4,
                ringColor: "gray.300",
                dark: {
                  ringColor: "gray.600",
                },
              },
            }}
          >
            <Box
              component="img"
              src={profile?.data?.photo} // Replace with actual user photo URL
              alt="user"
              sx={{ width: 32, height: 32, borderRadius: "50%" }}
            />
          </IconButton>
        )}

        <Box
          sx={{
            zIndex: 50,
            display: isUSerMenuOpen ? "block" : "none",
            my: 2,
            textAlign: "left",
            bgcolor: "white",
            boxShadow: 1,
            borderRadius: 1,
            position: "absolute",
            top: "2rem",
            transform: "translateY(2rem) translateX(-40%)",
            width: "500px",
            maxWidth: "100%",
            dark: {
              bgcolor: "gray.700",
              color: "white",
            },
          }}
        ></Box>
      </Box>
    </>
  );
};

export default UserProfile;
