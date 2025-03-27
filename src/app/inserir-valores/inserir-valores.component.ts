import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-inserir-valores',
  imports: [MatCardModule, MatInputModule, MatRadioModule, FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './inserir-valores.component.html',
  styleUrl: './inserir-valores.component.scss'
})
export class InserirValoresComponent {
}
