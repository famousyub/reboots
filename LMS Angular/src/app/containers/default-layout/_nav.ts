import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Rebots',
    url: '/book/books',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
];

export const adminNavItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  // <a routerLinkActive="active" routerLink="/employees-list">View Employees</a>
  //<a routerLinkActive="active" routerLink="/create-employee">Add Employee</a>
  {
    name: 'Rebots',
    url: '/book/books',
    iconComponent: { name: 'cil-spreadsheet' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    name: 'RebotsEmpl',
    url: '/employees-list',
    iconComponent: { name: 'cil-spreadsheet' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    name: 'CreateEmployee',
    url: '/create-employees',
    iconComponent: { name: 'cil-spreadsheet' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },


  {
    name: 'Planification',
    url: '/issues/issuebooks',
    iconComponent: { name: 'cil-people' },

    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Admins',
    url: '/admin/admins',
    iconComponent: { name: 'cil-user' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
];
