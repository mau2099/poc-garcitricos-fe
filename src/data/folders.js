import React from 'react';

import {
  MdAccountBalanceWallet,
  MdPeople,
  MdPeopleOutline,
} from 'react-icons/md';

const folders = [
  {
    label: 'Balance',
    icon: <MdAccountBalanceWallet />,
    to: '/balance',
  },
  {
    label: 'Clientes',
    icon: <MdPeople />,
    to: '/clientes',
  },
  {
    label: 'Proveedores',
    icon: <MdPeopleOutline />,
    to: '/proveedres',
  },
];

export default folders;
