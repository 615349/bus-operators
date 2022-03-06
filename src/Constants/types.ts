export type Route = {
  id: string;
  routeVariant: string;
  deviationFromTimetable: number | null;
}

export type OperatorType = {
  name: string;
  date: string;
  routes: Route[];
}

export interface BusApiResponse {
  operators: OperatorType[];
}
