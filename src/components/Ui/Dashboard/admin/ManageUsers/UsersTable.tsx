"use client";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ChangeRoleModal from "@/components/Ui/ChangeRoleModal/ChangeRoleModal";
import ChangeUserStatus from "@/components/Ui/ChangeUserStatus/ChangeUserStatus";
import { useGetAllUsersQuery } from "@/redux/api/user/userApi";
import { EditNote } from "@mui/icons-material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Box, CircularProgress, IconButton, Tooltip } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import React from "react";

const UsersTable = ({ showSectionHeader }: { showSectionHeader: boolean }) => {
  //: Get all pets
  const { data: users, isLoading: isUserLoading } =
    useGetAllUsersQuery(undefined);

  //: Delete pet
  //   const [deletePet] = useDeleteUserMutation();

  //: Change Role Modal State
  const [roleModalOpen, setRoleModalOpen] = React.useState(false);

  //: Change User Status Modal State
  const [changeUserModalOpen, setChangeUserModalOpen] = React.useState(false);

  //: Selected row
  const [selectedRow, setSelectedRow] = React.useState<any>();

  if (isUserLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  const rowsData = users?.data?.map((user: any) => ({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.roles,
    photo: user?.photo,
  }));

  const columns: GridColDef[] = [
    {
      field: "photo",
      headerName: "Photo",
      flex: 1,
      headerClassName: showSectionHeader
        ? "bg-[#f9fafb]  text-Black text-lg font-extrabold"
        : "bg-[#f04336]  text-white text-lg font-extrabold",
      renderCell: ({ row }) => (
        <Image
          src={row?.photo}
          alt="User Photo"
          height={80}
          width={80}
          className="rounded"
        />
      ),
    },
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
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
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
                  setChangeUserModalOpen(true);
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
                  setRoleModalOpen(true);
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

  if (isUserLoading) {
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <div className="w-20 h-20 border-t-4 border-b-4 border-[#f04336] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <ChangeUserStatus
        selectedRow={selectedRow}
        changeUserModalOpen={changeUserModalOpen}
        setChangeUserModalOpen={setChangeUserModalOpen}
      />
      <ChangeRoleModal
        selectedRow={selectedRow}
        roleModalOpen={roleModalOpen}
        setRoleModalOpen={setRoleModalOpen}
      />

      {showSectionHeader ? (
        <div className="-mb-16"></div>
      ) : (
        <SectionHeader HeaderTitle="Manage Users" subTitle="Dashboard" />
      )}
      <Box my={10}>
        <Box sx={{ minHeight: "100vh", width: "100%", px: 2 }}>
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

export default UsersTable;
