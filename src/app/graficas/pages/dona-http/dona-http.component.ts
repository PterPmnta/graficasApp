import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    this.graficasService.getDataTransformed().subscribe(({ labels, datos }) => {
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets = [{ data: datos }];
    });
  }
}
