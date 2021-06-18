import { Component, OnInit } from '@angular/core';
import { AsyncValidator, AsyncValidatorFn, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AccountService } from "../account.service";
import { Router } from "@angular/router";
import {of, timer} from "rxjs";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  errors: string[] | any;
  checkEmailIfIsUseFromAnotherUser: any;

  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      displayName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$')],
      [this.validateEmailNotTaken()]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe(response => {
      this.router.navigateByUrl('/shop');
      console.log('response of register component', response);
    }, error => {
      this.errors = error.errors;
    });
  }

  validateEmailNotTaken(): AsyncValidatorFn | any {
    return (control: any) => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }
          return this.accountService.checkEmailExists(control.value).pipe(
            map((res: any) => {
              this.checkEmailIfIsUseFromAnotherUser = res;
              return res ? { emailExists : true } : null;
            })
          );
        })
      );
    };
  }

}
