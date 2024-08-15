"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ChangeRoleModal from "@/components/Ui/ChangeRoleModal/ChangeRoleModal";
import { useGetAllOrdersQuery } from "@/redux/api/order/orderApi";
import { EditNote } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import DeleteOrderModal from "./DeleteOrderModal";
import ChangeOrderStatusModal from "./ChangeOrderStatusModal";

const OrdersTable = ({ showSectionHeader }: { showSectionHeader: boolean }) => {
  //: Get all pets
  const { data: orders, isLoading: isOrderLoading } =
    useGetAllOrdersQuery(undefined);

  //   meta:

  // { page: 1, limit: 10, total: 26, totalPages: 3 }

  const meta = orders?.meta;

  const page = meta?.page;
  const limit = meta?.limit;
  const total = meta?.total;
  const totalPages = meta?.totalPages;

  //: Delete pet
  //   const [deletePet] = useDeleteUserMutation();

  //: Change Role Modal State
  const [orderStatusModal, setOrderStatusModalOpen] = React.useState(false);

  //: Change User Status Modal State
  const [deleteOrderModalOpen, setDeleteOrderModalOpen] = React.useState(false);

  //: Selected row
  const [selectedRow, setSelectedRow] = React.useState<any>();

  if (isOrderLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  const rowsData = orders?.data?.map((order: any) => ({
    id: order.id,
    name: order.userName,
    email: order.userEmail,
    phone: order.userPhone,
    Products: order?.productDetails?.map((product: any) => product.name + "\n"),
    Total: order.totalAmount,
    Shipping: order.shippingAddress,
    status: order.status,
    orderDate: order.orderDate.split("T")[0],
  }));

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
    {
      field: "action",
      headerName: "Action",
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Tooltip title="Change User Status">
              <IconButton
                onClick={() => {
                  setDeleteOrderModalOpen(true);
                  setSelectedRow(row);
                }}
                aria-label="delete"
              >
                <ManageAccountsIcon
                  sx={{
                    color: "red",
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                  }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip title="Change role">
              <IconButton
                onClick={() => {
                  setOrderStatusModalOpen(true);
                  setSelectedRow(row);
                }}
                aria-label="update"
              >
                <EditNote
                  sx={{
                    color: "red",
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        );
      },
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
      <DeleteOrderModal
        selectedRow={selectedRow}
        changeUserModalOpen={deleteOrderModalOpen}
        setChangeUserModalOpen={setDeleteOrderModalOpen}
      />
      <ChangeOrderStatusModal
        selectedRow={selectedRow}
        orderStatusModalOpen={orderStatusModal}
        setOrderStatusModalOpen={setOrderStatusModalOpen}
      />

      {showSectionHeader ? (
        <div className="-mb-16"></div>
      ) : (
        <SectionHeader HeaderTitle="Manage Users" subTitle="Dashboard" />
      )}
      <Box my={10}>
        <Box sx={{ width: "100%", px: 2 }}>
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
        </Box>
      </Box>
    </>
  );
};

export default OrdersTable;
