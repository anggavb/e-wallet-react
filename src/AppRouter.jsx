import { Route, Routes } from "react-router";
import { AdminWrapper } from "@layouts";
import {
  Dashboard,
  History,
  Profile,
  TopUp,
  Transfer,
  TransferDetail,
  ProfileChangePassword,
} from "@pages/admin";
import { Login, Register, Landing, EnterPin } from "@pages";
import { useCheckLogin } from "@hooks";

function AppRouter() {
  useCheckLogin();
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="enter-pin" element={<EnterPin />} />
      <Route path="admin" element={<AdminWrapper />}>
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
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
