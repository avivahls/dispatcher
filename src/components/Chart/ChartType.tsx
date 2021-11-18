export const enum ChartType {
  Doughnut,
  Line,
  Bar,
}
export type IChartData = ILineData | IDoughnutData | IBarData;

export type ILineData = {
  labels: string[];
  datasets: [
    {
      data: number[];
      borderColor?: string;
      backgroundColor?: string;
    }
  ];
};
export type IDoughnutData = {
  labels: string[];
  datasets: [
    {
      data: number[];
      backgroundColor?: string[];
    }
  ];
};
export type IBarData = {
  labels: string[];
  datasets: [
    {
      data: number[];
      backgroundColor?: string;
    }
  ];
};
export type IChartOptions = {
  responsive: boolean;
  maintainAspectRatio: boolean;
  indexAxis?: string;
  tension?: number;
  borderRadius?: number;
  cutout?: string;
  radius?: string;
  fill?: {
    target: string;
  };
};
