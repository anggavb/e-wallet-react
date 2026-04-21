import { Navigate } from "react-router";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children, userLoggedIn }) => {
  if (!userLoggedIn) {
    toast.error("You must be logged in to access this page");
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
