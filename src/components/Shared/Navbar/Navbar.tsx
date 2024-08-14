"use client";
import { getUserInfo } from "@/services/auth.services";
import {
  Box,
  Container,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import CartViewDrawer from "@/components/Ui/Cart/CartViewDrawer/CartViewDrawer";
import { toggleCartDrawer } from "@/redux/api/cart/cartSlice";

const Navbar = () => {
  const router = useRouter();
  const userInfo = getUserInfo();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  console.log("userInfo", userInfo);

  const dispatch = useAppDispatch();
  //: Dynamic import for AuthButton and UserProfile
  const AuthButtonComponent = dynamic(
    () => import("@/components/Ui/AuthButton/AuthButton"),
    { ssr: false }
  );
  const UserProfileComponent = dynamic(
    () => import("@/components/Ui/UserProfile/UserProfile"),
    { ssr: false }
  );

  const [isMenuOpen, setIsMenuOpen] = useState(false); //for navbar menu toogle
  //handle navbar menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      <Box
        sx={{
          width: "100%",
          position: "relative",
          zIndex: 30,
        }}
      >
        <Container
          sx={{
            display: "flex", // flex
            flexWrap: "wrap", // flex-wrap
            alignItems: "center", // items-center
            justifyContent: "space-between", // justify-between
            margin: "auto", // mx-auto
            padding: "1rem", // p-4
          }}
        >
          <Box
            sx={{
              display: "flex", // flex
              justifyContent: "center", // justify-center
              alignItems: "center", // items-center
              height: "5rem", // h-20
            }}
          >
            <Typography
              variant="h1"
              component={"h1"}
              sx={{
                fontSize: {
                  xs: "1.3rem", // text-2xl
                  sm: "2.5rem", // sm:text-3xl
                  md: "3rem", // md:text-4xl
                  lg: "3.5rem", // lg:text-5xl
                }, // text-5xl
                fontWeight: "bold", // font-bold
                color: "#f04336", // text-[#f04336]
              }}
            >
              MediMart
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex", // flex
              order: { md: 2 }, // md:order-2
            }}
          >
            {/* ------- User profile    -------- */}
            <Box
              sx={{
                display: "flex", // flex
                alignItems: "center", // items-center
                position: "relative", // relative
                marginLeft: { sm: "2.5rem" }, // sm:ml-10
              }}
            >
              <Stack
                direction="row"
                gap={"5px"} // space-x-2
                justifyContent={{ sm: "center" }} // sm:justify-center
                alignItems="center" // items-center
                width="100%" // w-full
                marginTop={{ sm: "0", "400px": "1rem" }} // sm:mt-0 max-[400px]:mt-3
              >
                {/* Cart Icon */}
                <button
                  onClick={() => {
                    dispatch(toggleCartDrawer(true));
                  }}
                  className="relative p-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300"
                >
                  <LocalMallIcon className="text-[#f04336]" />
                  {cartItems.length > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#f04336] text-white rounded-full text-xs w-6 h-6 flex items-center justify-center border-2 border-white">
                      {cartItems.length}
                    </span>
                  )}
                </button>

                {/* Cart Drawer */}
                <CartViewDrawer />

                {/* ------ User Profile  toogle Button ------ */}
                <UserProfileComponent />
                {/* ------ Auth Button ------ */}
                <AuthButtonComponent />
                <IconButton
                  onClick={toggleMenu}
                  aria-controls="navbar-search"
                  aria-expanded="false"
                  sx={{
                    display: { md: "none" },
                    p: 1,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    color: "gray.500",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "gray.100",
                    },
                    "&:focus": {
                      outline: "none",
                      ring: 2,
                      ringColor: "gray.200",
                    },
                    dark: {
                      color: "gray.400",
                      "&:hover": {
                        backgroundColor: "gray.700",
                      },
                      "&:focus": {
                        ringColor: "gray.600",
                      },
                    },
                  }}
                >
                  <SvgIcon
                    sx={{
                      fontSize: 30,
                      mt: 2,
                    }}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </SvgIcon>
                </IconButton>
              </Stack>
            </Box>
          </Box>

          <div
            className={`items-center justify-between ${
              isMenuOpen ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 navbar_ui">
              <li className="relative block">
                <Link href="/" className="navLink_active" aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="block py-2 pl-3 pr-4 text-black rounded  hover:text-orange-500 "
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  href="/aboutUs"
                  className="block py-2 pl-3 pr-4 text-black   hover:text-orange-500 "
                >
                  About Us
                </Link>
              </li>

              {userInfo && (
                <li>
                  <Link
                    href={`/dashboard/${
                      userInfo.role === "Super_Admin"
                        ? "admin"
                        : userInfo.role === "admin"
                        ? "admin"
                        : "user"
                    }`}
                    className="block py-2 pl-3 pr-4 text-black rounded  hover:text-orange-500 "
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </Container>
        <div
          className="header-shape"
          data-background="img/bg/header_shape.png"
        ></div>
      </Box>
    </div>
  );
};

export default Navbar;
