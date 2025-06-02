const menus = [];
const addMenu = (menu) => {
  menus.push(menu);
};

const addSubMenu = (label, subMenu, menu = menus) => {
  for (const item of menu) {
    if (item.label === label) {
      item.subMenus.push(subMenu);
      return;
    }
    if (item.subMenus) {
      addSubMenu(label, subMenu, item.subMenus);
    }
  }
};

export const settingsMenu = [
  {
    route: '#',
    label: 'Pengaturan',
    permission: 'administrator',
    subMenus: [
      {
        route: '/settings/appearance',
        label: 'Pengaturan Tampilan',
        permission: 'administrator',
      },
      {
        route: '/settings/role',
        label: 'Pengaturan Role',
        permission: 'administrator',
      },
      {
        route: '/settings/user',
        label: 'Pengaturan User',
        permission: 'administrator',
      },
    ]
  },
]

export default menus;

addMenu({
	id: '_K7a2ICdlEfCalNmtXmXVJQ',
	route: '/projects',
    label: 'Project',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_a32doCdlEfCalNmtXmXVJQ',
	route: '/timelog',
    label: 'Timelog',
    permission: '',
	subMenus: [],
})

addMenu({
	id: '_0VdHICdqEfCalNmtXmXVJQ',
	route: '/task',
    label: 'Task',
    permission: '',
	subMenus: [],
})
