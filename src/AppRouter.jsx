import { Route, Routes } from "react-router";
import { useSelector } from "react-redux";
import { AdminWrapper, ProtectedRoute } from "@layouts";
import {
  Dashboard,
  History,
  Profile,
  TopUp,
  Transfer,
  TransferDetail,
  ProfileChangePassword,
  ProfileChangePin,
} from "@pages/admin";
import {
  Login,
  Register,
  Landing,
  EnterPin,
  ForgotPassword,
  ResetPassword,
} from "@pages";

function AppRouter() {
  const { user: userLoggedIn } = useSelector((state) => state.userLogin);
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="enter-pin" element={<EnterPin />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route
        path="admin"
        element={
          <ProtectedRoute userLoggedIn={userLoggedIn}>
            <AdminWrapper />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="transfer">
          <Route index element={<Transfer />} />
          <Route path="detail" element={<TransferDetail />} />
        </Route>
        <Route path="history" element={<History />} />
        <Route path="top-up" element={<TopUp />} />
        <Route path="profile">
          <Route index element={<Profile />} />
          <Route path="change-password" element={<ProfileChangePassword />} />
          <Route path="change-pin" element={<ProfileChangePin />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
