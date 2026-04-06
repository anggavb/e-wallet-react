import { DashboardIcon, TransferIcon, HistoryIcon, TopUpIcon, ProfileIcon, LogoutIcon } from '@components/atoms/icons';

const prefix = '/admin'
export default [
  {
    name: 'Dashboard',
    to: `${prefix}`,
    icon: DashboardIcon,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Transfer',
    to: `${prefix}/transfer`,
    icon: TransferIcon,
    class: 'fill-gray-600 group-aria-[current=page]:fill-current group-hover:fill-blue-800',
  },
  {
    name: 'History',
    to: `${prefix}/history`,
    icon: HistoryIcon,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Top Up',
    to: `${prefix}/topup`,
    icon: TopUpIcon,
    class: 'fill-gray-600 group-aria-[current=page]:fill-current group-hover:fill-blue-800',
  },
  {
    name: 'Profile',
    to: `${prefix}/profile`,
    icon: ProfileIcon,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Logout',
    to: `${prefix}/logout`,
    icon: LogoutIcon,
    class: 'stroke-red-600 group-hover:stroke-red-800',
  },
]