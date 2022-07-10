import { Component, OnInit } from '@angular/core';
import { Costumer } from 'src/app/interfaces/costumer';
import { NgForm } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-costumers-new',
  templateUrl: './costumers-new.component.html',
  styleUrls: ['./costumers-new.component.scss'],
})
export class CostumersNewComponent implements OnInit {
  form: Costumer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  constructor(
    private customersService: CustomersService,
    private routerService: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customersService.add(this.form);
      this.routerService.navigate(['..'], {
        relativeTo: this.activatedRoute,
      });
    }
  }

  reset(customerForm: NgForm) {
    customerForm.reset({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }
  ngOnInit(): void {}
}
