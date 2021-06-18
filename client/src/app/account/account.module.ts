import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountRoutingModule } from "./account-routing.module";
import { SharedModule } from "../shared/shared.module";
import { TextInputComponent } from './text-input/text-input.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ],
  exports: [
    TextInputComponent
  ]
})
export class AccountModule { }
