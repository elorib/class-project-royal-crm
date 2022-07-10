import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Observable } from 'rxjs';
import { Costumer } from 'src/app/interfaces/costumer';

@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrls: ['./costumers.component.scss'],
})
export class CostumersComponent implements OnInit {
  customers$: Observable<Required<Costumer>[]>;
  constructor(private customersService: CustomersService) {
    this.customers$ = this.customersService.getAll();
  }
  inputFN = '';
  inputP = '';
  inputLN = '';

  remove(id: string) {
    if (confirm('Are you sure you want to delete?')) {
      this.customersService.remove(id);
    }
  }

  ngOnInit(): void {}
}
