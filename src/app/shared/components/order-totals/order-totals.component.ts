import { Component, OnInit } from '@angular/core';
import {IBasketTotals} from "../../_models/basket";
import {BasketService} from "../../../basket/basket.service";

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css']
})
export class OrderTotalsComponent implements OnInit {
  basketTotal$: IBasketTotals | any;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.basketTotal$.subscribe(response => {
      this.basketTotal$ = response;
    })
  }

}
