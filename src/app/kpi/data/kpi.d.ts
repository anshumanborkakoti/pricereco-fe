// Generated by https://quicktype.io

declare namespace KPI {
  interface PriceOverTime {
    labels: string[];
    datasets: Dataset[];
  }

  interface Dataset {
    data: number[];
    label: string;
  }

}

export = KPI;
