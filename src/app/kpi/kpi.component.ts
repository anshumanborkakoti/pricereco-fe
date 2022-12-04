import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { KpiService } from './kpi.service';
import * as KPI from './data/kpi';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss']
})
export class KpiComponent implements OnInit, OnDestroy {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor(private kpiService: KpiService) { }

  private potSubscription = new Subscription();
  private loadSubscription = new Subscription();
  barChartData?: ChartData<'bar'>;
  isLoading = false;

  ngOnInit() {
    this.potSubscription = this.kpiService.pot$.subscribe(potData => {
      this.barChartData = potData;
    });
    this.loadSubscription = this.kpiService.isLoading$.subscribe(aIsloading => {
      this.isLoading = aIsloading;
    });
    this.kpiService.getPriceOverTimeData();
  }

  ngOnDestroy(): void {
    this.potSubscription.unsubscribe();
    this.loadSubscription.unsubscribe();
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  // public barChartData: ChartData<'bar'> = {
  //   labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
  //   datasets: [
  //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Shirts123' },
  //     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Shirts456' }
  //   ]
  // };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public update(): void {
    //TODO - get filter arguments
    // Only Change 3 values
    this.kpiService.updatePotData();
  }
}
