import { NgModule } from '@angular/core';
import { BasketComponent } from './basket.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BasketRoutingModule } from "./basket-routing.module";
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class BasketModule { }
