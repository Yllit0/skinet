import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { IProduct } from './_models/products';
import { IPagination } from './_models/pagination';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  products: IProduct[] | any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('https://localhost:5001/api/products?pageSize=50').subscribe((response: IPagination | any) => {
      this.products = response.data;
    }, error => {
      console.log(error);
    });
  }
}
