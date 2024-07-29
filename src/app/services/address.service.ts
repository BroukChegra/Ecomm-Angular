import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get(`${environment.apiUrl}/addresses`)
  }
  Save(data: Address) {
    return this.http.post(`${environment.apiUrl}/addresses`, data);
  }
}
