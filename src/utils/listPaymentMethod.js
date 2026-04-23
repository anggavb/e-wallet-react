import { BRIIcon, DanaIcon, BCAIcon, GopayIcon, OVOIcon } from "@components/atoms/icons"
export default [
  {
    icon: BRIIcon,
    name: 'Bank Rakyat Indonesia',
    isBank: true,
    value: 'bri',
    errorMessage: "Please select a payment method",
  },
  {
    icon: DanaIcon,
    name: 'Dana',
    isBank: false,
    value: 'dana',
    errorMessage: "Please select a payment method",
  },
  {
    icon: BCAIcon,
    name: 'Bank Central Asia',
    isBank: true,
    value: 'bca',
    errorMessage: "Please select a payment method",
  },
  {
    icon: GopayIcon,
    name: 'Gopay',
    isBank: false,
    value: 'gopay',
    errorMessage: "Please select a payment method",
  },
  {
    icon: OVOIcon,
    name: 'OVO',
    isBank: false,
    value: 'ovo',
    errorMessage: "Please select a payment method",
  },
]