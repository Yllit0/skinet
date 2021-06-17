import {Component, OnDestroy, OnInit} from '@angular/core';
import { BasketService } from "../../basket/basket.service";
import {Observable, Subscription} from "rxjs";
import { IBasket } from "../../shared/_models/basket";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  basket: number | any;
  subItems: Subscription | any;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.basket$.subscribe(
      response => {
        if (response) {
          this.basket = response.items.length;
        }
      }
    )
  }

  ngOnDestroy() {
    this.subItems.unsubscribe();
  }
}
