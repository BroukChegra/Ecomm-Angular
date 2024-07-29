import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-address',
  templateUrl: './news-address.component.html',
  styleUrls: ['./news-address.component.css']
})
export class NewsAddressComponent implements OnInit {
  open: boolean | undefined;
  addressForm: FormGroup;
  @Output() modalAddress = new EventEmitter();

  constructor() {

    this.addressForm = new FormGroup({
        city: new FormControl(null, Validators.required),
        street: new FormControl(null, Validators.required),
        postal: new FormControl(null, Validators.required),
        country: new FormControl(null, Validators.required),
        type: new FormControl("Billing", Validators.required)
    })

   }

  ngOnInit(): void {
  }

  createAddress() {

    this.modalAddress.emit(this.addressForm.value);
    this.addressForm.reset();
  }

}
