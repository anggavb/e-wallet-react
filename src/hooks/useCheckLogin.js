import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector } from "react-redux";

const useCheckLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { users } = useSelector((state) => state.users);
  const { user: userLoggedIn } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!users.some((user) => user.id === userLoggedIn.id)) {
      if (location.pathname.includes("admin")) {
        return navigate("/", { replace: true });
      }
      return;
    }
    return navigate("/admin", { replace: true });
  }, [users, userLoggedIn.id, navigate, location.pathname]);
}

export default useCheckLogin