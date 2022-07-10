import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap, take } from 'rxjs';
import { Costumer } from 'src/app/interfaces/costumer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit {
  form: Required<Costumer> = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private routerService: Router
  ) {}

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customersService.update(this.form);
      this.routerService.navigate(['../..']),
        {
          relativeTo: this.activatedRoute,
        };
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap((param) =>
          this.customersService.getById(param['id']).pipe(take(1))
        )
      )
      .subscribe((customer) => (this.form = customer));
  }
}
