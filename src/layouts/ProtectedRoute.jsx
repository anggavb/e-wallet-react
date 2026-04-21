import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children, userLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      toast.error("You must be logged in to access this page");
      navigate("/");
    }
  }, [navigate, userLoggedIn, children]);

  return children;
};

export default ProtectedRoute;
