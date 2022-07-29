import { Params } from '@angular/router';

export interface INavItem {
  icon: string;
  name: string;
  url: string;
  queryParams?: Params;

  children?: {
    name: string;
    url: string;
    queryParams?: Params;
  }[];
}
