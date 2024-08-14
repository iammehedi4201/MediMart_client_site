import UsersTable from "@/components/Ui/Dashboard/admin/ManageUsers/UsersTable";

export const metadata = {
  title: "MediMart | Manage Users",
  description: "Manage Users Page for Admin",
};

const ManageUsersPage = () => {
  return (
    <>
      <UsersTable showSectionHeader={false} />
    </>
  );
};

export default ManageUsersPage;
