import { Outlet, useNavigate } from "react-router";
import { DashboardMenu, DashboardHeader } from "@components/organisms";
import { useEffect, useState } from "react";

/**
 * AdminWrapper component that serves as a layout wrapper for admin-related pages.
 * @returns {JSX.Element}
 */
function AdminWrapper() {
  const navigate = useNavigate();
  const [user, _] = useState(localStorage.getItem("userLoggedIn"));

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
      return;
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-slate-50 text-neutral-800 overflow-x-hidden">
      <DashboardHeader />
      <div className="grid grid-cols-1 min-h-[calc(100vh-56px)] md:grid-cols-[200px_1fr] md:min-h-[calc(100vh-70px)] lg:grid-cols-[240px_1fr_340px] xl:grid-cols-[260px_1fr_380px] 2xl:grid-cols-[280px_1fr_400px]">
        <DashboardMenu />
        <Outlet />
      </div>
    </div>
  );
}

export default AdminWrapper;
