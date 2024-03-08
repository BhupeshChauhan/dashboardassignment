import { uniqueId } from 'lodash';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

const MenuItems = () => {
  const items = [
    {
      navlabel: true,
      subheader: 'Auth',
    },
    {
      id: uniqueId(),
      title: 'Users',
      icon: MdOutlineAdminPanelSettings,
      href: '/users/list',
      path: 'users',
    },
  ];
  return { items };
};

export default MenuItems;
