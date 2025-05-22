import { Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {FloatLabelType, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { ApiService } from '../api.service';

interface StringResponse {
  token: string;
}

@Component({
  selector: 'app-inserir-valores',
  imports: [MatCardModule, MatInputModule, MatRadioModule, FormsModule, ReactiveFormsModule, MatIconModule, MatSelectModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './inserir-valores.component.html',
  styleUrl: './inserir-valores.component.scss'
})
export class InserirValoresComponent {
  inserirForm!: FormGroup;
    constructor(
      private apiService: ApiService,
      private fb: FormBuilder
    ){}
    ngOnInit(): void {
      this.inserirForm = this.fb.group({
        tipo: [''],
        valor: [''],
        categoria: [''],
        observacao: ['']
      });
    }

    readonly tipo = new FormControl('1' as FloatLabelType);

    insere_valor(){
      const dados = this.inserirForm.value;
      this.apiService.EnviarValor(dados).subscribe({
        next: () => console.log('Valor enviado com sucesso'),
        error: (err) => console.error('Erro ao enviar valor:', err)
      });
    }


}
