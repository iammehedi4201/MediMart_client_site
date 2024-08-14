import { getUserInfo } from "@/services/auth.services";
import { Person } from "@mui/icons-material";
import Link from "next/link";
import AddBoxIcon from "@mui/icons-material/AddBox";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import PetsSharpIcon from "@mui/icons-material/PetsSharp";
import RequestPageIcon from "@mui/icons-material/RequestPage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CategoryIcon from "@mui/icons-material/Category";
import TopicIcon from "@mui/icons-material/Topic";
import ClassIcon from "@mui/icons-material/Class";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const AdminSidebarItem = () => {
  const userInfo = getUserInfo();
  return (
    <>
      {userInfo?.role === "Admin" ||
        ("Super_Admin" && (
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase border-b-2 ">
                  Main
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/dashboard/admin/"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <HomeSharpIcon />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold ">
                  Dashboard
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/addProduct"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <AddBoxIcon />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold">
                  Add Product
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/addCategory"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <AddBoxIcon />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold">
                  Add Category
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/addVarient"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <AddBoxIcon />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold">
                  Add Varient
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/manageUsers"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <Person />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold">
                  Manage Users
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/manageProducts"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <TopicIcon />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold">
                  Manage Products
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/manageCategories"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <CategoryIcon />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold">
                  Manage Categories
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/manageVarients"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <ClassIcon />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold">
                  Manage Varients
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/admin/manageOrders"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <LocalOfferIcon />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold">
                  Manage Orders
                </span>
              </Link>
            </li>
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase border-b-2 ">
                  Settings
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/dashboard/user/profile"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <AccountBoxIcon />
                </span>
                <span className="ml-2 text-md tracking-wide truncate font-bold">
                  Profile
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/user/change-password"
                className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800  border-r-4 border-transparent hover:border-[#f04336] hover:bg-orange-50 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 mb-1">
                  <ChangeCircleIcon />
                </span>
                <span className="ml-2 text- tracking-wide truncate font-bold">
                  Change Password
                </span>
              </Link>
            </li>
          </ul>
        ))}
    </>
  );
};

export default AdminSidebarItem;
