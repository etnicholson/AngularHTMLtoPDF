import { Injectable } from '@angular/core';
import { Customer } from '../_model/Customer';

@Injectable({
  providedIn: 'root'
})
export class DataService {

customer: Customer;

constructor() { }


setCustomer(c: Customer)
{
  this.customer = c;
}

retrieveCustomer(){
 return this.customer;
}


}
