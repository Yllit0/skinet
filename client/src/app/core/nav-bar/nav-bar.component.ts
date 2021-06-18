import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketService } from "../../basket/basket.service";
import { Observable, Subscription } from "rxjs";
import { IBasket } from "../../shared/_models/basket";
import { AccountService } from "../../account/account.service";
import { IUser } from "../../shared/_models/user";
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  basket: number | any;
  subItems: Subscription | any;
  currentUser: any;

  constructor(private basketService: BasketService,
              private accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
    this.basketService.basket$.subscribe(
      response => {
        if (response) {
          this.basket = response.items.length;
        }
      }
    );
    this.accountService.currentUser$.subscribe((response: IUser | any) => {
      this.currentUser = response;
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/account/login');
  }

  ngOnDestroy() {
    this.subItems.unsubscribe();
  }
}
