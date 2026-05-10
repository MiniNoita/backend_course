import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin';
import { authGuard } from './auth.guard';
import { ListComponent } from './list/list';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
];
