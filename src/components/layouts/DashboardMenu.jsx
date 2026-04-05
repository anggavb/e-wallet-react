import { Navigation } from '@components';
import { listMenus } from '@utils';

/**
 * DashboardMenu component that renders the navigation menu for the dashboard layout.
 * @returns {JSX.Element}
 */
function DashboardMenu() {
  return (
    <nav className="min-h-[calc(100vh-56px)] bg-mist-50 border-r border-gray-300 px-4 py-8 flex flex-col gap-2">
      {
        listMenus.map((menu) => (
          <Navigation key={menu.to} to={menu.to}>
            {menu.icon && <menu.icon className={menu.class} />}
            {menu.name}
          </Navigation>
        ))
      }
    </nav>
  )
}

export default DashboardMenu