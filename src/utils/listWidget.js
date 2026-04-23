import { BalanceIcon, IncomeIcon, ExpenseIcon, StonkIcon, DownStonkIcon } from '@components/atoms/icons';

export default [
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