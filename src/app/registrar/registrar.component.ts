import { UserService } from './../services/user.service';
import { Component, signal } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule  } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar',
  imports: [MatCardModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule, RouterModule, ReactiveFormsModule ],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.scss'
})
export class RegistrarComponent {
  registrarForm!: FormGroup;
  constructor(private fb: FormBuilder,
              private UserService: UserService,
              private router: Router,) {}
  ngOnInit(): void {
    this.registrarForm = this.fb.group({
      usuario: [''],
      email: [''],
      senha: [''],
      confirma_senha: ['']
    });
  }

  hide = signal(true);
  hideconfirmation = signal(true)

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  clickEventConfirmation(event: MouseEvent){
    this.hideconfirmation.set(!this.hideconfirmation());
    event.stopPropagation();
  }

  registrar(){
    const { usuario, email, senha, confirma_senha } = this.registrarForm.value;

    console.log(confirma_senha + senha);
    if (senha != confirma_senha){
      alert("As senhas precisam ser iguais");
      return;
    }

    this.UserService.registrar(usuario, email, senha, confirma_senha).subscribe({
      next: (resposta) => {
        localStorage.setItem('authToken', resposta.token);
        this.router.navigate(['/home']);
      },
      error: (erro) => {
        console.error("Erro ao registrar:", erro);
        // Mostrar mensagem de erro para o usuário
      }
    });
  }
}
