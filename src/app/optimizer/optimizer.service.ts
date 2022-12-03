import { initial,edited } from './data/data';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Prices } from './data/data.type';

@Injectable({
  providedIn: 'root'
})
export class OptimizerService {

  private priceSubject = new BehaviorSubject<Prices>({} as Prices);
  private loadingSub= new BehaviorSubject<boolean>(false);
  constructor() {
  }

  get priceObservable(): Observable<Prices> {
    return this.priceSubject.asObservable();
  }

  get loadingObservable(): Observable<boolean>{
    return this.loadingSub.asObservable();
  }


  public getInitialData() {
    this.loadingSub.next(true);
    setTimeout(() => {
      this.priceSubject.next(initial);
      this.loadingSub.next(false);
    }, 5000);
  }

  public save(aPrices:Prices) {
    this.loadingSub.next(true);
    setTimeout(() => {
      this.priceSubject.next(edited);
      this.loadingSub.next(false);
    }, 5000);
  }
}
