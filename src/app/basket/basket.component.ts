import { Component, OnInit } from '@angular/core';
import { BasketService } from "./basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basket: any;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketService.basket$.subscribe(
      response => {
        if (response) {
          this.basket = response.items;
        }
      }
    )
  }

}
