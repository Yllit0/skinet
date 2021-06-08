import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';

import { ShopService } from './shop.service';
import { ProductItemComponent } from './product-item/product-item.component';
import { SharedModule } from "../shared/shared.module";
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShopRoutingModule } from "./shop-routing.module";



@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],
  exports: [
    SharedModule,
    ProductDetailsComponent
  ],
  providers: [ShopService]
})
export class ShopModule { }
