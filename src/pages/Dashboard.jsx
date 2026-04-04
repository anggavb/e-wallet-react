import { usePageTitle } from "../hooks"
import { DashboardMenu } from "../components/layouts"

function Dashboard() {
  usePageTitle("Dashboard")
  return (
    <div>
      <DashboardMenu />
      <div>Dashboard Content</div>
    </div>
  )
}

export default Dashboard