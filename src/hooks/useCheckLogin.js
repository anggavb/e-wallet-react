import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector } from "react-redux";

const useCheckLogin = () => {
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;
  const { users } = useSelector((state) => state.users);
  const { user: userLoggedIn } = useSelector((state) => state.userLogin);

  useEffect(() => {
    const publicPaths = ["/login", "/register", "/", "/enter-pin", "/forgot-password", ""];

    if (publicPaths.includes(currentPath) && !userLoggedIn) {
      return;
    } else if (!userLoggedIn) {
      return navigate("/", { replace: true });
    } else if (userLoggedIn && publicPaths.includes(currentPath)) {
      return navigate("/admin", { replace: true });
    }
    // return navigate("/admin", { replace: true });
  }, [users, userLoggedIn, navigate, currentPath]);
}

export default useCheckLogin