import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Costumer } from 'src/app/interfaces/costumer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss'],
})
export class CustomersDetailsComponent implements OnInit {
  customer$: Observable<Required<Costumer>>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService
  ) {
    this.customer$ = this.activatedRoute.params.pipe(
      switchMap((param) => this.customersService.getById(param['id']))
    );
  }

  ngOnInit(): void {}
}
