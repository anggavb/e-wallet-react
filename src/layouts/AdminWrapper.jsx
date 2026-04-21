import { Outlet, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import {
  DashboardMenu,
  DashboardHeader,
  FloatingConfirm,
} from "@components/organisms";
import useLogoutStore from "@zustand/store";
import { userLoginAction } from "@redux/slices/userLogin";
import { toast } from "react-toastify";

/**
 * AdminWrapper component that serves as a layout wrapper for admin-related pages.
 * @returns {JSX.Element}
 */
function AdminWrapper() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { modalLogout, toggleModalLogout } = useLogoutStore((state) => state);
  const handleConfirmLogout = () => {
    toggleModalLogout();
    navigate("/", { replace: true });
    setTimeout(() => {
      dispatch(userLoginAction.logout());
    }, 50);
    toast.info("Come back soon! 👋");
  };
  return (
    <>
      <FloatingConfirm
        open={modalLogout}
        title="Confirm Logout"
        messages="Are you sure you want to logout?"
        handleOpen={toggleModalLogout}
        handleConfirm={handleConfirmLogout}
      />
      <div className="min-h-screen bg-slate-50 text-neutral-800 overflow-x-hidden">
        <DashboardHeader />
        <div className="grid grid-cols-1 min-h-[calc(100vh-56px)] md:grid-cols-[200px_1fr] md:min-h-[calc(100vh-70px)] lg:grid-cols-[240px_1fr_340px] xl:grid-cols-[260px_1fr_380px] 2xl:grid-cols-[280px_1fr_400px]">
          <DashboardMenu />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminWrapper;
