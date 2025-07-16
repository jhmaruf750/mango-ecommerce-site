import AdminInventoryTable from "../../components/admin/AdminInventoryTable";

function AdminDashboard() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-success fw-bold text-center"></h2>
      <AdminInventoryTable />
    </div>
  );
}

export default AdminDashboard;
