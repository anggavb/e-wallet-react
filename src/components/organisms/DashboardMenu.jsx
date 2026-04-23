import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

import { userLoginAction } from "@redux/slices/userLogin";
import { Navigation } from "@components/atoms";
import { listMenus } from "@utils";
import useLogoutStore from "@zustand/store";

/**
 * DashboardMenu component that renders the navigation menu for the dashboard layout.
 * @returns {JSX.Element}
 */
function DashboardMenu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { toggleModalLogout, setHandleConfirm } = useLogoutStore(
    (state) => state,
  );
  const handleConfirmLogout = () => {
    toggleModalLogout();
    setHandleConfirm(() => {
      toggleModalLogout();
      navigate("/", { replace: true });
      setTimeout(() => {
        dispatch(userLoginAction.logout());
      }, 50);
      toast.info("Come back soon! 👋");
    });
  };
  return (
    <nav className="hidden flex-col p-8 px-3 bg-slate-50 border-r border-gray-200 md:flex lg:px-4">
      {listMenus.map((menu) => (
        <Navigation
          key={menu.to}
          to={menu.to}
          onClick={
            menu.name === "Logout"
              ? (e) => {
                  e.preventDefault();
                  handleConfirmLogout();
                }
              : () => {}
          }
          end={menu.isEnd}
        >
          {menu.icon && <menu.icon className={menu.class} />}
          {menu.name}
        </Navigation>
      ))}
    </nav>
  );
}

export default DashboardMenu;
