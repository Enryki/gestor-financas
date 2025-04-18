import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { HomeComponent } from './home/home.component';
import { InserirValoresComponent } from './inserir-valores/inserir-valores.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'recuperar_senha', component: EsqueciSenhaComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'inserir_valores', canActivate: [AuthGuard], component: InserirValoresComponent },
];
