import { Pipe, PipeTransform } from '@angular/core';
import { Costumer } from '../interfaces/costumer';
@Pipe({
  name: 'customersFilter',
})
export class CustomersFilterPipe implements PipeTransform {
  transform(
    value: Required<Costumer>[] | null,
    property: keyof Required<Costumer>,
    term: string
  ): Required<Costumer>[] | null {
    if (!value) {
      return null;
    }
    return value.filter((customer) =>
      customer[property]?.toLowerCase().includes(term.toLowerCase())
    );
  }
}
