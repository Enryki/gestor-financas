import { Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-inserir-valores',
  imports: [MatCardModule, MatInputModule, MatRadioModule, FormsModule, ReactiveFormsModule, MatIconModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './inserir-valores.component.html',
  styleUrl: './inserir-valores.component.scss'
})
export class InserirValoresComponent {
  inserirForm!: FormGroup;
    constructor(
      private fb: FormBuilder
    ){}
    ngOnInit(): void {
      this.inserirForm = this.fb.group({
        tipo_insercao: [''],
        valor: [''],
        categoria: [''],
        observacao: ['']
      });
    }

    readonly tipo_insercao = new FormControl('1' as FloatLabelType);

    insere_valor(){
      console.log('teste');
    }


}
