import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, MatCardModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService // Corrigido: AuthService injetado aqui
  ) {
    this.loginForm = this.fb.group({
      usuario: [''],
      senha: [''],
    });
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  validar_login(): void {
    const { usuario, senha } = this.loginForm.value;

    this.authService.login(usuario, senha).subscribe({
      next: (sucesso) => {
        console.log('Resultado do login:', sucesso);
        if (sucesso) {
          console.log('Token salvo:', this.authService.getToken());
          this.router.navigate(['/home']);
        } else {
          alert('Usuário ou senha inválidos!');
        }
      },
      error: (erro) => console.error('Erro no subscribe:', erro)
    });
  }

  esqueci(){
    this.router.navigate(['/recuperar_senha']);
  }

  registro(){
    this.router.navigate(['/registrar']);
  }
}
