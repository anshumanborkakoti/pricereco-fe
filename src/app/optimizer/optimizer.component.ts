import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectionModel } from '@angular/cdk/collections';
import { Subscription } from 'rxjs';
import { OptimizerService } from './optimizer.service';
import { InventoryEntity, Price, Prices, MetricsEntity } from './data/data.type';


@Component({
  selector: 'app-optimizer',
  templateUrl: './optimizer.component.html',
  styleUrls: ['./optimizer.component.scss']
})
export class OptimizerComponent implements OnInit, OnDestroy {
  // @ts-ignore
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ts-ignore
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<InventoryEntity> = new MatTableDataSource<InventoryEntity>([]);
  displayedColumns: string[] = ['image', 'name', 'currentprice', 'recommended', 'adjust', 'alert', 'actions'];
  selection = new SelectionModel<InventoryEntity>(false, []);
  private pricesSub: Subscription | undefined;
  private filterValue: string = '';

  isLoading = false;
  private loadingSubscription: Subscription | undefined;
  metrics: MetricsEntity | null = null;
  private prices: Prices | undefined;

  constructor(private optimizerService: OptimizerService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.pricesSub = this.optimizerService.priceObservable
      .subscribe(aPrices => {
        const currentStore = "123er"; //harcoded now
        const store = aPrices.stores.find((store) => store.id === currentStore);
        this.prices = aPrices;
        if (!this.dataSource) {
          this.dataSource = new MatTableDataSource<InventoryEntity>([]);
        }
        if (store) {
          this.dataSource.data = [...store.inventory];
        } else {
          this.dataSource.data = [];
        }
        this.metrics = aPrices.metrics;
        this.selection.clear();
      });
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.filter = this.filterValue;

    this.loadingSubscription = this.optimizerService.loadingObservable
      .subscribe(aIsLoading => this.isLoading = !!aIsLoading);

    this.optimizerService.getInitialData();
  }

  ngOnDestroy(): void {
    if (this.pricesSub) {
      this.pricesSub.unsubscribe();
    }

    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  getImagePath(inventory: InventoryEntity) {
    return `./assets/${inventory.image}`;
  }

  getPriceString(price: Price, priceType: string) {
    // @ts-ignore
    return `${price[priceType]}${price.unit}`;
  }

  savePrice() {
    if (this.prices) {
      this.optimizerService.save(this.prices);
    }

  }

}
