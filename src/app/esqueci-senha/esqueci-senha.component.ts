import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-esqueci-senha',
  imports: [MatCardModule, MatInputModule, MatIconModule, FormsModule, MatButtonModule, RouterModule],
  templateUrl: './esqueci-senha.component.html',
  styleUrl: './esqueci-senha.component.scss'
})
export class EsqueciSenhaComponent {
  recuperar_senha(){
    
  }
}
