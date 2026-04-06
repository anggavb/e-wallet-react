import { BalanceIcon, IncomeIcon, ExpenseIcon, StonkIcon, DownStonkIcon } from '@components/atoms/icons';

export default [
  {
    icon: BalanceIcon,
    name: 'Balance',
    content: 'Rp.120.000',
    footer: {
      growth: '+2%',
      icon: StonkIcon,
      time: '3 Days Ago',
      color: 'text-emerald-600',
    },
  },
  {
    icon: IncomeIcon,
    name: 'Income',
    content: 'Rp2.120.000',
    footer: {
      growth: '+11.01%',
      icon: StonkIcon,
      color: 'text-emerald-600',
    },
  },
  {
    icon: ExpenseIcon,
    name: 'Expense',
    content: 'Rp.200.000',
    footer: {
      growth: '-5.06%',
      icon: DownStonkIcon,
      color: 'text-red-600',
    },
  }
];