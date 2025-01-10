import { Component } from '@angular/core';
import { GastosMensaisComponent } from './gastos-mensais/gastos-mensais.component';

@Component({
  selector: 'app-home',
  imports: [GastosMensaisComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}
