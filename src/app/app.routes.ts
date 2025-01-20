import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'registrar', loadComponent: () => import('./registrar/registrar.component').then(m => m.RegistrarComponent) },
  { path: 'recuperar_senha', loadComponent: () => import('./esqueci-senha/esqueci-senha.component').then(m => m.EsqueciSenhaComponent) },
  { path: 'home', canActivate: [AuthGuard], loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
];
