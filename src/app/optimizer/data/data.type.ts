export interface Prices {
  metrics: MetricsEntity;
  stores: (StoresEntity)[];
}
export interface MetricsEntity {
  revenue: RevenueOrSales;
  sales: RevenueOrSales;
  margin: RevenueOrSales;
}
export interface RevenueOrSales {
  current: number;
  unit: string;
  projected: number;
}
export interface StoresEntity {
  id: string;
  name: string;
  owner: string;
  inventory: (InventoryEntity)[];
}
export interface InventoryEntity {
  skuid: string;
  units: number;
  category: string;
  image: string;
  price: Price;
  alert: Alert;
  name: string;
}
export interface Price {
  recommended: number;
  current: number;
  startrange: number;
  endrange: number;
  unit: string;
}
export interface Alert {
  status: 'warning' | 'ok' | 'pending';
  details?: string;
}
