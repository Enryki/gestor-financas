import { Component, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private router: Router) {}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  usuario = ''
  senha = '';

  validar_login(){
    console.log('a função entrou!');
  }

  esqueci(){
    this.router.navigate(['/recuperar_senha']);
  }

  registro(){
    this.router.navigate(['/registrar']);
  }
}
