import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, MatCardModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
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
    // adicionara validação com o back-end no futuro

    if(usuario == 'teste' && senha == "123"){
      this.router.navigate(['/home']);
    }
  }

  esqueci(){
    this.router.navigate(['/recuperar_senha']);
  }

  registro(){
    this.router.navigate(['/registrar']);
  }
}
