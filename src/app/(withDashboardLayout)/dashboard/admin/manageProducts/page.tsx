"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import PetViewModal from "@/components/Ui/PetViewModal/PetViewModal";
import {
  useDeleteProductByIdMutation,
  useGetAllProductsQuery,
} from "@/redux/api/product/productApi";
import { EditNote } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const ManageProductsPage = () => {
  //: Get all pets
  const { data: products, isLoading } = useGetAllProductsQuery("");

  //: Delete pet
  const [deleteProduct] = useDeleteProductByIdMutation();

  //: Modal open state
  const [open, setOpen] = React.useState(false);

  //: Selected row
  const [selectedRow, setSelectedRow] = React.useState<any>();

  //: Handle delete pet
  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting Product ...");
    try {
      await deleteProduct(id).unwrap();
      toast.success("Prouduct deleted successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Failed to delete Product", { id: toastId, duration: 2000 });
    }
  };

  console.log("products", products);
  

  const rowsData = products?.data?.map((product: any) => ({
    id: product._id,
    name: product.name,
    price: Number(product.price),
    discount: Number(product.discount),
    company: product.company,
    quantity: Number(product.quantity),
    photos: product?.photos[0]
  }));

  const columns: GridColDef[] = [
    {
      field: "photos",
      headerName: "Photo",
      flex: 1,
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      renderCell: ({ row }) => (
        <Image
          src={row?.photos}
          alt="pet image"
          height={80}
          width={80}
          className="rounded"
        />
      ),
    },
    {
      field: "name",
      headerName: "Name",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "company",
      headerName: "company",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      headerClassName: "bg-[#f04336] text-white text-lg font-extrabold",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              onClick={() => handleDelete(row.id)}
              aria-label="delete"
            >
              <DeleteIcon
                sx={{
                  color: "red",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
                }}
              />
            </IconButton>

            <Tooltip title="Update pet">
              <IconButton
                onClick={() => {
                  setOpen(true);
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

  if (isLoading) {
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
      {/* <PetViewModal selectedRow={selectedRow} open={open} setOpen={setOpen} /> */}
      <SectionHeader HeaderTitle="Manage Pets" subTitle="Dashboard" />
      <Box my={10}>
        <Box sx={{ minHeight: "100vh", width: "100%" }}>
          <DataGrid
            rows={rowsData}
            columns={columns}
            rowHeight={100}
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

export default ManageProductsPage;
