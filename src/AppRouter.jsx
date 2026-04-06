import { Route, Routes } from 'react-router'
import { AdminWrapper, Dashboard, History, Profile, TopUp, Transfer, LandingPage } from '@pages'

function AppRouter() {
  return (
    <Routes>
      <Route index element={ <LandingPage /> } />
      <Route path="admin" element={ <AdminWrapper /> }>
        <Route path="dashboard" element={ <Dashboard /> } />
        <Route path="transfer" element={ <Transfer /> } />
        <Route path="history" element={ <History /> } />
        <Route path="topup" element={ <TopUp /> } />
        <Route path="profile" element={ <Profile /> } />
      </Route>
    </Routes>
  )
}

export default AppRouter