import { IProduct } from './products';

export interface IPagination {
  pageIndex: any;
  pageSize: any;
  count: number;
  data: IProduct[];
}
