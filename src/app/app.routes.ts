import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Employees } from './pages/admin/employees/employees';
import { Users } from './pages/admin/users/users';
import { Audit } from './pages/audit/audit';
import { Lab } from './pages/lab/lab';
import { Test2 } from './pages/test2/test2';
import { Sub1 } from './pages/test3/sub1/sub1';
import { Sub2 } from './pages/test3/sub2/sub2';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'admin/employees', component: Employees },
  { path: 'admin/users', component: Users },
  { path: 'audit', component: Audit },
  { path: 'lab', component: Lab },
  { path: 'test2', component: Test2 },
  { path: 'test3/sub1', component: Sub1 },
  { path: 'test3/sub2', component: Sub2 },
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
