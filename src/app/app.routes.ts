import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Users } from './pages/admin/users/users';
import { Employees } from './pages/admin/employees/employees';
import { Lab } from './pages/lab/lab';
import { Audit } from './pages/audit/audit';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'admin/users', component: Users },
  { path: 'admin/employees', component: Employees },
  { path: 'lab', component: Lab },
  { path: 'audit', component: Audit },
  { path: '**', redirectTo: '' },
];
