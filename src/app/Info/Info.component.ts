import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../_model/Customer';
import { DataService } from '../_service/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-Info',
  templateUrl: './Info.component.html',
  styleUrls: ['./Info.component.css']
})
export class InfoComponent implements OnInit {

  @ViewChild('f') form: NgForm;
  customer: Customer;
  constructor(private d: DataService, private router: Router) { }

  ngOnInit() {
  }

  submit(){

    this.customer = new Customer();
    this.customer.name = this.form.value.Name;
    this.customer.address = this.form.value.Address;
    this.d.setCustomer(this.customer);
    console.log(this.customer);
    this.router.navigate(['/render']);

  }



}
