"use client";

import {
  useDeleteCategoryByIdMutation,
  useGetAllCategoriesQuery,
} from "@/redux/api/category/categoryApi";
import {
  useDeleteVarientByIdMutation,
  useGetAllVarientsQuery,
} from "@/redux/api/varients/varientsApi";
import { EditNote } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";
import VarientViewModal from "./VarientViewModel";

const VarientsTable = () => {
  //: Get all pets
  const { data: Varients, isLoading } = useGetAllVarientsQuery("");

  //: Delete pet
  const [deleteVariant] = useDeleteVarientByIdMutation();

  //: Modal open state
  const [open, setOpen] = React.useState(false);

  //: Selected row
  const [selectedRow, setSelectedRow] = React.useState<any>();

  //: Handle delete pet
  const handleDelete = async (id: string) => {
    const toastId = toast.loading("Deleting Product ...");
    try {
      await deleteVariant(id).unwrap();
      toast.success("Varient deleted successfully", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      toast.error("Failed to delete Product", { id: toastId, duration: 2000 });
    }
  };

  const rowsData = Varients?.data?.map((varient: any) => ({
    id: varient._id,
    name: varient.name + " " + "MG",
    price: varient.price,
  }));

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
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
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <VarientViewModal
        selectedRow={selectedRow}
        open={open}
        setOpen={setOpen}
      />
      <Box my={10}>
        <Box sx={{ minHeight: "100vh", width: "100%" }}>
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

export default VarientsTable;
