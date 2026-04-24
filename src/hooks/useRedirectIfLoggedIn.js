import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const useRedirectIfLoggedIn = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (user && user.pin) {
      navigate("/admin", { replace: true });
    }
  }, [user, navigate]);
};

export default useRedirectIfLoggedIn;