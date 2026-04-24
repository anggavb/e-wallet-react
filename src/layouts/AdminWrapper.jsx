import { Outlet } from "react-router";
import {
  DashboardMenu,
  DashboardHeader,
  FloatingConfirm,
} from "@components/organisms";
import { LoadingOverlay } from "@components/molecules";
import useLogoutStore from "@zustand/store";
import spinner from "@/zustand/spinner";

/**
 * AdminWrapper component that serves as a layout wrapper for admin-related pages.
 * @returns {JSX.Element}
 */
function AdminWrapper() {
  const { modalLogout, title, messages, handleConfirm, toggleModalLogout } =
    useLogoutStore((state) => state);

  const { isLoading } = spinner((state) => state);

  return (
    <>
      <FloatingConfirm
        open={modalLogout}
        title={title}
        messages={messages}
        handleOpen={toggleModalLogout}
        handleConfirm={handleConfirm}
      />
      <div className="min-h-screen bg-slate-50 text-neutral-800 overflow-x-hidden">
        <DashboardHeader />
        <div className="grid grid-cols-1 min-h-[calc(100vh-56px)] md:grid-cols-[200px_1fr] md:min-h-[calc(100vh-70px)] lg:grid-cols-[240px_1fr_340px] xl:grid-cols-[260px_1fr_380px] 2xl:grid-cols-[280px_1fr_400px]">
          <DashboardMenu />
          <Outlet />
        </div>
      </div>
      <LoadingOverlay isOpen={isLoading} />
    </>
  );
}

export default AdminWrapper;
