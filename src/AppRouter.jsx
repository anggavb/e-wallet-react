import { Route, Routes } from 'react-router'
import { Dashboard, History, Profile, TopUp, Transfer } from './pages'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={ <Dashboard /> } />
      <Route path="/transfer" element={ <Transfer /> } />
      <Route path="/history" element={ <History /> } />
      <Route path="/topup" element={ <TopUp /> } />
      <Route path="/profile" element={ <Profile /> } />
    </Routes>
  )
}

export default AppRouter