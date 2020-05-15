import React from 'react';

import {
  MdAccountBalanceWallet,
  MdPeople,
  MdPeopleOutline,
} from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';

const size = 19;
const folders = [
  {
    label: 'Ventas',
    icon: <GiMoneyStack size={size} />,
    to: '/ventas',
  },
  {
    label: 'Tablero',
    icon: <MdAccountBalanceWallet size={size} />,
    to: '/tablero',
  },
  {
    label: 'Clientes',
    icon: <MdPeople size={size} />,
    to: '/clientes',
  },
  {
    label: 'Proveedores',
    icon: <MdPeopleOutline size={size} />,
    to: '/proveedores',
  },
];

export default folders;
