import { Component, OnInit } from '@angular/core';

import { IProduct } from "../../shared/_models/products";
import { ShopService } from "../shop.service";
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbService } from "xng-breadcrumb";
import { BasketService } from "../../basket/basket.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | any;
  quantity = 1;
  constructor(private shopService: ShopService,
              private route: ActivatedRoute,
              private bcService: BreadcrumbService,
              private basketService: BasketService) {
    this.bcService.set('@productDetails', '');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity() {
    this.quantity++
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--
    }
  }

  loadProduct() {
    this.shopService.getProduct(Number(this.route.snapshot.paramMap.get('id'))).subscribe(product => {
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    }, error => {
      console.log(error);
    });
  }

}
