import { DashboardIcon, TransferIcon, HistoryIcon, TopUpIcon, ProfileIcon, LogoutIcon } from '@components/icons';

export default [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: DashboardIcon,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Transfer',
    to: '/transfer',
    icon: TransferIcon,
    class: 'fill-gray-600 group-aria-[current=page]:fill-current group-hover:fill-blue-800',
  },
  {
    name: 'History',
    to: '/history',
    icon: HistoryIcon,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Top Up',
    to: '/topup',
    icon: TopUpIcon,
    class: 'fill-gray-600 group-aria-[current=page]:fill-current group-hover:fill-blue-800',
  },
  {
    name: 'Profile',
    to: '/profile',
    icon: ProfileIcon,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Logout',
    to: '/logout',
    icon: LogoutIcon,
    class: 'stroke-red-600 group-hover:stroke-red-800',
  },
]