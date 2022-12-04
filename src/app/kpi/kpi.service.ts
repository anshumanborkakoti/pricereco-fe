import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as KPI from './data/kpi';
import { potData } from './data/data';

@Injectable({
  providedIn: 'root'
})
export class KpiService {

  private potSubject = new BehaviorSubject<KPI.PriceOverTime>({} as KPI.PriceOverTime);
  public pot$ = this.potSubject.asObservable();
  private isLoading = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoading.asObservable();
  constructor() { }

  getPriceOverTimeData() {
    this.isLoading.next(true);
    setTimeout(() => {
      this.potSubject.next(potData)
      this.isLoading.next(false);
    }, 5000);
  }

  updatePotData() {
    //TODO - get filter arguments
    this.isLoading.next(true);
    potData.datasets = potData.datasets.map(dataset => {
      dataset.data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)];
      console.log(dataset.data)
      return dataset;
    })
    setTimeout(() => {
      this.potSubject.next(potData)
      this.isLoading.next(false);
    }, 5000);
  }
}
