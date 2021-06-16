import { Component, OnInit } from '@angular/core';
import { BasketService } from "./basket.service";
import {IBasketItem} from "../shared/_models/basket";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket: any;

  constructor(private basketService: BasketService,
              private router: Router) { }

  ngOnInit(): void {
    this.basketService.basket$.subscribe(
      response => {
        if (response) {
          this.basket = response.items;
          console.log('response in basket component', response.items);
        } else {
          setTimeout(() => {
              // location.reload();
          }, 500)
        }
      }
    )
  }

  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem) {
    this.basketService.decrementItemQuantity(item);
    if (this.basket.length == 0) {
      location.reload();
    }
  }
}
