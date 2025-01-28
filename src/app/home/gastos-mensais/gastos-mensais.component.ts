import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-gastos-mensais',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './gastos-mensais.component.html',
  styleUrls: ['./gastos-mensais.component.scss'],
})
export class GastosMensaisComponent {
  public chartType: ChartType = 'bar';

  public chartLabels: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  public chartData: ChartConfiguration['data'] = {
    labels: this.chartLabels,
    datasets: [
      {
        data: [1000, 950, 850, 1100, 600, 750, 775, 2500, 1000, 700, 2400, 3000],
        label: 'R$ Gastos Mensais',
        backgroundColor:  'rgba(75, 192, 192, 1)'
      },
    ],
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

}
