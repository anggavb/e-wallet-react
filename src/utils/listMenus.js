import { DashboardIcon, TransferIcon, HistoryIcon, TopUpIcon, ProfileIcon, LogoutIcon } from '@components/atoms/icons';

const prefix = '/admin'

export default [
  {
    name: 'Dashboard',
    to: `${prefix}`,
    icon: DashboardIcon,
    isEnd: true,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Transfer',
    to: `${prefix}/transfer`,
    icon: TransferIcon,
    isEnd: false,
    class: 'fill-gray-600 group-aria-[current=page]:fill-current group-hover:fill-blue-800',
  },
  {
    name: 'History',
    to: `${prefix}/history`,
    icon: HistoryIcon,
    isEnd: true,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Top Up',
    to: `${prefix}/top-up`,
    icon: TopUpIcon,
    isEnd: true,
    class: 'fill-gray-600 group-aria-[current=page]:fill-current group-hover:fill-blue-800',
  },
  {
    name: 'Profile',
    to: `${prefix}/profile`,
    icon: ProfileIcon,
    isEnd: false,
    class: 'stroke-gray-600 group-aria-[current=page]:stroke-current group-hover:stroke-blue-800',
  },
  {
    name: 'Logout',
    to: `/`,
    icon: LogoutIcon,
    isEnd: true,
    class: 'stroke-red-600 group-hover:stroke-red-800',
  },
]