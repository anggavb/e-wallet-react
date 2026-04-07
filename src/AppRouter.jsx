import { Route, Routes } from "react-router";
import {
  AdminWrapper,
  Dashboard,
  History,
  Profile,
  TopUp,
  Transfer,
  TransferDetail,
} from "@pages/admin";
import { Login, Register } from "@pages";

function AppRouter() {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="admin" element={<AdminWrapper />}>
        <Route index element={<Dashboard />} />
        <Route path="transfer">
          <Route index element={<Transfer />} />
          <Route path="detail" element={<TransferDetail />} />
        </Route>
        <Route path="history" element={<History />} />
        <Route path="top-up" element={<TopUp />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
