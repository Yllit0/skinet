import { Component, OnInit } from '@angular/core';

import { IProduct } from "../../shared/_models/products";
import { ShopService } from "../shop.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | any;
  constructor(private shopService: ShopService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.shopService.getProduct(Number(this.route.snapshot.paramMap.get('id'))).subscribe(product => {
      this.product = product;
      console.log(product);
    }, error => {
      console.log(error);
    });
  }

}
