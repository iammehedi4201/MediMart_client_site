"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ChangeRoleModal from "@/components/Ui/ChangeRoleModal/ChangeRoleModal";
import {
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
  useGetUserOrdersByIdQuery,
} from "@/redux/api/order/orderApi";
import { getUserInfo } from "@/services/auth.services";
import { EditNote } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const MyOrdersTable = ({
  showSectionHeader,
}: {
  showSectionHeader: boolean;
}) => {
  //: Get User Info
  const userInfo = getUserInfo();

  console.log("user Id", userInfo?.id);

  //: Get all Orders
  const { data: orders, isLoading: isOrderLoading } = useGetUserOrdersByIdQuery(
    userInfo?.id
  );

  console.log("orders", orders);

  if (isOrderLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  const rowsData =
    orders?.data?.map((order: any) => ({
      id: order.id,
      name: order.userName,
      email: userInfo?.email,
      phone: order.userPhone,
      Products: order?.productDetails?.map(
        (product: any) => product.name + "\n"
      ),
      Total: order.totalAmount,
      Shipping: order.shippingAddress,
      status: order.status,
      orderDate: order.orderDate.split("T")[0],
    })) || []; // Ensure rowsData is always an array

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      flex: 2,
    },
    {
      field: "phone",
      headerName: "Phone",
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "Products",
      headerName: "Products",
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      flex: 2,
    },
    {
      field: "Total",
      headerName: "Total",
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "Shipping",
      headerName: "Shipping Address",
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      flex: 2,
    },
    {
      field: "status",
      headerName: "Status",
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      cellClassName: (params) => {
        switch (params.value) {
          case "pending":
            return "text-yellow-500";
          case "completed":
            return "text-green-500";
          case "cancelled":
            return "text-red-500";
          default:
            return "text-gray-500";
        }
      },
      flex: 1,
    },
    {
      field: "orderDate",
      headerName: "Order Date",
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      flex: 1,
    },
  ];

  if (isOrderLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      {showSectionHeader ? (
        <div className="-mb-16"></div>
      ) : (
        <SectionHeader HeaderTitle="Manage Users" subTitle="Dashboard" />
      )}
      <Box my={10}>
        <Box sx={{ width: "100%", px: 2 }}>
          {rowsData.length === 0 ? (
            <div className="min-h-screen w-full flex justify-center items-center">
              <p>No data found</p>
            </div>
          ) : (
            <DataGrid
              rows={rowsData}
              columns={columns}
              rowHeight={100}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              sx={{
                "& .MuiDataGrid-row": {
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                  "& .MuiDataGrid-cell": {
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "bold",
                  },
                },
              }}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default MyOrdersTable;
