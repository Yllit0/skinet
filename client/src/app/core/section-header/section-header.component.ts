import {Component, OnDestroy, OnInit} from '@angular/core';
import { BreadcrumbService } from "xng-breadcrumb";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit, OnDestroy {
  breadcrumb$: Observable<any[]> | any;
  subBreadcrumb: Subscription | any;

  constructor(private bcService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.bcService.breadcrumbs$.subscribe(response => {
      this.breadcrumb$ = response;
    });
    this.subBreadcrumb = this.breadcrumb$;
  }

  ngOnDestroy() {
    this.subBreadcrumb.unsubscribe();
  }
}
